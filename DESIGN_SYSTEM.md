# Design System — OnlyOneTruth

Single source of truth อยู่ที่ **`tailwind.config.js`** — แก้ที่นี่ที่เดียว เปลี่ยนทั้งระบบ

---

## สี (Colors)

| Token | Class | Hex | ใช้สำหรับ |
|---|---|---|---|
| `gold.DEFAULT` | `text-gold` / `bg-gold` | `#C5A059` | accent หลัก, ปุ่ม, icon |
| `gold.light` | `text-gold-light` / `bg-gold-light` | `#D4AF37` | hover state |
| `gold.dark` | `text-gold-dark` / `bg-gold-dark` | `#B8860B` | label label, badge |
| `ink.DEFAULT` | `text-ink` / `bg-ink` | `#3E2723` | ข้อความหลัก, พื้นหลังเข้ม |
| `ink.soft` | `text-ink-soft` / `bg-ink-soft` | `#654321` | พื้นรอง |
| `ink.muted` | `text-ink-muted` | `#8B7355` | ข้อความรอง |
| `paper.DEFAULT` | `text-paper` / `bg-paper` | `#F5E6D3` | พื้นหลักสว่าง (parchment) |
| `paper.light` | `bg-paper-light` | `#FAF0E6` | พื้นการ์ด (cream) |
| `paper.white` | `text-paper-white` | `#FFFFF0` | ข้อความบนพื้นเข้ม (ivory) |

**แก้สีที่:** `tailwind.config.js` → `theme.extend.colors`

---

## ฟอนต์ (Font Families)

| Token | Class | ใช้สำหรับ |
|---|---|---|
| `--font-srisakdi` | `font-srisakdi` | หัวข้อ (h1–h4), display text |
| `--font-charm` | `font-charm` | เนื้อหา, ปุ่ม, body text |
| `--font-cinzel` | `font-cinzel` | English labels, ตัวเลข, เมนู, brand name |

CSS variables ถูก inject โดย Next.js ใน **`app/layout.js`**

**แก้ฟอนต์ที่:** `tailwind.config.js` → `theme.extend.fontFamily` + `app/layout.js` → font imports

---

## Spacing Tokens

| Token | Class | ขนาด | ใช้สำหรับ |
|---|---|---|---|
| `section` | `py-section` | 5rem / 80px | ระยะห่างระหว่าง section |
| `section-sm` | `py-section-sm` | 3rem / 48px | section เล็ก |
| `gutter` | `px-gutter` | 1.5rem / 24px | padding ขอบจอ |
| `card` | `p-card` | 1.5rem / 24px | padding ในการ์ด |
| `stack` | `gap-stack` | 1.5rem / 24px | ช่องว่างองค์ประกอบ |
| `stack-sm` | `gap-stack-sm` | 0.75rem / 12px | ช่องว่างเล็ก |
| `stack-lg` | `gap-stack-lg` | 3rem / 48px | ช่องว่างใหญ่ |

---

## Border Radius

| Token | Class | ขนาด |
|---|---|---|
| `card` | `rounded-card` | 0.75rem / 12px |
| `btn` | `rounded-btn` | 0.5rem / 8px |

---

## Box Shadow

| Token | Class | ใช้สำหรับ |
|---|---|---|
| `card` | `shadow-card` | การ์ดปกติ |
| `card-hover` | `shadow-card-hover` | การ์ด on hover |
| `glow` | `shadow-glow` | glow effect (gold) |
| `glow-sm` | `shadow-glow-sm` | glow เล็ก |

---

## Component Classes (globals.css)

```css
.btn-primary   /* ปุ่มหลัก — bg-gold, text-ink */
.btn-outline   /* ปุ่มโปร่งใส — border-gold, text-gold */
.card-glass    /* การ์ด glass effect — bg-ink/5, backdrop-blur */
```

**แก้ component classes ที่:** `app/globals.css` → `@layer components`

---

## วิธีแก้ค่าหลัก

- **เปลี่ยนสี accent:** แก้ `gold.DEFAULT` ใน `tailwind.config.js`
- **เปลี่ยนพื้นหลัง:** แก้ `paper.DEFAULT` ใน `tailwind.config.js`
- **เปลี่ยนฟอนต์หัวข้อ:** แก้ `fontFamily.srisakdi` ใน `tailwind.config.js` + เปลี่ยน import ใน `app/layout.js`
- **เปลี่ยนสไตล์ปุ่ม:** แก้ `.btn-primary` ใน `app/globals.css`
