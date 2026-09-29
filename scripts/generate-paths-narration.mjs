// ════════════════════════════════════════════════════════════════════
//  สร้างเสียงพากษ์ไทยของหน้า /paths-of-faith ผ่าน ElevenLabs
//  → public/audio/paths-of-faith/{journeyId}/{routeId}-{stopIdx}.mp3
//
//  ตั้งค่าใน .env.local:
//    ELEVENLABS_API_KEY=...
//    ELEVENLABS_VOICE_ID=...          (เสียงผู้บรรยายที่เลือก)
//    ELEVENLABS_MODEL=eleven_v4       (ไม่บังคับ — รุ่นที่รองรับภาษาไทย)
//
//  วิธีใช้:  node scripts/generate-paths-narration.mjs            (เฉพาะไฟล์ที่ยังไม่มี)
//            node scripts/generate-paths-narration.mjs --force    (สร้างใหม่ทั้งหมด)
//            node scripts/generate-paths-narration.mjs --only=prophet,jesus
//            node scripts/generate-paths-narration.mjs --dry      (พิมพ์คำอ่านโดยไม่เรียก API)
// ════════════════════════════════════════════════════════════════════

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { JOURNEYS } from "../lib/paths-of-faith/data.js";
import { NARRATION, toSpeech } from "../lib/paths-of-faith/narration.js";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

// อ่าน .env.local แบบง่าย (ไม่เพิ่ม dependency)
const envFile = path.join(root, ".env.local");
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const args = process.argv.slice(2);
const force = args.includes("--force");
const dry = args.includes("--dry");
const only = args.find((a) => a.startsWith("--only="))?.slice(7).split(",");

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID;
const MODEL = process.env.ELEVENLABS_MODEL || "eleven_v4";

if (!dry && (!API_KEY || !VOICE_ID)) {
  console.error("ต้องตั้ง ELEVENLABS_API_KEY และ ELEVENLABS_VOICE_ID ใน .env.local ก่อน");
  process.exit(1);
}

/** @type {{file: string, text: string}[]} */
const jobs = [];
for (const j of JOURNEYS) {
  for (const r of j.routes) {
    if (only && !only.includes(r.id)) continue;
    const lines = NARRATION[r.id] || [];
    r.stops.forEach((_, i) => {
      if (!lines[i]) return;
      jobs.push({
        file: path.join(root, "public", "audio", "paths-of-faith", j.id, `${r.id}-${i}.mp3`),
        text: toSpeech(lines[i]),
      });
    });
  }
}

async function synth(text, dest) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "xi-api-key": API_KEY, "Content-Type": "application/json", Accept: "audio/mpeg" },
    body: JSON.stringify({
      text,
      model_id: MODEL,
      // น้ำเสียงเล่าประวัติศาสตร์: นิ่ง ลึก สม่ำเสมอ
      voice_settings: { stability: 0.6, similarity_boost: 0.8, style: 0.25, use_speaker_boost: true },
    }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (!buf.length) throw new Error("ไม่ได้รับข้อมูลเสียง");
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
}

let made = 0, skipped = 0, failed = 0;
for (const job of jobs) {
  const rel = path.relative(root, job.file);
  if (dry) { console.log(`${rel}\n  ${job.text}\n`); continue; }
  if (!force && fs.existsSync(job.file)) { skipped++; continue; }
  try {
    await synth(job.text, job.file);
    made++;
    console.log(`✓ ${rel}`);
  } catch (e) {
    failed++;
    console.error(`✗ ${rel} — ${e.message}`);
  }
}
if (!dry) console.log(`\nสร้าง ${made} · ข้าม ${skipped} · ล้มเหลว ${failed} (ทั้งหมด ${jobs.length})`);
process.exit(failed ? 1 : 0);
