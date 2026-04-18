
# AI Laptopwala — Linktree Style Website

A single-page, mobile-first link hub for **AI Laptopwala (Asati Infotech)** with the brand logo, key benefits, social/contact links, both branch addresses, and the embedded Google Form — all in one scrollable page.

## Design direction
- **Brand colors** pulled from the logo: warm orange → yellow gradient (`#F97316 → #FBBF24`) on a clean white/very-light background, dark slate text.
- **Card-stack layout** like Linktree: centered column, max ~480px wide, generous spacing, rounded-2xl buttons with soft shadow + hover lift.
- Subtle gradient blob behind the header for warmth, otherwise minimal.

## Page sections (top → bottom)
1. **Header**
   - Circular logo (uploaded `logo.jpeg`)
   - Title: **AI Laptopwala** · subtitle *Asati Infotech — Indore's Trusted Laptop Store*
   - One-line tagline about study / office / gaming laptops & repairs.

2. **Why Choose Us** (compact badge row / chips)
   - 1 Year Service Warranty · 100% Tested & Certified · 5 Free Gifts · Easy Exchange

3. **Primary link buttons** (full-width, icon + label, gradient accent on hover)
   - 📋 Fill Enquiry Form → scrolls to embedded form section
   - 📸 Instagram — @AiLaptopWala
   - 🎥 YouTube — AI Laptopwala Official
   - 🔵 Facebook — AI Laptopwala Indore
   - 📞 Call Us (placeholder `tel:` — will use a generic number unless you give one)
   - 💬 WhatsApp (same — placeholder unless provided)

4. **Our Branches** (two address cards with map-pin icon + "Get Directions" link to Google Maps)
   - Branch 1: Silver Mall, RNT Marg, South Tukoganj
   - Branch 2: Sai Residency, Ashish Nagar, Near Bangali Chouraha

5. **Enquiry Form** (anchor `#enquiry`)
   - Embedded Google Form via iframe (responsive wrapper, full width, ~1460px tall, no border)

6. **Footer**
   - © AI Laptopwala · Asati Infotech · small social icon row

## Tech notes
- Single page at `/` (`src/pages/Index.tsx`), new components: `LinkCard`, `BranchCard`, `BenefitChip`.
- Logo copied to `src/assets/logo.jpeg` and imported.
- Brand tokens added to `index.css` + `tailwind.config.ts` (`--brand-orange`, `--brand-yellow`, gradient utility).
- Fully responsive, accessible (semantic landmarks, alt text, focus rings).
- No backend needed.

## One thing to confirm after build
Phone & WhatsApp numbers aren't in your message — I'll use placeholders you can swap, unless you reply with the numbers now.
