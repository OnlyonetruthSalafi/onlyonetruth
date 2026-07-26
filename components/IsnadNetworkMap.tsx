"use client";

// ════════════════════════════════════════════════════════════════════
//  IsnadNetworkMap — แผนภาพโครงข่ายสายรายงานอิสนาดแบบอินเทอร์แอกทีฟ
//  ข้อมูล: Figure 13.1, al-Azami, The History of the Qur'anic Text p.208
//  อ่านข้อมูลจาก data/isnad-prayer.json เท่านั้น
// ════════════════════════════════════════════════════════════════════

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Handle,
  Position,
  MarkerType,
  type Node,
  type Edge,
  type NodeProps,
  type NodeTypes,
  type ReactFlowInstance,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import rawData from "@/data/isnad-prayer.json";
import narration from "@/lib/isnad-narration";
import {
  type IsnadData,
  type LayoutNode,
  layoutGraph,
  layerOf,
  maxGeneration,
  highlightThrough,
  filterSubset,
  companionRoots,
  computeStats,
} from "@/lib/isnad-layout";

const data = rawData as unknown as IsnadData;

// ── สีประจำชั้น (tabaqat) — โทนที่อ่านชัดบนพื้นเข้มของเว็บ ──
const GEN_COLORS: string[] = [
  "#D4AF37", // 0 ท่านนบี ﷺ — ทอง
  "#4CBB6C", // 1 เศาะฮาบะฮ์ — เขียว
  "#45A8C9", // 2 — ฟ้าน้ำทะเล
  "#7D8FE0", // 3 — น้ำเงินม่วง
  "#B07BD6", // 4 — ม่วง
  "#D9758F", // 5 — กุหลาบ
];
const BOOK_COLOR = "#C9563F"; // ตำรา — แดงอิฐ
const MIXED_COLOR = "#A9A9B0"; // โหนดที่รับหลายสายเศาะฮาบะฮ์

// สีประจำเศาะฮาบะฮ์ต้นสาย (วนตามลำดับที่พบในข้อมูล)
const ROOT_PALETTE = [
  "#4CBB6C",
  "#45A8C9",
  "#E0A93D",
  "#D9758F",
  "#B07BD6",
  "#E0763D",
  "#5FC9B0",
  "#8FB2E0",
];

// ข้อความบรรยาย (ป้ายชั้น/เล่าเรื่อง/อ่านออกเสียง) อยู่ใน lib/isnad-narration.js
// ใช้ร่วมกับสคริปต์ npm run gen-tts เพื่อให้ไฟล์เสียงตรงกับข้อความบนจอเสมอ
const {
  genLabel,
  storyText,
  personNarration,
  bookNarration,
  forSpeech,
  storyAudioFile,
  nodeAudioFile,
} = narration;

const AUDIO_BASE = "/audio/isnad/";

// ═══════════════ Custom Nodes ═══════════════

type PersonData = {
  th: string;
  ar: string;
  color: string;
  dim: boolean;
  ring: boolean;
  verify?: boolean;
  [key: string]: unknown;
};

function PersonNode({ data: d }: NodeProps<Node<PersonData, "person">>) {
  return (
    <div
      className="rounded-lg border px-2.5 py-1.5 text-center transition-opacity duration-300"
      style={{
        width: 168,
        minHeight: 62,
        background: "rgba(30,17,14,0.94)",
        borderColor: d.color,
        borderWidth: d.ring ? 2.5 : 1.5,
        boxShadow: d.ring ? `0 0 12px ${d.color}` : "0 2px 8px rgba(0,0,0,0.4)",
        opacity: d.dim ? 0.15 : 1,
      }}
    >
      <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
      <p
        className="font-pridi leading-snug"
        style={{ fontSize: 12.5, color: "#FFFFF0" }}
      >
        {d.th}
        {d.verify && (
          <span title="รอตรวจสอบกับต้นฉบับ" style={{ color: "#D4AF37" }}>
            {" "}*
          </span>
        )}
      </p>
      <p
        className="font-amiri leading-snug"
        dir="rtl"
        style={{ fontSize: 13, color: "rgba(245,230,211,0.7)" }}
      >
        {d.ar}
      </p>
      <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
    </div>
  );
}

function BookNode({ data: d }: NodeProps<Node<PersonData, "book">>) {
  return (
    <div
      className="border-[3px] px-2.5 py-1.5 text-center transition-opacity duration-300"
      style={{
        width: 178,
        minHeight: 66,
        borderRadius: 6,
        background: "rgba(201,86,63,0.16)",
        borderColor: d.ring ? "#F0D98C" : BOOK_COLOR,
        boxShadow: d.ring
          ? "0 0 12px rgba(240,217,140,0.8)"
          : "0 2px 8px rgba(0,0,0,0.4)",
        opacity: d.dim ? 0.15 : 1,
      }}
    >
      <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
      <p
        className="font-pridi font-semibold leading-snug"
        style={{ fontSize: 12.5, color: "#F5E6D3" }}
      >
        {d.th}
        {d.verify && (
          <span title="รอตรวจสอบกับต้นฉบับ" style={{ color: "#D4AF37" }}>
            {" "}*
          </span>
        )}
      </p>
      <p
        className="font-amiri leading-snug"
        dir="rtl"
        style={{ fontSize: 13, color: "rgba(245,230,211,0.65)" }}
      >
        {d.ar}
      </p>
    </div>
  );
}

const nodeTypes: NodeTypes = {
  person: PersonNode as never,
  book: BookNode as never,
};

// ═══════════════ Main Component ═══════════════

export default function IsnadNetworkMap() {
  const wrapRef = useRef<HTMLDivElement>(null);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [colorMode, setColorMode] = useState<"gen" | "root">("gen");
  const [companionFilter, setCompanionFilter] = useState<string>("");
  const [bookFilter, setBookFilter] = useState<string>("");
  const [storyStep, setStoryStep] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [tip, setTip] = useState<{ x: number; y: number; text: string } | null>(
    null
  );
  const [rf, setRf] = useState<ReactFlowInstance | null>(null);

  // ── เสียงบรรยายภาษาไทย: เล่นไฟล์ mp3 ที่สร้างล่วงหน้า (npm run gen-tts)
  //    ถ้าไม่มีไฟล์จึงถอยไปใช้ Web Speech API (เบราว์เซอร์ส่วนใหญ่บน
  //    เดสก์ท็อปไม่มีเสียงไทย จึงพึ่ง Web Speech อย่างเดียวไม่ได้) ──
  const [ttsOn, setTtsOn] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ── ข้อมูลคงที่ คำนวณครั้งเดียว ──
  const layout = useMemo(() => layoutGraph(data), []);
  const stats = useMemo(() => computeStats(data), []);
  const roots = useMemo(() => companionRoots(data), []);
  const maxGen = useMemo(() => maxGeneration(data), []);
  const bookLayer = maxGen + 1;
  const companions = useMemo(
    () => data.narrators.filter((n) => n.generation === 1),
    []
  );
  const rootColor = useMemo(() => {
    const m = new Map<string, string>();
    companions.forEach((c, i) => m.set(c.id, ROOT_PALETTE[i % ROOT_PALETTE.length]));
    return m;
  }, [companions]);

  const nodeById = useMemo(() => {
    const m = new Map<string, LayoutNode>();
    layout.nodes.forEach((n) => m.set(n.id, n));
    return m;
  }, [layout]);

  // ── สถานะที่มาจากการโต้ตอบ ──
  const highlight = useMemo(
    () => (selectedId && storyStep === null ? highlightThrough(data, selectedId) : null),
    [selectedId, storyStep]
  );
  const subset = useMemo(
    () =>
      filterSubset(data, {
        companionId: companionFilter || null,
        bookId: bookFilter || null,
      }),
    [companionFilter, bookFilter]
  );

  const colorOf = useCallback(
    (n: LayoutNode): string => {
      if (n.kind === "book") return BOOK_COLOR;
      if (colorMode === "gen")
        return GEN_COLORS[n.layer] ?? GEN_COLORS[GEN_COLORS.length - 1];
      if (n.layer === 0) return GEN_COLORS[0];
      const r = roots.get(n.id);
      if (!r || r.size === 0) return MIXED_COLOR;
      if (r.size > 1) return MIXED_COLOR;
      return rootColor.get([...r][0]) ?? MIXED_COLOR;
    },
    [colorMode, roots, rootColor]
  );

  // ── แปลงเป็นโหนด/เส้นของ React Flow ตามสถานะปัจจุบัน ──
  const flowNodes: Node[] = useMemo(() => {
    return layout.nodes.map((n) => {
      const hidden = subset ? !subset.nodes.has(n.id) : false;
      let dim = false;
      let ring = false;
      if (storyStep !== null) {
        dim = n.layer > storyStep;
        ring = n.layer === storyStep;
      } else if (highlight) {
        dim = !highlight.nodes.has(n.id);
        ring = n.id === selectedId;
      }
      const info = n.narrator ?? n.book!;
      return {
        id: n.id,
        type: n.kind,
        position: { x: n.x, y: n.y },
        // ระบุขนาดคงที่ให้ MiniMap/fitView ใช้ได้ (flow แบบ controlled ไม่มี measured)
        width: n.width,
        height: n.height,
        draggable: false,
        connectable: false,
        hidden,
        data: {
          th: info.name_th,
          ar: info.name_ar,
          color: colorOf(n),
          dim,
          ring,
          verify: info.verify,
        },
      } satisfies Node;
    });
  }, [layout, subset, storyStep, highlight, selectedId, colorOf]);

  const flowEdges: Edge[] = useMemo(() => {
    return layout.edges.map((e) => {
      const src = nodeById.get(e.from);
      const hidden = subset ? !subset.edges.has(e.id) : false;
      let faded = false;
      let strong = false;
      if (storyStep !== null) {
        const toLayer = layerOf(data, e.to);
        faded = toLayer > storyStep;
        strong = toLayer === storyStep;
      } else if (highlight) {
        strong = highlight.edges.has(e.id);
        faded = !strong;
      }
      const stroke = src ? colorOf(src) : "#D4AF37";
      return {
        id: e.id,
        source: e.from,
        target: e.to,
        type: "smoothstep",
        hidden,
        label: e.verify ? "*" : undefined,
        labelStyle: { fill: "#D4AF37", fontSize: 14, fontWeight: 700 },
        labelBgStyle: { fill: "transparent" },
        style: {
          stroke,
          strokeWidth: strong ? 2.6 : 1.4,
          opacity: faded ? 0.15 : strong ? 1 : 0.55,
          transition: "opacity 0.3s, stroke-width 0.3s",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 14,
          height: 14,
          color: stroke,
        },
      } satisfies Edge;
    });
  }, [layout, nodeById, subset, storyStep, highlight, colorOf]);

  const playingRef = useRef(playing);
  playingRef.current = playing;

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const load = () => setVoices(window.speechSynthesis.getVoices());
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", load);
      window.speechSynthesis.cancel();
    };
  }, []);

  const thaiVoice = useMemo(
    () => voices.find((v) => v.lang.toLowerCase().startsWith("th")) ?? null,
    [voices]
  );

  const stopSpeech = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }, []);

  const isSpeaking = useCallback(() => {
    const a = audioRef.current;
    return (
      (!!a && !a.paused && !a.ended) ||
      (typeof window !== "undefined" &&
        "speechSynthesis" in window &&
        window.speechSynthesis.speaking)
    );
  }, []);

  // fallback: อ่านด้วยเสียงสังเคราะห์ของเบราว์เซอร์
  const speakSynth = useCallback(
    (text: string, onDone?: () => void) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        onDone?.();
        return;
      }
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(forSpeech(text));
      u.lang = "th-TH";
      if (thaiVoice) u.voice = thaiVoice;
      u.rate = 0.95;
      let fired = false;
      const done = () => {
        if (!fired) {
          fired = true;
          onDone?.();
        }
      };
      u.onend = done;
      u.onerror = done;
      window.speechSynthesis.speak(u);
    },
    [thaiVoice]
  );

  // เล่นไฟล์เสียงที่สร้างล่วงหน้าก่อน — โหลดไม่ได้ค่อยถอยไป Web Speech
  const speak = useCallback(
    (file: string, text: string, onDone?: () => void) => {
      stopSpeech();
      const a = new Audio(AUDIO_BASE + file);
      audioRef.current = a;
      let fired = false;
      const done = () => {
        if (!fired) {
          fired = true;
          onDone?.();
        }
      };
      const fallback = () => {
        if (audioRef.current !== a || fired) return;
        speakSynth(text, done);
      };
      a.onended = done;
      a.onerror = fallback;
      a.play().catch(fallback);
    },
    [stopSpeech, speakSynth]
  );

  // จัดมุมมองใหม่เมื่อเปลี่ยนตัวกรอง — กราฟย่อยจะอยู่กลางจอเสมอ
  useEffect(() => {
    if (!rf) return;
    const t = setTimeout(
      () => rf.fitView({ padding: 0.15, duration: 400 }),
      60
    );
    return () => clearTimeout(t);
  }, [rf, subset]);

  // ── โหมดเล่าเรื่อง: เดินหน้าอัตโนมัติด้วยเวลาคงที่ (เมื่อปิดเสียงบรรยาย) ──
  useEffect(() => {
    if (!playing || storyStep === null || ttsOn) return;
    if (storyStep >= bookLayer) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setStoryStep((s) => (s ?? 0) + 1), 4000);
    return () => clearTimeout(t);
  }, [playing, storyStep, bookLayer, ttsOn]);

  // ── เมื่อเปิดเสียงบรรยาย: อ่านคำอธิบายของชั้นปัจจุบัน แล้วเดินหน้าตามจังหวะเสียง ──
  useEffect(() => {
    if (!ttsOn || storyStep === null) return;
    let cancelled = false;
    speak(
      storyAudioFile(storyStep),
      storyText(storyStep, bookLayer, stats),
      () => {
        if (cancelled || !playingRef.current) return;
        if (storyStep >= bookLayer) {
          setPlaying(false);
          return;
        }
        setTimeout(() => {
          if (!cancelled) setStoryStep((s) => (s ?? 0) + 1);
        }, 700);
      }
    );
    return () => {
      cancelled = true;
      stopSpeech();
    };
  }, [ttsOn, storyStep, bookLayer, stats, speak, stopSpeech]);

  const startStory = () => {
    setSelectedId(null);
    setCompanionFilter("");
    setBookFilter("");
    setStoryStep(0);
    setPlaying(true);
  };
  const exitStory = () => {
    setStoryStep(null);
    setPlaying(false);
  };

  // ── side panel ──
  const selected = selectedId ? nodeById.get(selectedId) : null;

  // ── เมื่อเปิดเสียงบรรยาย: อ่านข้อมูลโหนดที่คลิก ──
  useEffect(() => {
    if (!ttsOn || storyStep !== null || !selected) return;
    const text =
      selected.kind === "person"
        ? personNarration(selected.narrator!, bookLayer)
        : bookNarration(selected.book!);
    speak(nodeAudioFile(selected.id), text);
    return stopSpeech;
  }, [ttsOn, selected, storyStep, bookLayer, speak, stopSpeech]);

  const onNodeClick = useCallback((_: unknown, node: Node) => {
    setStoryStep(null);
    setPlaying(false);
    setSelectedId((cur) => (cur === node.id ? null : node.id));
  }, []);

  const onEdgeHover = useCallback(
    (evt: React.MouseEvent, edge: Edge) => {
      const le = layout.edges.find((e) => e.id === edge.id);
      if (!le || (!le.ref && !le.note_th)) return;
      const rect = wrapRef.current?.getBoundingClientRect();
      if (!rect) return;
      const parts: string[] = [];
      if (le.ref) parts.push(`อ้างอิง: ${le.ref}`);
      if (le.note_th) parts.push(le.note_th);
      if (le.verify) parts.push("* รอตรวจสอบกับต้นฉบับ");
      setTip({
        x: Math.min(evt.clientX - rect.left + 12, rect.width - 240),
        y: evt.clientY - rect.top + 12,
        text: parts.join(" · "),
      });
    },
    [layout.edges]
  );

  const cityLine = stats.cities.join(" ");

  return (
    <div
      className="relative rounded-card border border-gold/30 overflow-hidden"
      style={{ background: "rgba(20,10,8,0.55)" }}
    >
      <span className="ic-corner ic-corner-tl" />
      <span className="ic-corner ic-corner-tr" />
      <span className="ic-corner ic-corner-bl" />
      <span className="ic-corner ic-corner-br" />

      {/* ── หัวเรื่อง ── */}
      <div className="px-5 md:px-7 pt-5 md:pt-6">
        <p className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-gold/60 mb-1">
          Isnad Network
        </p>
        <h3 className="font-pridi text-lg md:text-xl text-paper-white font-semibold">
          {data.hadith.title_th} — โครงข่ายสายรายงานจริงจากผังของ al-Azami
        </h3>
      </div>

      {/* ── แถบสรุป (คำนวณจากข้อมูลจริง) ── */}
      <div className="px-5 md:px-7 pt-4">
        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-3">
          {[
            { n: stats.narratorCount, label: "ผู้รายงานในผัง" },
            { n: stats.companionCount, label: "เศาะฮาบะฮ์ต้นสาย" },
            { n: stats.bookCount, label: "ตำราที่บันทึก" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-card border border-gold/25 px-3 py-2.5 text-center"
              style={{ background: "rgba(212,175,55,0.06)" }}
            >
              <p className="font-cinzel text-xl md:text-2xl text-gold font-bold leading-none">
                {s.n}
              </p>
              <p className="font-pridi text-[11px] md:text-xs text-paper/60 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <p className="font-pridi text-xs md:text-sm text-paper/75 leading-relaxed">
          หะดีษบทเดียวถูกรายงานผ่านเศาะฮาบะฮ์ {stats.companionCount} ท่าน
          และผู้รายงานอีก {stats.narratorCount - stats.companionCount} คนที่กระจายอยู่คนละเมือง
          — {cityLine} — ก่อนบรรจบใน {stats.bookCount} ตำราต่างสำนัก ต่างเมือง ต่างยุค
          ({stats.chainToBookCount} จุดอ้างอิงเข้าตำรา)
          การที่คนต่างถิ่นต่างยุคจำนวนมากขนาดนี้จะ &quot;สมคบกันแต่ง&quot; หะดีษบทเดียวกันจึงเป็นไปไม่ได้
          — นี่คือข้อโต้แย้งของ al-Azami ต่อทฤษฎี common link ของ Joseph Schacht
        </p>
      </div>

      {/* ── แถบควบคุม ── */}
      <div className="px-5 md:px-7 pt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setColorMode((m) => (m === "gen" ? "root" : "gen"))}
          className="font-pridi text-xs px-3 py-2 rounded-btn border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
        >
          สี: {colorMode === "gen" ? "ตามชั้น (ตอบะเกาะฮ์)" : "ตามเศาะฮาบะฮ์ต้นสาย"}
        </button>

        <select
          value={companionFilter}
          onChange={(e) => {
            setCompanionFilter(e.target.value);
            setSelectedId(null);
            exitStory();
          }}
          className="font-pridi text-xs px-2 py-2 rounded-btn border border-gold/40 bg-transparent text-paper/85 max-w-[46vw]"
          style={{ background: "rgba(30,17,14,0.9)" }}
          aria-label="กรองตามเศาะฮาบะฮ์"
        >
          <option value="">เศาะฮาบะฮ์: ทุกสาย</option>
          {companions.map((c) => (
            <option key={c.id} value={c.id}>
              สายของ {c.name_th}
            </option>
          ))}
        </select>

        <select
          value={bookFilter}
          onChange={(e) => {
            setBookFilter(e.target.value);
            setSelectedId(null);
            exitStory();
          }}
          className="font-pridi text-xs px-2 py-2 rounded-btn border border-gold/40 text-paper/85 max-w-[46vw]"
          style={{ background: "rgba(30,17,14,0.9)" }}
          aria-label="กรองตามตำรา"
        >
          <option value="">ตำรา: ทุกเล่ม</option>
          {data.books.map((b) => (
            <option key={b.id} value={b.id}>
              จบใน {b.name_th}
            </option>
          ))}
        </select>

        {(companionFilter || bookFilter || selectedId) && (
          <button
            type="button"
            onClick={() => {
              setCompanionFilter("");
              setBookFilter("");
              setSelectedId(null);
            }}
            className="font-pridi text-xs px-3 py-2 rounded-btn border border-paper/25 text-paper/60 hover:text-paper hover:border-paper/50 transition-colors"
          >
            ✕ ล้างตัวกรอง
          </button>
        )}

        <button
          type="button"
          onClick={() =>
            setTtsOn((v) => {
              if (v) stopSpeech();
              return !v;
            })
          }
          title="เสียงบรรยายภาษาไทย (ไฟล์เสียงที่สร้างล่วงหน้า)"
          className={`font-pridi text-xs px-3 py-2 rounded-btn border transition-all ${
            ttsOn
              ? "bg-gold/15 text-gold border-gold shadow-glow-sm"
              : "text-paper/60 border-paper/25 hover:text-gold hover:border-gold/50"
          }`}
        >
          {ttsOn ? "🔊 เสียงบรรยาย: เปิด" : "🔇 เสียงบรรยาย: ปิด"}
        </button>

        <button
          type="button"
          onClick={storyStep === null ? startStory : exitStory}
          className={`font-pridi text-xs px-3 py-2 rounded-btn border transition-all ml-auto ${
            storyStep !== null
              ? "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-ink border-gold shadow-glow-sm"
              : "text-gold border-gold/40 hover:bg-gold/10"
          }`}
        >
          {storyStep !== null ? "✕ ออกจากโหมดเล่าเรื่อง" : "▶ โหมดเล่าเรื่อง"}
        </button>
      </div>

      {/* ── Legend ── */}
      <div className="px-5 md:px-7 pt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {colorMode === "gen" ? (
          <>
            {Array.from({ length: maxGen + 1 }, (_, g) => (
              <span key={g} className="flex items-center gap-1.5">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ background: GEN_COLORS[g] ?? GEN_COLORS[5] }}
                />
                <span className="font-pridi text-[11px] text-paper/70">
                  {genLabel(g, bookLayer)}
                </span>
              </span>
            ))}
          </>
        ) : (
          <>
            {companions.map((c) => (
              <span key={c.id} className="flex items-center gap-1.5">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ background: rootColor.get(c.id) }}
                />
                <span className="font-pridi text-[11px] text-paper/70">
                  {c.name_th}
                </span>
              </span>
            ))}
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ background: MIXED_COLOR }}
              />
              <span className="font-pridi text-[11px] text-paper/70">
                รับจากหลายสาย
              </span>
            </span>
          </>
        )}
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block w-3 h-3 border-2"
            style={{ borderColor: BOOK_COLOR, borderRadius: 3 }}
          />
          <span className="font-pridi text-[11px] text-paper/70">
            ตำราหะดีษ (สี่เหลี่ยมขอบหนา)
          </span>
        </span>
        <span className="font-pridi text-[11px] text-paper/45">
          · เครื่องหมาย * = รอตรวจสอบกับต้นฉบับ · คลิกโหนดเพื่อไฮไลต์ทุกเส้นทางที่ผ่าน
        </span>
      </div>

      {/* ── ตัวกราฟ ── */}
      <div
        ref={wrapRef}
        className="relative mx-5 md:mx-7 mt-4 rounded-card border border-gold/20 overflow-hidden"
        style={{ height: "min(72vh, 640px)", background: "rgba(14,8,6,0.6)" }}
      >
        <ReactFlow
          nodes={flowNodes}
          edges={flowEdges}
          nodeTypes={nodeTypes}
          colorMode="dark"
          fitView
          fitViewOptions={{ padding: 0.08 }}
          minZoom={0.08}
          maxZoom={2}
          nodesDraggable={false}
          nodesConnectable={false}
          zoomOnPinch
          panOnDrag
          onInit={setRf}
          onNodeClick={onNodeClick}
          onPaneClick={() => setSelectedId(null)}
          onEdgeMouseEnter={onEdgeHover}
          onEdgeMouseMove={onEdgeHover}
          onEdgeMouseLeave={() => setTip(null)}
          proOptions={{ hideAttribution: false }}
        >
          <Controls showInteractive={false} position="top-left" />
          <MiniMap
            pannable
            zoomable
            position="bottom-left"
            nodeColor={(n) => {
              const ln = nodeById.get(n.id);
              return ln ? colorOf(ln) : "#D4AF37";
            }}
            maskColor="rgba(20,10,8,0.75)"
            style={{ background: "rgba(30,17,14,0.9)" }}
          />
        </ReactFlow>

        {/* tooltip เส้นเชื่อม */}
        {tip && (
          <div
            className="absolute z-20 pointer-events-none rounded-btn border border-gold/40 px-3 py-2 max-w-[240px]"
            style={{
              left: tip.x,
              top: tip.y,
              background: "rgba(20,10,8,0.95)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
            }}
          >
            <p className="font-pridi text-[11px] text-paper/90 leading-relaxed">
              {tip.text}
            </p>
          </div>
        )}

        {/* side panel ข้อมูลโหนด */}
        {selected && storyStep === null && (
          <aside
            className="absolute z-20 top-2 right-2 bottom-2 w-[280px] max-w-[80vw] rounded-card border border-gold/40 p-4 overflow-y-auto"
            style={{ background: "rgba(20,10,8,0.96)" }}
          >
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="absolute top-2 right-3 text-paper/50 hover:text-paper text-sm"
              aria-label="ปิด"
            >
              ✕
            </button>
            {selected.kind === "person" ? (
              <>
                <p className="font-pridi text-base text-gold font-semibold leading-snug pr-5">
                  {selected.narrator!.name_th}
                  {selected.narrator!.verify && (
                    <span className="text-gold/80"> *</span>
                  )}
                </p>
                <p
                  className="font-amiri text-xl text-paper/85 mt-1"
                  dir="rtl"
                >
                  {selected.narrator!.name_ar}
                </p>
                <div className="h-px bg-gold/25 my-3" />
                <dl className="space-y-1.5">
                  <div>
                    <dt className="font-pridi text-[10px] text-paper/45">ชั้น (ตอบะเกาะฮ์)</dt>
                    <dd className="font-pridi text-xs text-paper/85">
                      {genLabel(selected.layer, bookLayer)}
                    </dd>
                  </div>
                  {selected.narrator!.died_ah != null && (
                    <div>
                      <dt className="font-pridi text-[10px] text-paper/45">ปีเสียชีวิต</dt>
                      <dd className="font-pridi text-xs text-paper/85">
                        ฮ.ศ. {selected.narrator!.died_ah}
                      </dd>
                    </div>
                  )}
                  {selected.narrator!.city && (
                    <div>
                      <dt className="font-pridi text-[10px] text-paper/45">เมือง</dt>
                      <dd className="font-pridi text-xs text-paper/85">
                        {selected.narrator!.city}
                      </dd>
                    </div>
                  )}
                  {selected.narrator!.note_th && (
                    <div>
                      <dt className="font-pridi text-[10px] text-paper/45">หมายเหตุ</dt>
                      <dd className="font-pridi text-xs text-paper/85 leading-relaxed">
                        {selected.narrator!.note_th}
                      </dd>
                    </div>
                  )}
                  {selected.narrator!.verify && (
                    <p className="font-pridi text-[11px] text-gold/80 pt-1">
                      * รอตรวจสอบกับต้นฉบับ
                    </p>
                  )}
                </dl>
              </>
            ) : (
              <>
                <p className="font-pridi text-base text-gold font-semibold leading-snug pr-5">
                  {selected.book!.name_th}
                  {selected.book!.verify && <span className="text-gold/80"> *</span>}
                </p>
                <p className="font-amiri text-xl text-paper/85 mt-1" dir="rtl">
                  {selected.book!.name_ar}
                </p>
                <div className="h-px bg-gold/25 my-3" />
                {selected.book!.author_died_ah != null && (
                  <p className="font-pridi text-xs text-paper/85">
                    ผู้รวบรวมเสียชีวิต ฮ.ศ. {selected.book!.author_died_ah}
                  </p>
                )}
                {selected.book!.verify && (
                  <p className="font-pridi text-[11px] text-gold/80 pt-2">
                    * รอตรวจสอบกับต้นฉบับ
                  </p>
                )}
              </>
            )}
            <p className="font-pridi text-[10px] text-paper/40 leading-relaxed mt-3 pt-3 border-t border-gold/15">
              เส้นที่สว่างคือทุกเส้นทางที่ผ่านโหนดนี้ — ทั้งต้นน้ำขึ้นไปถึงท่านนบี ﷺ
              และปลายน้ำลงไปถึงตำราที่บันทึก
            </p>
          </aside>
        )}

        {/* แผงโหมดเล่าเรื่อง */}
        {storyStep !== null && (
          <div
            className="absolute z-20 left-1/2 -translate-x-1/2 bottom-3 w-[92%] md:w-[560px] rounded-card border border-gold/50 px-4 py-3"
            style={{ background: "rgba(20,10,8,0.95)", boxShadow: "0 8px 24px rgba(0,0,0,0.6)" }}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-pridi text-xs text-gold font-semibold">
                ขั้นที่ {storyStep + 1}/{bookLayer + 1} · {genLabel(storyStep, bookLayer)}
              </p>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setPlaying(false);
                    setStoryStep((s) => Math.max(0, (s ?? 0) - 1));
                  }}
                  disabled={storyStep === 0}
                  className="font-pridi text-xs w-8 h-8 rounded-btn border border-gold/40 text-gold disabled:opacity-30 hover:bg-gold/10"
                  aria-label="ถอยหลัง"
                >
                  ◀
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setPlaying((p) => {
                      const resumed = !p;
                      // ถ้าเสียงบรรยายอ่านชั้นนี้จบไปแล้วระหว่างหยุดพัก ให้เดินหน้าต่อทันที
                      if (
                        resumed &&
                        ttsOn &&
                        storyStep !== null &&
                        storyStep < bookLayer &&
                        !isSpeaking()
                      ) {
                        setStoryStep((s) => (s ?? 0) + 1);
                      }
                      return resumed;
                    })
                  }
                  className="font-pridi text-xs w-8 h-8 rounded-btn border border-gold bg-gold/15 text-gold hover:bg-gold/25"
                  aria-label={playing ? "หยุดชั่วคราว" : "เล่นอัตโนมัติ"}
                >
                  {playing ? "❚❚" : "▶"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPlaying(false);
                    setStoryStep((s) => Math.min(bookLayer, (s ?? 0) + 1));
                  }}
                  disabled={storyStep >= bookLayer}
                  className="font-pridi text-xs w-8 h-8 rounded-btn border border-gold/40 text-gold disabled:opacity-30 hover:bg-gold/10"
                  aria-label="เดินหน้า"
                >
                  ▶▶
                </button>
              </div>
            </div>
            <p className="font-pridi text-xs md:text-sm text-paper/85 leading-relaxed mt-1.5">
              {storyText(storyStep, bookLayer, stats)}
            </p>
          </div>
        )}
      </div>

      {/* ── caption ที่มา ── */}
      <p className="font-pridi text-[11px] md:text-xs text-paper/45 leading-relaxed px-5 md:px-7 py-4">
        ที่มา: Figure 13.1, M.M. al-Azami,{" "}
        <em>The History of the Qur&apos;anic Text: From Revelation to Compilation</em>, p. 208
        (ต้นฉบับจาก <em>On Schacht&apos;s Origins of Muhammadan Jurisprudence</em>, pp. 158-59) —
        ตัวกลางบางทอดระหว่างผู้รายงานคนสุดท้ายกับเจ้าของตำราถูกละไว้เพื่อความอ่านง่าย
        (ระบุไว้ในหมายเหตุของเส้นแทน) · เลื่อน/ซูม/แตะลากได้ทั้งบนคอมพิวเตอร์และมือถือ
      </p>
    </div>
  );
}
