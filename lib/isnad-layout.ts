// ════════════════════════════════════════════════════════════════════
//  isnad-layout.ts — โครงสร้างข้อมูล + คำนวณตำแหน่ง (dagre) + กราฟยูทิลิตี
//  สำหรับแผนภาพสายรายงานอิสนาด (IsnadNetworkMap)
//  อ่านข้อมูลจาก data/isnad-prayer.json เท่านั้น — ห้าม hardcode รายชื่อ
// ════════════════════════════════════════════════════════════════════

import dagre from "dagre";

// ── ชนิดข้อมูลตามโครงสร้างไฟล์ JSON ──
export interface NarratorDatum {
  id: string;
  name_th: string;
  name_ar: string;
  generation: number;
  died_ah?: number;
  city?: string;
  note_th?: string;
  verify?: boolean;
}

export interface BookDatum {
  id: string;
  name_th: string;
  name_ar: string;
  author_died_ah?: number;
  verify?: boolean;
}

export interface EdgeDatum {
  from: string;
  to: string;
  ref?: string;
  note_th?: string;
  verify?: boolean;
}

export interface IsnadData {
  hadith: { title_th: string; note_th?: string };
  narrators: NarratorDatum[];
  books: BookDatum[];
  edges: EdgeDatum[];
}

// ── โหนดหลังจัดวางตำแหน่งแล้ว ──
export interface LayoutNode {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  kind: "person" | "book";
  layer: number; // generation ของบุคคล / ชั้นสุดท้ายสำหรับตำรา
  narrator?: NarratorDatum;
  book?: BookDatum;
}

export interface LayoutEdge extends EdgeDatum {
  id: string; // ไม่ซ้ำกันแม้มีเส้นคู่ขนาน
}

export const PERSON_W = 168;
export const PERSON_H = 62;
export const BOOK_W = 178;
export const BOOK_H = 66;

export const edgeIdOf = (e: EdgeDatum, index: number) =>
  `e${index}:${e.from}->${e.to}`;

// ── ชั้น (layer) ของโหนดแต่ละตัว: บุคคลใช้ generation, ตำราอยู่ชั้นสุดท้าย ──
export function maxGeneration(data: IsnadData): number {
  return data.narrators.reduce((m, n) => Math.max(m, n.generation), 0);
}

export function layerOf(data: IsnadData, id: string): number {
  const n = data.narrators.find((x) => x.id === id);
  if (n) return n.generation;
  return maxGeneration(data) + 1; // ตำรา
}

// ── จัดวางด้วย dagre (บนลงล่าง) แล้วดันตำราทั้งหมดลงแถวล่างสุด ──
export function layoutGraph(data: IsnadData): {
  nodes: LayoutNode[];
  edges: LayoutEdge[];
} {
  const g = new dagre.graphlib.Graph();
  g.setGraph({ rankdir: "TB", nodesep: 26, ranksep: 92, marginx: 40, marginy: 40 });
  g.setDefaultEdgeLabel(() => ({}));

  const bookIds = new Set(data.books.map((b) => b.id));

  data.narrators.forEach((n) =>
    g.setNode(n.id, { width: PERSON_W, height: PERSON_H })
  );
  data.books.forEach((b) => g.setNode(b.id, { width: BOOK_W, height: BOOK_H }));
  data.edges.forEach((e) => g.setEdge(e.from, e.to));

  dagre.layout(g);

  // dagre ให้ x ที่ช่วยลดการไขว้ของเส้น แต่ rank ของมันไม่ตรงกับ tabaqat —
  // จึงบังคับแถว (y) ตาม generation แล้วกวาดระยะขั้นต่ำกันโหนดซ้อนกันในแต่ละแถว
  const bookLayer = maxGeneration(data) + 1;
  const ROW_GAP = 170;
  const gap = 26;

  type RowItem = {
    id: string;
    dagreX: number;
    width: number;
    height: number;
    kind: "person" | "book";
    layer: number;
    narrator?: NarratorDatum;
    book?: BookDatum;
  };

  const rows = new Map<number, RowItem[]>();
  const push = (item: RowItem) => {
    if (!rows.has(item.layer)) rows.set(item.layer, []);
    rows.get(item.layer)!.push(item);
  };

  data.narrators.forEach((n) => {
    const p = g.node(n.id);
    if (!p) return;
    push({
      id: n.id,
      dagreX: p.x,
      width: PERSON_W,
      height: PERSON_H,
      kind: "person",
      layer: n.generation,
      narrator: n,
    });
  });
  data.books.forEach((b) => {
    const p = g.node(b.id);
    push({
      id: b.id,
      dagreX: p?.x ?? 0,
      width: BOOK_W,
      height: BOOK_H,
      kind: "book",
      layer: bookLayer,
      book: b,
    });
  });

  const nodes: LayoutNode[] = [];
  const rowSpans: { min: number; max: number; layer: number }[] = [];

  [...rows.entries()]
    .sort((a, b) => a[0] - b[0])
    .forEach(([layer, items]) => {
      items.sort((a, b) => a.dagreX - b.dagreX);
      // กวาดซ้าย→ขวา: ยึด x ของ dagre ไว้ให้ใกล้พ่อแม่ แต่บังคับระยะห่างขั้นต่ำ
      let cursor = -Infinity;
      const xs: number[] = [];
      const X_SCALE = 0.62; // บีบแนวนอน — dagre เว้นช่องกว้างเกินจำเป็นสำหรับกราฟนี้
      items.forEach((it) => {
        const want = it.dagreX * X_SCALE - it.width / 2;
        const x = Math.max(want, cursor);
        xs.push(x);
        cursor = x + it.width + gap;
      });
      const min = xs[0];
      const max = xs[xs.length - 1] + items[items.length - 1].width;
      rowSpans.push({ min, max, layer });
      items.forEach((it, i) => {
        nodes.push({
          id: it.id,
          x: xs[i],
          y: layer * ROW_GAP,
          width: it.width,
          height: it.height,
          kind: it.kind,
          layer,
          narrator: it.narrator,
          book: it.book,
        });
      });
    });

  // จัดแต่ละแถวให้กึ่งกลางตรงกับแถวที่กว้างที่สุด (อ่านเป็นพีระมิดคว่ำได้ง่าย)
  const globalCenter =
    rowSpans.reduce((acc, r) => acc + (r.min + r.max) / 2, 0) / rowSpans.length;
  rowSpans.forEach((r) => {
    const shift = globalCenter - (r.min + r.max) / 2;
    // เลื่อนเฉพาะแถวที่แคบมาก (ชั้น 0-1 และแถวตำรา) — แถวกลางคง x ของ dagre ไว้
    const rowWidth = r.max - r.min;
    const widest = Math.max(...rowSpans.map((s) => s.max - s.min));
    if (rowWidth < widest * 0.6) {
      nodes.forEach((n) => {
        if (n.layer === r.layer) n.x += shift;
      });
    }
  });

  const edges: LayoutEdge[] = data.edges.map((e, i) => ({
    ...e,
    id: edgeIdOf(e, i),
  }));

  // กันกรณีข้อมูลอ้าง id ที่ไม่มีจริง
  const known = new Set(nodes.map((n) => n.id));
  return {
    nodes,
    edges: edges.filter((e) => known.has(e.from) && known.has(e.to)),
  };
}

// ── adjacency ──
function buildAdjacency(data: IsnadData) {
  const out = new Map<string, string[]>();
  const inn = new Map<string, string[]>();
  data.edges.forEach((e) => {
    if (!out.has(e.from)) out.set(e.from, []);
    if (!inn.has(e.to)) inn.set(e.to, []);
    out.get(e.from)!.push(e.to);
    inn.get(e.to)!.push(e.from);
  });
  return { out, inn };
}

function reach(start: string, adj: Map<string, string[]>): Set<string> {
  const seen = new Set<string>();
  const stack = [start];
  while (stack.length) {
    const cur = stack.pop()!;
    for (const nxt of adj.get(cur) ?? []) {
      if (!seen.has(nxt)) {
        seen.add(nxt);
        stack.push(nxt);
      }
    }
  }
  return seen;
}

export function descendantsOf(data: IsnadData, id: string): Set<string> {
  return reach(id, buildAdjacency(data).out);
}

export function ancestorsOf(data: IsnadData, id: string): Set<string> {
  return reach(id, buildAdjacency(data).inn);
}

// ── ไฮไลต์ทุกเส้นทางที่ "ผ่าน" โหนดหนึ่ง: บรรพบุรุษ + ลูกหลาน + ตัวโหนดเอง ──
export function highlightThrough(
  data: IsnadData,
  id: string
): { nodes: Set<string>; edges: Set<string> } {
  const anc = ancestorsOf(data, id);
  const desc = descendantsOf(data, id);
  const nodes = new Set<string>([id, ...anc, ...desc]);
  const edges = new Set<string>();
  data.edges.forEach((e, i) => {
    const toUp = e.to === id || anc.has(e.to); // เส้นฝั่งต้นน้ำ (จบที่บรรพบุรุษ/ตัวโหนด)
    const fromDown = e.from === id || desc.has(e.from); // เส้นฝั่งปลายน้ำ
    if (toUp || fromDown) edges.add(edgeIdOf(e, i));
  });
  return { nodes, edges };
}

// ── Filter: เฉพาะสายของเศาะฮาบะฮ์ / เฉพาะสายที่จบในตำราเล่มหนึ่ง (ใช้ร่วมกันได้) ──
export function filterSubset(
  data: IsnadData,
  opts: { companionId?: string | null; bookId?: string | null }
): { nodes: Set<string>; edges: Set<string> } | null {
  const { companionId, bookId } = opts;
  if (!companionId && !bookId) return null;

  let visible: Set<string> | null = null;

  if (companionId) {
    const s = descendantsOf(data, companionId);
    s.add(companionId);
    // รวมต้นทาง (ชั้น 0) ให้เห็นจุดเริ่มเสมอ
    data.narrators
      .filter((n) => n.generation === 0)
      .forEach((n) => s.add(n.id));
    visible = s;
  }
  if (bookId) {
    const s = ancestorsOf(data, bookId);
    s.add(bookId);
    visible = visible ? new Set([...visible].filter((x) => s.has(x))) : s;
  }

  const nodes = visible!;
  const edges = new Set<string>();
  data.edges.forEach((e, i) => {
    if (nodes.has(e.from) && nodes.has(e.to)) edges.add(edgeIdOf(e, i));
  });
  return { nodes, edges };
}

// ── สายเศาะฮาบะฮ์ต้นทางของแต่ละโหนด (บางโหนดรับหลายสาย) ──
export function companionRoots(data: IsnadData): Map<string, Set<string>> {
  const companions = data.narrators.filter((n) => n.generation === 1);
  const { out } = buildAdjacency(data);
  const roots = new Map<string, Set<string>>();
  companions.forEach((c) => {
    const sub = reach(c.id, out);
    sub.add(c.id);
    sub.forEach((id) => {
      if (!roots.has(id)) roots.set(id, new Set());
      roots.get(id)!.add(c.id);
    });
  });
  return roots;
}

// ── สถิติสรุป — คำนวณจากข้อมูลจริงทั้งหมด ──
export interface IsnadStats {
  narratorCount: number; // ผู้รายงาน (ไม่นับท่านนบี ﷺ)
  companionCount: number;
  bookCount: number;
  chainToBookCount: number; // จำนวนเส้นที่วิ่งเข้าตำรา
  cities: string[];
}

export function computeStats(data: IsnadData): IsnadStats {
  const bookIds = new Set(data.books.map((b) => b.id));
  const cities = new Set<string>();
  data.narrators.forEach((n) => {
    if (!n.city) return;
    n.city.split("/").forEach((c) => {
      const clean = c.replace(/\s*\(.*?\)\s*/g, "").trim();
      if (clean) cities.add(clean);
    });
  });
  return {
    narratorCount: data.narrators.filter((n) => n.generation > 0).length,
    companionCount: data.narrators.filter((n) => n.generation === 1).length,
    bookCount: data.books.length,
    chainToBookCount: data.edges.filter((e) => bookIds.has(e.to)).length,
    cities: [...cities],
  };
}
