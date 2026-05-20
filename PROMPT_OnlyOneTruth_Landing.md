Act as an expert frontend developer and UI/UX designer. 

Create a highly professional, beautiful, and fully responsive website landing page for an ancient manuscript and historical textual history website called "OnlyOneTruth".

=== HERO IMAGE ===
The main hero background image is: header.png
Located in the public/ folder
Shows: old library archive with stacks of ancient scrolls revealing Arabic text

=== TECHNICAL REQUIREMENTS ===
- Framework: Next.js 14+ with App Router
- Styling: Tailwind CSS (NO plain CSS files)
- TypeScript: NO (use JavaScript only)
- Fonts: Google Fonts via next/font
- File structure: App Router (app/ directory)

=== DESIGN SYSTEM & THEME ===

**Aesthetics:**
- Academic, timeless, prestigious, scholarly
- Historical preservation feeling
- Warm, inviting, sophisticated

**Color Palette:**
```css
--deep-charcoal: #2B2520
--dark-sepia: #3E2723
--parchment: #F5E6D3
--ivory: #FFFFF0
--antique-gold: #C5A059
--warm-gold: #D4AF37
--bronze: #B8860B
--leather-brown: #654321
```

**Typography:**
- Headings: 'Playfair Display' (Google Fonts) - serif, elegant, historical
- Subheadings: 'Cinzel' - decorative serif for special headings
- Body: 'Lato' or 'Open Sans' - clean sans-serif for readability
- Arabic text: 'Amiri' - traditional Arabic font

**Spacing System:**
- Mobile: 16px base, sections 40px apart
- Desktop: 24px base, sections 80px apart

=== PAGE STRUCTURE ===

1. **Navigation Bar:**
   - Position: sticky top-0 z-50
   - Background: backdrop-blur-md bg-dark-sepia/90 (glassmorphism)
   - Height: 80px desktop, 64px mobile
   - Logo: "OnlyOneTruth" (Cinzel font, antique-gold color)
   - Links: Home, Archive, Textual History, About, Contact
   - CTA Button: "Explore Archive" (antique-gold background)
   - Mobile: Hamburger menu (animated)
   - Border bottom: 1px solid antique-gold/20

2. **Hero Section (CRUCIAL - Follow Exactly):**
```jsx
   <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
     {/* Background Image */}
     <div className="absolute inset-0 z-0">
       <Image 
         src="/header.png"
         alt="Ancient Library"
         fill
         className="object-cover object-center"
         priority
       />
       {/* Dark Overlay for Text Readability */}
       <div className="absolute inset-0 bg-gradient-to-b from-dark-sepia/70 via-dark-sepia/50 to-dark-sepia/80" />
     </div>
     
     {/* Hero Content */}
     <div className="relative z-10 text-center px-4 max-w-4xl">
       <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-ivory mb-6 leading-tight">
         Preserving the Integrity of Ancient Texts
       </h1>
       <p className="font-lato text-xl md:text-2xl text-parchment/90 mb-8 max-w-2xl mx-auto">
         Exploring the sacred manuscripts that shaped civilizations
       </p>
       <button className="bg-antique-gold hover:bg-warm-gold text-dark-sepia font-semibold px-10 py-4 rounded-md text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
         Begin Your Journey
       </button>
     </div>
   </section>
```

   **Responsive Behavior:**
   - Desktop (1024px+): h-[80vh], text-7xl, full overlay
   - Tablet (768px): h-[70vh], text-5xl, adjusted padding
   - Mobile (< 768px): h-[60vh] min-h-[500px], text-4xl, compact spacing
   - Ensure Arabic scroll remains visible in center on all devices

3. **Features/Chapters Section:**
```jsx
   <section className="py-20 bg-parchment">
     <div className="max-w-7xl mx-auto px-4">
       <h2 className="font-cinzel text-4xl md:text-5xl text-center text-dark-sepia mb-16">
         Our Collections
       </h2>
       
       {/* 3-Column Grid */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[1,2,3].map(i => (
           <div key={i} className="bg-ivory border-2 border-antique-gold/30 rounded-lg p-8 hover:shadow-2xl hover:border-antique-gold transition-all duration-300 hover:-translate-y-2">
             <div className="text-5xl mb-4 text-antique-gold">📜</div>
             <h3 className="font-playfair text-2xl text-dark-sepia mb-4">
               Collection {i}
             </h3>
             <p className="font-lato text-gray-700 leading-relaxed">
               Explore curated manuscripts from ancient civilizations
             </p>
           </div>
         ))}
       </div>
     </div>
   </section>
```

4. **Scholarly Introduction Section:**
```jsx
   <section className="py-20 bg-deep-charcoal text-ivory">
     <div className="max-w-4xl mx-auto px-4 text-center">
       <h2 className="font-cinzel text-4xl mb-8">
         A Testament to History
       </h2>
       <p className="font-lato text-lg leading-loose text-parchment/80">
         For centuries, ancient manuscripts have carried the wisdom, 
         beliefs, and stories of humanity across generations...
       </p>
     </div>
   </section>
```

5. **Footer:**
```jsx
   <footer className="bg-dark-sepia text-parchment py-12">
     <div className="max-w-7xl mx-auto px-4">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
         {/* Column 1: About */}
         {/* Column 2: Links */}
         {/* Column 3: Social */}
       </div>
       <div className="border-t border-antique-gold/20 pt-8 text-center">
         <p className="text-sm">© 2024 OnlyOneTruth. For scholarly purposes.</p>
       </div>
     </div>
   </footer>
```

=== ANIMATIONS & INTERACTIONS ===
- Smooth scroll behavior
- Fade-in on scroll (use intersection observer)
- Hover effects: scale, shadow, border-glow
- Page transitions: subtle fade
- Loading states: elegant skeleton screens

=== RESPONSIVE BREAKPOINTS ===
```css
Mobile: < 640px
Tablet: 640px - 1023px
Desktop: 1024px - 1919px
Ultra-wide: 1920px+
```

=== CODE QUALITY STANDARDS ===
- Semantic HTML5 elements
- Accessibility: ARIA labels, alt texts, keyboard navigation
- Performance: Image optimization, lazy loading
- Clean component structure
- Consistent naming conventions
- Comments for complex sections

=== DELIVERABLES ===
Generate complete, production-ready code:
1. app/layout.js (with fonts)
2. app/page.js (complete landing page)
3. components/Navbar.jsx
4. components/Footer.jsx
5. app/globals.css (Tailwind directives + custom utilities)
6. tailwind.config.js (with custom colors)

Make it absolutely stunning, pixel-perfect, and breathtakingly beautiful on ALL devices.
