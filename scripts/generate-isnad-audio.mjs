// ════════════════════════════════════════════════════════════════════
//  สร้างไฟล์เสียงบรรยายภาษาไทยล่วงหน้า → public/audio/isnad/*.mp3
//  ใช้เสียง Microsoft Neural (th-TH-PremwadeeNeural) ผ่าน msedge-tts
//
//  วิธีใช้:  npm run gen-tts          (สร้างเฉพาะไฟล์ที่ยังไม่มี)
//            npm run gen-tts -- --force  (สร้างใหม่ทั้งหมด — ใช้หลังแก้ data)
// ════════════════════════════════════════════════════════════════════

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import narration from "../lib/isnad-narration.js";

const {
  maxGenerationOf,
  statsLite,
  storyText,
  personNarration,
  bookNarration,
  forSpeech,
  storyAudioFile,
  nodeAudioFile,
} = narration;

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const data = JSON.parse(
  fs.readFileSync(path.join(root, "data", "isnad-prayer.json"), "utf8")
);
const outDir = path.join(root, "public", "audio", "isnad");
const force = process.argv.includes("--force");

fs.mkdirSync(outDir, { recursive: true });

const bookLayer = maxGenerationOf(data) + 1;
const stats = statsLite(data);

/** @type {{file: string, text: string}[]} */
const jobs = [];

// เสียงโหมดเล่าเรื่อง ทีละชั้น
for (let layer = 0; layer <= bookLayer; layer++) {
  jobs.push({
    file: storyAudioFile(layer),
    text: storyText(layer, bookLayer, stats),
  });
}
// เสียงข้อมูลโหนดบุคคล/ตำรา
for (const n of data.narrators) {
  jobs.push({ file: nodeAudioFile(n.id), text: personNarration(n, bookLayer) });
}
for (const b of data.books) {
  jobs.push({ file: nodeAudioFile(b.id), text: bookNarration(b) });
}

const VOICE = "th-TH-PremwadeeNeural";

// เขียน stream ลงไฟล์เอง (path `toFile` ของไลบรารีมีบั๊ก unlink ซ้ำจน process ล้ม)
async function synthOnce(text, dest) {
  const tts = new MsEdgeTTS();
  await tts.setMetadata(VOICE, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  try {
    const { audioStream } = tts.toStream(forSpeech(text));
    await new Promise((resolve, reject) => {
      const out = fs.createWriteStream(dest);
      audioStream.pipe(out);
      audioStream.once("error", (e) => {
        out.destroy();
        reject(e);
      });
      out.once("error", reject);
      out.once("close", () => {
        if (out.bytesWritten > 0) resolve(undefined);
        else reject(new Error("ไม่ได้รับข้อมูลเสียง"));
      });
    });
  } finally {
    tts.close();
  }
}

async function synthToFile(text, dest) {
  let lastErr;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await synthOnce(text, dest);
      return;
    } catch (e) {
      lastErr = e;
      fs.rmSync(dest, { force: true });
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
  throw lastErr;
}

let made = 0;
let skipped = 0;
let failed = 0;
for (const job of jobs) {
  const dest = path.join(outDir, job.file);
  if (!force && fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    skipped++;
    continue;
  }
  try {
    await synthToFile(job.text, dest);
    made++;
    process.stdout.write(`✓ ${job.file}\n`);
  } catch (e) {
    failed++;
    process.stdout.write(`✗ ${job.file} — ${e.message}\n`);
  }
}

console.log(
  `\nเสร็จสิ้น: สร้างใหม่ ${made}, มีอยู่แล้ว ${skipped}, ล้มเหลว ${failed} (ทั้งหมด ${jobs.length})`
);
if (failed > 0) process.exit(1);
