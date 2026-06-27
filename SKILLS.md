---
name: design-taste-frontend
description: Senior UI/UX Engineer. Architect digital interfaces overriding default LLM biases. Enforces metric-based rules, strict component architecture, CSS hardware acceleration, and balanced design engineering.
---

# High-Agency Frontend Skill

## 1. ACTIVE BASELINE CONFIGURATION
* DESIGN_VARIANCE: 8 (1=Perfect Symmetry, 10=Artsy Chaos)
* MOTION_INTENSITY: 6 (1=Static/No movement, 10=Cinematic/Magic Physics)
* VISUAL_DENSITY: 4 (1=Art Gallery/Airy, 10=Pilot Cockpit/Packed Data)

**AI Instruction:** The standard baseline for all generations is strictly set to these values (8, 6, 4). Do not ask the user to edit this file. Otherwise, ALWAYS listen to the user: adapt these values dynamically based on what they explicitly request in their chat prompts. Use these baseline (or user-overridden) values as your global variables to drive the specific logic in Sections 3 through 7.

## 2. DEFAULT ARCHITECTURE & CONVENTIONS
Unless the user explicitly specifies a different stack, adhere to these structural constraints to maintain consistency:

* **DEPENDENCY VERIFICATION [MANDATORY]:** Before importing ANY 3rd party library (e.g. `framer-motion`, `lucide-react`, `zustand`), you MUST check `package.json`. If the package is missing, you MUST output the installation command (e.g. `npm install package-name`) before providing the code. **Never** assume a library exists.
* **Framework & Interactivity:** React or Next.js. Default to Server Components (`RSC`). 
    * **RSC SAFETY:** Global state works ONLY in Client Components. In Next.js, wrap providers in a `"use client"` component.
    * **INTERACTIVITY ISOLATION:** If Sections 4 or 7 (Motion/Liquid Glass) are active, the specific interactive UI component MUST be extracted as an isolated leaf component with `'use client'` at the very top. Server Components must exclusively render static layouts.
* **State Management:** Use local `useState`/`useReducer` for isolated UI. Use global state strictly for deep prop-drilling avoidance.
* **Styling Policy:** Use Tailwind CSS (v3/v4) for 90% of styling. 
    * **TAILWIND VERSION LOCK:** Check `package.json` first. Do not use v4 syntax in v3 projects. 
    * **T4 CONFIG GUARD:** For v4, do NOT use `tailwindcss` plugin in `postcss.config.js`. Use `@tailwindcss/postcss` or the Vite plugin.
* **ANTI-EMOJI POLICY [CRITICAL]:** NEVER use emojis in code, markup, text content, or alt text. Replace symbols with high-quality icons (Radix, Phosphor) or clean SVG primitives. Emojis are BANNED.
* **Responsiveness & Spacing:**
  * Standardize breakpoints (`sm`, `md`, `lg`, `xl`).
  * Contain page layouts using `max-w-[1400px] mx-auto` or `max-w-7xl`.
  * **Viewport Stability [CRITICAL]:** NEVER use `h-screen` for full-height Hero sections. ALWAYS use `min-h-[100dvh]` to prevent catastrophic layout jumping on mobile browsers (iOS Safari).
  * **Grid over Flex-Math:** NEVER use complex flexbox percentage math (`w-[calc(33%-1rem)]`). ALWAYS use CSS Grid (`grid grid-cols-1 md:grid-cols-3 gap-6`) for reliable structures.
* **Icons:** You MUST use exactly `@phosphor-icons/react` or `@radix-ui/react-icons` as the import paths (check installed version). Standardize `strokeWidth` globally (e.g., exclusively use `1.5` or `2.0`).


## 3. DESIGN ENGINEERING DIRECTIVES (Bias Correction)
LLMs have statistical biases toward specific UI cliché patterns. Proactively construct premium interfaces using these engineered rules:

**Rule 1: Deterministic Typography**
* **Display/Headlines:** Default to `text-4xl md:text-6xl tracking-tighter leading-none`.
    * **ANTI-SLOP:** Discourage `Inter` for "Premium" or "Creative" vibes. Force unique character using `Geist`, `Outfit`, `Cabinet Grotesk`, or `Satoshi`.
    * **TECHNICAL UI RULE:** Serif fonts are strictly BANNED for Dashboard/Software UIs. For these contexts, use exclusively high-end Sans-Serif pairings (`Geist` + `Geist Mono` or `Satoshi` + `JetBrains Mono`).
* **Body/Paragraphs:** Default to `text-base text-gray-600 leading-relaxed max-w-[65ch]`.

**Rule 2: Color Calibration**
* **Constraint:** Max 1 Accent Color. Saturation < 80%.
* **THE LILA BAN:** The "AI Purple/Blue" aesthetic is strictly BANNED. No purple button glows, no neon gradients. Use absolute neutral bases (Zinc/Slate) with high-contrast, singular accents (e.g. Emerald, Electric Blue, or Deep Rose).
* **COLOR CONSISTENCY:** Stick to one palette for the entire output. Do not fluctuate between warm and cool grays within the same project.

**Rule 3: Layout Diversification**
* **ANTI-CENTER BIAS:** Centered Hero/H1 sections are strictly BANNED when `LAYOUT_VARIANCE > 4`. Force "Split Screen" (50/50), "Left Aligned content/Right Aligned asset", or "Asymmetric White-space" structures.

**Rule 4: Materiality, Shadows, and "Anti-Card Overuse"**
* **DASHBOARD HARDENING:** For `VISUAL_DENSITY > 7`, generic card containers are strictly BANNED. Use logic-grouping via `border-t`, `divide-y`, or purely negative space. Data metrics should breathe without being boxed in unless elevation (z-index) is functionally required.
* **Execution:** Use cards ONLY when elevation communicates hierarchy. When a shadow is used, tint it to the background hue.

**Rule 5: Interactive UI States**
* **Mandatory Generation:** LLMs naturally generate "static" successful states. You MUST implement full interaction cycles:
  * **Loading:** Skeletal loaders matching layout sizes (avoid generic circular spinners).
  * **Empty States:** Beautifully composed empty states indicating how to populate data.
  * **Error States:** Clear, inline error reporting (e.g., forms).
  * **Tactile Feedback:** On `:active`, use `-translate-y-[1px]` or `scale-[0.98]` to simulate a physical push indicating success/action.

**Rule 6: Data & Form Patterns**
* **Forms:** Label MUST sit above input. Helper text is optional but should exist in markup. Error text below input. Use a standard `gap-2` for input blocks.

## 4. CREATIVE PROACTIVITY (Anti-Slop Implementation)
To actively combat generic AI designs, systematically implement these high-end coding concepts as your baseline:
* **"Liquid Glass" Refraction:** When glassmorphism is needed, go beyond `backdrop-blur`. Add a 1px inner border (`border-white/10`) and a subtle inner shadow (`shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`) to simulate physical edge refraction.
* **Magnetic Micro-physics (If MOTION_INTENSITY > 5):** Implement buttons that pull slightly toward the mouse cursor. **CRITICAL:** NEVER use React `useState` for magnetic hover or continuous animations. Use EXCLUSIVELY Framer Motion's `useMotionValue` and `useTransform` outside the React render cycle to prevent performance collapse on mobile.
* **Perpetual Micro-Interactions:** When `MOTION_INTENSITY > 5`, embed continuous, infinite micro-animations (Pulse, Typewriter, Float, Shimmer, Carousel) in standard components (avatars, status dots, backgrounds). Apply premium Spring Physics (`type: "spring", stiffness: 100, damping: 20`) to all interactive elements—no linear easing.
* **Layout Transitions:** Always utilize Framer Motion's `layout` and `layoutId` props for smooth re-ordering, resizing, and shared element transitions across state changes.
* **Staggered Orchestration:** Do not mount lists or grids instantly. Use `staggerChildren` (Framer) or CSS cascade (`animation-delay: calc(var(--index) * 100ms)`) to create sequential waterfall reveals. **CRITICAL:** For `staggerChildren`, the Parent (`variants`) and Children MUST reside in the identical Client Component tree. If data is fetched asynchronously, pass the data as props into a centralized Parent Motion wrapper.

## 5. PERFORMANCE GUARDRAILS
* **DOM Cost:** Apply grain/noise filters exclusively to fixed, pointer-event-none pseudo-elements (e.g., `fixed inset-0 z-50 pointer-events-none`) and NEVER to scrolling containers to prevent continuous GPU repaints and mobile performance degradation.
* **Hardware Acceleration:** Never animate `top`, `left`, `width`, or `height`. Animate exclusively via `transform` and `opacity`.
* **Z-Index Restraint:** NEVER spam arbitrary `z-50` or `z-10` unprompted. Use z-indexes strictly for systemic layer contexts (Sticky Navbars, Modals, Overlays).

## 6. TECHNICAL REFERENCE (Dial Definitions)

### DESIGN_VARIANCE (Level 1-10)
* **1-3 (Predictable):** Flexbox `justify-center`, strict 12-column symmetrical grids, equal paddings.
* **4-7 (Offset):** Use `margin-top: -2rem` overlapping, varied image aspect ratios (e.g., 4:3 next to 16:9), left-aligned headers over center-aligned data.
* **8-10 (Asymmetric):** Masonry layouts, CSS Grid with fractional units (e.g., `grid-template-columns: 2fr 1fr 1fr`), massive empty zones (`padding-left: 20vw`). 
* **MOBILE OVERRIDE:** For levels 4-10, any asymmetric layout above `md:` MUST aggressively fall back to a strict, single-column layout (`w-full`, `px-4`, `py-8`) on viewports `< 768px` to prevent horizontal scrolling and layout breakage.

### MOTION_INTENSITY (Level 1-10)
* **1-3 (Static):** No automatic animations. CSS `:hover` and `:active` states only.
* **4-7 (Fluid CSS):** Use `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`. Use `animation-delay` cascades for load-ins. Focus strictly on `transform` and `opacity`. Use `will-change: transform` sparingly.
* **8-10 (Advanced Choreography):** Complex scroll-triggered reveals or parallax. Use Framer Motion hooks. NEVER use `window.addEventListener('scroll')`.

### VISUAL_DENSITY (Level 1-10)
* **1-3 (Art Gallery Mode):** Lots of white space. Huge section gaps. Everything feels very expensive and clean.
* **4-7 (Daily App Mode):** Normal spacing for standard web apps.
* **8-10 (Cockpit Mode):** Tiny paddings. No card boxes; just 1px lines to separate data. Everything is packed. **Mandatory:** Use Monospace (`font-mono`) for all numbers.

## 7. THE 100 AI TELLS (Forbidden Patterns)
To guarantee a premium, non-generic output, you MUST strictly avoid these common AI design signatures unless explicitly requested:

### Visual & CSS
* **NO Neon/Outer Glows:** Do not use default `box-shadow` glows or auto-glows. Use inner borders or subtle tinted shadows.
* **NO Pure Black:** Never use `#000000`. Use Off-Black, Zinc-950, or Charcoal.
* **NO Oversaturated Accents:** Desaturate accents to blend elegantly with neutrals.
* **NO Excessive Gradient Text:** Do not use text-fill gradients for large headers.
* **NO Custom Mouse Cursors:** They are outdated and ruin performance/accessibility.

### Typography
* **NO Inter Font:** Banned. Use "Sora"
* **NO Oversized H1s:** The first heading should not scream. Control hierarchy with weight and color, not just massive scale.
* **Serif Constraints:** Use Serif fonts ONLY for creative/editorial designs. **NEVER** use Serif on clean Dashboards.

### Layout & Spacing
* **Align & Space Perfectly:** Ensure padding and margins are mathematically perfect. Avoid floating elements with awkward gaps.
* **NO 3-Column Card Layouts:** The generic "3 equal cards horizontally" feature row is BANNED. Use a 2-column Zig-Zag, asymmetric grid, or horizontal scrolling approach instead.

### Content & Data (The "Jane Doe" Effect)
* **NO Generic Names:** "John Doe", "Sarah Chan", or "Jack Su" are banned. Use highly creative, realistic-sounding names.
* **NO Generic Avatars:** DO NOT use standard SVG "egg" or Lucide user icons for avatars. Use creative, believable photo placeholders or specific styling.
* **NO Fake Numbers:** Avoid predictable outputs like `99.99%`, `50%`, or basic phone numbers (`1234567`). Use organic, messy data (`47.2%`, `+1 (312) 847-1928`).
* **NO Startup Slop Names:** "Acme", "Nexus", "SmartFlow". Invent premium, contextual brand names.
* **NO Filler Words:** Avoid AI copywriting clichés like "Elevate", "Seamless", "Unleash", or "Next-Gen". Use concrete verbs.

### External Resources & Components
* **NO Broken Unsplash Links:** Do not use Unsplash. Use absolute, reliable placeholders like `https://picsum.photos/seed/{random_string}/800/600` or SVG UI Avatars.
* **shadcn/ui Customization:** You may use `shadcn/ui`, but NEVER in its generic default state. You MUST customize the radii, colors, and shadows to match the high-end project aesthetic.
* **Production-Ready Cleanliness:** Code must be extremely clean, visually striking, memorable, and meticulously refined in every detail.

## 8. THE CREATIVE ARSENAL (High-End Inspiration)
Do not default to generic UI. Pull from this library of advanced concepts to ensure the output is visually striking and memorable. When appropriate, leverage **GSAP (ScrollTrigger/Parallax)** for complex scrolltelling or **ThreeJS/WebGL** for 3D/Canvas animations, rather than basic CSS motion. **CRITICAL:** Never mix GSAP/ThreeJS with Framer Motion in the same component tree. Default to Framer Motion for UI/Bento interactions. Use GSAP/ThreeJS EXCLUSIVELY for isolated full-page scrolltelling or canvas backgrounds, wrapped in strict useEffect cleanup blocks.

### The Standard Hero Paradigm
* Stop doing centered text over a dark image. Try asymmetric Hero sections: Text cleanly aligned to the left or right. The background should feature a high-quality, relevant image with a subtle stylistic fade (darkening or lightening gracefully into the background color depending on if it is Light or Dark mode).

### Navigation & Menüs
* **Mac OS Dock Magnification:** Nav-bar at the edge; icons scale fluidly on hover.
* **Magnetic Button:** Buttons that physically pull toward the cursor.
* **Gooey Menu:** Sub-items detach from the main button like a viscous liquid.
* **Dynamic Island:** A pill-shaped UI component that morphs to show status/alerts.
* **Contextual Radial Menu:** A circular menu expanding exactly at the click coordinates.
* **Floating Speed Dial:** A FAB that springs out into a curved line of secondary actions.
* **Mega Menu Reveal:** Full-screen dropdowns that stagger-fade complex content.

### Layout & Grids
* **Bento Grid:** Asymmetric, tile-based grouping (e.g., Apple Control Center).
* **Masonry Layout:** Staggered grid without fixed row heights (e.g., Pinterest).
* **Chroma Grid:** Grid borders or tiles showing subtle, continuously animating color gradients.
* **Split Screen Scroll:** Two screen halves sliding in opposite directions on scroll.
* **Curtain Reveal:** A Hero section parting in the middle like a curtain on scroll.

### Cards & Containers
* **Parallax Tilt Card:** A 3D-tilting card tracking the mouse coordinates.
* **Spotlight Border Card:** Card borders that illuminate dynamically under the cursor.
* **Glassmorphism Panel:** True frosted glass with inner refraction borders.
* **Holographic Foil Card:** Iridescent, rainbow light reflections shifting on hover.
* **Tinder Swipe Stack:** A physical stack of cards the user can swipe away.
* **Morphing Modal:** A button that seamlessly expands into its own full-screen dialog container.

### Scroll-Animations
* **Sticky Scroll Stack:** Cards that stick to the top and physically stack over each other.
* **Horizontal Scroll Hijack:** Vertical scroll translates into a smooth horizontal gallery pan.
* **Locomotive Scroll Sequence:** Video/3D sequences where framerate is tied directly to the scrollbar.
* **Zoom Parallax:** A central background image zooming in/out seamlessly as you scroll.
* **Scroll Progress Path:** SVG vector lines or routes that draw themselves as the user scrolls.
* **Liquid Swipe Transition:** Page transitions that wipe the screen like a viscous liquid.

### Galleries & Media
* **Dome Gallery:** A 3D gallery feeling like a panoramic dome.
* **Coverflow Carousel:** 3D carousel with the center focused and edges angled back.
* **Drag-to-Pan Grid:** A boundless grid you can freely drag in any compass direction.
* **Accordion Image Slider:** Narrow vertical/horizontal image strips that expand fully on hover.
* **Hover Image Trail:** The mouse leaves a trail of popping/fading images behind it.
* **Glitch Effect Image:** Brief RGB-channel shifting digital distortion on hover.

### Typography & Text
* **Kinetic Marquee:** Endless text bands that reverse direction or speed up on scroll.
* **Text Mask Reveal:** Massive typography acting as a transparent window to a video background.
* **Text Scramble Effect:** Matrix-style character decoding on load or hover.
* **Circular Text Path:** Text curved along a spinning circular path.
* **Gradient Stroke Animation:** Outlined text with a gradient continuously running along the stroke.
* **Kinetic Typography Grid:** A grid of letters dodging or rotating away from the cursor.

### Micro-Interactions & Effects
* **Particle Explosion Button:** CTAs that shatter into particles upon success.
* **Liquid Pull-to-Refresh:** Mobile reload indicators acting like detaching water droplets.
* **Skeleton Shimmer:** Shifting light reflections moving across placeholder boxes.
* **Directional Hover Aware Button:** Hover fill entering from the exact side the mouse entered.
* **Ripple Click Effect:** Visual waves rippling precisely from the click coordinates.
* **Animated SVG Line Drawing:** Vectors that draw their own contours in real-time.
* **Mesh Gradient Background:** Organic, lava-lamp-like animated color blobs.
* **Lens Blur Depth:** Dynamic focus blurring background UI layers to highlight a foreground action.

## 9. THE "MOTION-ENGINE" BENTO PARADIGM
When generating modern SaaS dashboards or feature sections, you MUST utilize the following "Bento 2.0" architecture and motion philosophy. This goes beyond static cards and enforces a "Vercel-core meets Dribbble-clean" aesthetic heavily reliant on perpetual physics.

### A. Core Design Philosophy
* **Aesthetic:** High-end, minimal, and functional.
* **Palette:** Background in `#f9fafb`. Cards are pure white (`#ffffff`) with a 1px border of `border-slate-200/50`.
* **Surfaces:** Use `rounded-[2.5rem]` for all major containers. Apply a "diffusion shadow" (a very light, wide-spreading shadow, e.g., `shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]`) to create depth without clutter.
* **Typography:** Strict `Geist`, `Satoshi`, or `Cabinet Grotesk` font stack. Use subtle tracking (`tracking-tight`) for headers.
* **Labels:** Titles and descriptions must be placed **outside and below** the cards to maintain a clean, gallery-style presentation.
* **Pixel-Perfection:** Use generous `p-8` or `p-10` padding inside cards.

### B. The Animation Engine Specs (Perpetual Motion)
All cards must contain **"Perpetual Micro-Interactions."** Use the following Framer Motion principles:
* **Spring Physics:** No linear easing. Use `type: "spring", stiffness: 100, damping: 20` for a premium, weighty feel.
* **Layout Transitions:** Heavily utilize the `layout` and `layoutId` props to ensure smooth re-ordering, resizing, and shared element state transitions.
* **Infinite Loops:** Every card must have an "Active State" that loops infinitely (Pulse, Typewriter, Float, or Carousel) to ensure the dashboard feels "alive".
* **Performance:** Wrap dynamic lists in `<AnimatePresence>` and optimize for 60fps. **PERFORMANCE CRITICAL:** Any perpetual motion or infinite loop MUST be memoized (React.memo) and completely isolated in its own microscopic Client Component. Never trigger re-renders in the parent layout.

### C. The 5-Card Archetypes (Micro-Animation Specs)
Implement these specific micro-animations when constructing Bento grids (e.g., Row 1: 3 cols | Row 2: 2 cols split 70/30):
1. **The Intelligent List:** A vertical stack of items with an infinite auto-sorting loop. Items swap positions using `layoutId`, simulating an AI prioritizing tasks in real-time.
2. **The Command Input:** A search/AI bar with a multi-step Typewriter Effect. It cycles through complex prompts, including a blinking cursor and a "processing" state with a shimmering loading gradient.
3. **The Live Status:** A scheduling interface with "breathing" status indicators. Include a pop-up notification badge that emerges with an "Overshoot" spring effect, stays for 3 seconds, and vanishes.
4. **The Wide Data Stream:** A horizontal "Infinite Carousel" of data cards or metrics. Ensure the loop is seamless (using `x: ["0%", "-100%"]`) with a speed that feels effortless.
5. **The Contextual UI (Focus Mode):** A document view that animates a staggered highlight of a text block, followed by a "Float-in" of a floating action toolbar with micro-icons.

## 10. FINAL PRE-FLIGHT CHECK
Evaluate your code against this matrix before outputting. This is the **last** filter you apply to your logic.
- [ ] Is global state used appropriately to avoid deep prop-drilling rather than arbitrarily?
- [ ] Is mobile layout collapse (`w-full`, `px-4`, `max-w-7xl mx-auto`) guaranteed for high-variance designs?
- [ ] Do full-height sections safely use `min-h-[100dvh]` instead of the bugged `h-screen`?
- [ ] Do `useEffect` animations contain strict cleanup functions?
- [ ] Are empty, loading, and error states provided?
- [ ] Are cards omitted in favor of spacing where possible?
- [ ] Did you strictly isolate CPU-heavy perpetual animations in their own Client Components?

## 20. Mobile-first, Native-feel UX (Critical)

The app must feel **native on mobile**. When building UI, prioritize **mobile app UX patterns** over desktop-first web layouts.

### 20.1 General Principles

- Design **mobile-first** and scale up to desktop (not the other way around).
- Keep primary actions reachable with the thumb (bottom area).
- Prefer **short, focused screens** over dense pages.
- Use **progressive disclosure**: show essentials first, reveal details on demand.
- Avoid heavy hover interactions (they don’t exist on mobile).
- Prefer large tap targets and clear spacing.

### 20.2 Layout & Navigation

- Use a **bottom navigation bar** for top-level modules when on mobile:
  - Events, Tickets, Voting, RSVP, Marketplace, Profile/Admin (as applicable)
- Use **sticky bottom action bars** for primary actions on detail screens:
  - “Buy Ticket”, “Vote”, “RSVP”, “Contribute”, “Checkout”
- Use **sheet-based patterns** on mobile:
  - Filters, sort, quick actions, confirmations should open in a bottom sheet / drawer.
- Use **segmented controls / tabs** for switching views within a module:
  - Example: `Upcoming | Past`, `Categories | Nominees`, `My Tickets | Transfers`

### 20.3 Touch & Interaction Standards

- Tap targets must be at least **44×44px**.
- Avoid small inline links for primary actions—use buttons.
- Ensure **gesture-safe** UI (don’t hide actions behind hard-to-discover gestures).
- Use **pull-to-refresh style UX** where feasible (optional) and always provide a visible refresh fallback.
- Use `:active` and focus styles for tactile feedback.
- Avoid double-tap zoom issues: ensure inputs and font sizes are mobile-safe.

### 20.4 Performance & Perceived Speed

- Optimize for fast “time to usable”:
  - Skeleton loaders instead of spinners for lists
  - Instant UI feedback on taps
- Prefer **pagination or infinite scrolling** for long lists (events, nominees, marketplace).
- Use image optimization (`next/image`) and responsive sizes.
- Use React Query caching to avoid refetching on every navigation.

### 20.5 Forms (Native-like)

- Minimize typing:
  - Use pickers, toggles, radios, segmented controls where possible.
- Use correct input types:
  - `type="tel"`, `type="email"`, `inputMode="numeric"` for vote counts, OTP, etc.
- Provide inline validation and clear error messages.
- Keep submit actions sticky at the bottom where appropriate.

### 20.6 Modals, Sheets, and Dialogs

- On mobile prefer **bottom sheets** (drawers) over center modals.
- Dialogs must be accessible:
  - Focus trapped
  - Escape closes (where appropriate)
  - Restore focus on close
- Use confirmation dialogs sparingly; prefer undo/toast patterns when safe.

### 20.7 Responsive Rules

- Mobile styles should be the default.
- Tablet/desktop enhances layout:
  - Multi-column grids
  - Side panels for filters
  - Inline dialogs instead of full-screen sheets (optional)
- Avoid switching to a completely different UI paradigm between breakpoints.

### 20.8 Mobile UI Building Blocks (Shared UI)

Create reusable shared components optimized for mobile:

- `shared/ui/bottom-nav.tsx`
- `shared/ui/bottom-sheet.tsx`
- `shared/ui/sticky-action-bar.tsx`
- `shared/ui/segmented-control.tsx`
- `shared/ui/skeleton.tsx`
- `shared/ui/pull-to-refresh.tsx` (optional)

Rule: one component per file.

### 20.9 PWA & “App-like” Enhancements (Recommended)

- Add PWA support where possible:
  - Installable experience
  - App icons, splash screens
- Use safe area insets on iOS:
  - Respect `env(safe-area-inset-bottom)` for bottom nav/action bars
- Consider haptics on supported devices (optional).
- Provide offline-friendly behavior for previously loaded screens (React Query cache).

### 20.10 Mobile Testing Checklist

- [ ] Thumb reach: primary action reachable at bottom
- [ ] Tap targets ≥ 44×44px
- [ ] Works without hover
- [ ] Scroll performance is smooth
- [ ] Skeletons for list loading
- [ ] Forms use correct keyboards (inputMode/type)
- [ ] Bottom sheets accessible + keyboard-safe
- [ ] Safe area handled on iOS
- [ ] No layout shift causing mis-taps

## 21. Mobile Drawers (iOS-like) with shadcn/ui Drawer (Required)

On mobile, use **shadcn/ui Drawer** as the default interaction pattern for filters, quick actions, confirmations, and secondary flows—so the app feels like an iOS bottom sheet.

### 21.1 When to Use a Drawer

Use a Drawer (bottom sheet) for:

- Filters / sorting (events, nominees, marketplace)
- Quick actions (ticket transfer, share, report, save)
- Small forms (RSVP, apply coupon, choose quantity)
- Confirmations (cancel booking, remove item)
- Pickers (category selection, stage selection)

Avoid Drawer for:

- Long, multi-step flows (use dedicated pages)
- Very large forms (use pages or full-screen flows)
- Content that needs persistent deep links (prefer pages)

### 21.2 Implementation Rules

- The Drawer must be **mobile-first**:
  - On mobile: Drawer opens from bottom
  - On desktop: consider using Dialog/Popover/Sidebar (but keep behavior consistent)
- Drawer content must be **keyboard and screen reader accessible**:
  - Focus moves into the Drawer on open
  - Focus returns to trigger on close
  - Escape closes (when appropriate)
- Support **scroll locking** and internal content scrolling for long lists.
- Ensure it respects **iOS safe areas**:
  - Add padding using `env(safe-area-inset-bottom)` where needed.

### 21.3 Shared UI Wrapper (Recommended)

Create a single shared component wrapper around shadcn Drawer so all Drawers behave consistently:

- `src/shared/ui/ios-drawer.tsx` (one component per file)

Responsibilities of `ios-drawer.tsx`:

- Standard sizes (snap points if available)
- Default padding + safe-area padding
- Standard header pattern (title + close button)
- Optional footer actions (sticky)
- Consistent animation / feel
- Enforced accessibility props

### 21.4 Required UX Details (iOS Feel)

- Rounded top corners on the sheet container
- A “grabber” handle at the top
- Sticky header (title + close)
- Optional sticky footer for primary actions
- Smooth open/close transitions
- Avoid giant top padding; keep content dense but tappable

### 21.5 Example Usage Patterns

Filters (Events):

- Trigger button opens Drawer
- Drawer shows:
  - segmented control (Upcoming/Past)
  - chips/toggles for tags
  - date range picker
- Footer:
  - “Reset”
  - “Apply”

Nominee quick actions:

- Trigger “…” opens Drawer
- Drawer shows:
  - Share nominee
  - View details
  - Report

### 21.6 Testing Checklist

- [ ] Opens from bottom on mobile
- [ ] Close button visible and reachable
- [ ] Focus trapped inside Drawer
- [ ] Close restores focus to trigger
- [ ] Scroll works inside Drawer without scrolling the page behind
- [ ] Safe-area padding works on iOS devices
- [ ] Tap targets ≥ 44×44px
- [ ] Drawer used consistently for filters/actions across modules


```md
## 22. Visual System: Luma-Style Glass, Depth & Backdrop Blur (Required)

The UI should adopt a **Luma-inspired visual style** — modern, soft, glass-like surfaces with depth, blur, translucency, and subtle gradients — while maintaining excellent readability and performance.

Goal: **Premium native-app feel** on mobile and desktop.

This applies to:

- Drawers
- Modals
- Navigation bars
- Cards
- Floating action areas
- Overlays
- Sticky headers
- Bottom navigation
- Dropdowns / popovers

---

## 22.1 Core Design Principles

### Glassmorphism with Restraint

Use:

- Backdrop blur
- Semi-transparent surfaces
- Soft borders
- Layered shadows
- Depth hierarchy

Avoid:

- Excessive blur everywhere
- Low contrast text on translucent backgrounds
- Heavy gradients that reduce readability

Clarity always wins over aesthetics.

---

## 22.2 Backdrop Blur Standards

Use backdrop blur for elevated surfaces:

Examples:

- Navigation bars
- Bottom nav
- Drawers
- Floating cards
- Dialogs
- Sticky headers

Recommended Tailwind pattern:

```

backdrop-blur-xl
bg-white/70
dark:bg-neutral-900/60
border border-white/20

```

Never use fully opaque backgrounds for elevated surfaces unless required for accessibility.

---

## 22.3 Elevation System (Depth Hierarchy)

Define consistent elevation layers:

### Level 0 — Base

- Page background
- No blur
- Neutral color

### Level 1 — Cards

- Subtle shadow
- Slight transparency

### Level 2 — Navigation / Sticky Elements

- Medium blur
- Slight border
- Floating feel

### Level 3 — Drawers / Dialogs

- Strong blur
- Soft shadow
- Rounded corners
- High contrast foreground

### Level 4 — Overlays

- Dark translucent backdrop
- Focus isolation

---

## 22.4 Borders & Surfaces

Use soft inner borders instead of heavy outlines:

Preferred:

```

border border-white/20

```

Dark mode:

```

border border-white/10

```

Optional inner highlight:

```

shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]

```

This creates premium depth similar to native iOS surfaces.

---

## 22.5 Shadows

Use layered shadows instead of harsh drop shadows.

Preferred pattern:

```

shadow-lg shadow-black/5

```

For floating components:

```

shadow-xl shadow-black/10

```

Avoid:

- Hard black shadows
- Multiple conflicting shadow styles

Keep consistent across components.

---

## 22.6 Rounded Corners

Use generous radius:

- Cards: `rounded-2xl`
- Drawers: `rounded-t-3xl`
- Buttons: `rounded-xl`
- Floating containers: `rounded-2xl`

Consistency is critical.

---

## 22.7 Motion & Animation Feel

Motion should feel:

- Smooth
- Slightly springy
- Responsive
- Not slow

Use:

- 150–250ms transitions for small elements
- 250–350ms for drawers/dialogs

Avoid:

- Long animations (>400ms)
- Bouncy overshoot effects unless intentional

Prefer:

- Ease-out curves
- Subtle scale + opacity transitions

---

## 22.8 Navigation Bars (Luma Style)

Top nav / bottom nav should:

- Use backdrop blur
- Semi-transparent background
- Soft border
- Floating appearance

Example concept:

```

backdrop-blur-xl
bg-background/70
border-t border-white/10

```

Include safe-area padding on mobile.

---

## 22.9 Drawer Styling (with shadcn Drawer)

Drawers must follow Luma style:

- Strong backdrop blur
- Rounded top corners
- Grab handle
- Soft shadow
- Semi-transparent surface

Preferred styling:

```

backdrop-blur-2xl
bg-background/80
border border-white/10
rounded-t-3xl
shadow-2xl

```

---

## 22.10 Cards & Lists

Cards should feel touchable and elevated.

Use:

- Subtle hover (desktop)
- Active press feedback (mobile)
- Depth with blur or translucency

Avoid flat, lifeless rectangles.

---

## 22.11 Color & Contrast Rules

Because glass UI reduces contrast:

- Ensure text meets accessibility contrast standards.
- Increase opacity if readability drops.
- Never place small text over noisy backgrounds.

Accessibility overrides aesthetic decisions.

---

## 22.12 Performance Considerations

Backdrop blur is expensive.

Rules:

- Do not stack multiple blurred layers unnecessarily.
- Avoid blur on large scrolling backgrounds.
- Prefer blur only on elevated containers.
- Test performance on mid-range mobile devices.

If performance suffers:

- Reduce blur strength
- Increase opacity
- Remove blur on low-power mode

---

## 22.13 Shared Tokens (Recommended)

Create reusable tokens in Tailwind or CSS variables:

Examples:

- `--glass-bg`
- `--glass-border`
- `--glass-shadow`
- `--blur-strong`
- `--blur-soft`

Centralize styles to maintain consistency.

---

## 22.14 Components That MUST Use Luma Style

- Bottom navigation
- Top navigation
- Drawers
- Dialogs
- Floating action bars
- Sticky headers
- Dropdown menus
- Cards
- Popovers
- Modals

Consistency across the app is critical.

---

## 22.15 Testing Checklist

- [ ] Blur used consistently across elevated surfaces
- [ ] Text readable on translucent backgrounds
- [ ] Shadows consistent across components
- [ ] Rounded radii consistent
- [ ] Motion smooth and responsive
- [ ] No performance lag on mobile
- [ ] Dark mode visually balanced
- [ ] Accessibility contrast passes
```


---
name: tailwind-4
description: >
  Guides AI agents in Tailwind CSS v4 utility-first styling, responsive design, and modern patterns.
  Trigger: When styling with Tailwind (className, variants, cn()), especially when dynamic styling or CSS variables are involved (no var() in className).
license: Apache-2.0
metadata:
  author: devcontext
  version: "1.0.0"
  scope: [root]
  auto_invoke: "Styling with Tailwind"
allowed-tools: Read
---

## When to Use

Use this skill when:

- Styling components with Tailwind CSS
- Creating responsive layouts
- Implementing dark mode
- Configuring Tailwind theme
- Building design systems
- Optimizing utility classes

---

## REQUIRED Patterns

### Pattern 1: Mobile-First Responsive (REQUIRED)

```tsx
// ✅ ALWAYS: Mobile-first, then scale up
<div className="p-4 md:p-6 lg:p-8">

// ❌ NEVER: Desktop-first
<div className="p-8 md:p-6 sm:p-4">
```

### Pattern 2: Semantic Color Tokens (REQUIRED)

```tsx
// ✅ ALWAYS: Use semantic color tokens
<button className="bg-primary text-primary-foreground">

// ❌ NEVER: Hardcoded colors
<button className="bg-blue-500 text-white">
```

### Pattern 3: Component Composition with cn() (REQUIRED)

```tsx
import { cn } from "@/lib/utils";

// ✅ ALWAYS: Use cn() with object syntax for conditionals
<div className={cn(
  "base-styles",
  {
    "primary-styles": variant === "primary",
    "large-styles": size === "lg",
  },
  className
)}>

// ❌ DON'T: Use cn() for static classes (unnecessary)
<div className={cn("flex items-center gap-2")} />

// ✅ DO: Just use className for static
<div className="flex items-center gap-2" />

// ❌ NEVER: String concatenation
<div className={"base " + (active ? "active" : "")}>
```

### Pattern 4: No Arbitrary Values (REQUIRED)

```tsx
// ✅ ALWAYS: Use design system tokens
<div className="w-96 h-64 text-lg">

// ❌ NEVER: Arbitrary values (unless absolutely necessary)
<div className="w-[347px] h-[219px] text-[17px]">
```

### Pattern 5: Never Use var() in className (REQUIRED)

```tsx
// ❌ NEVER: var() in className
<div className="bg-[var(--color-primary)]" />
<div className="text-[var(--text-color)]" />

// ✅ ALWAYS: Use Tailwind semantic classes
<div className="bg-primary" />
<div className="text-foreground" />
```

### Pattern 6: Never Use Hex Colors (REQUIRED)

```tsx
// ❌ NEVER: Hex colors in className
<p className="text-[#ffffff]" />
<div className="bg-[#1e293b]" />

// ✅ ALWAYS: Use Tailwind color classes
<p className="text-white" />
<div className="bg-slate-800" />
```

---

## Styling Decision Tree

```
Tailwind class exists?   → className="..."
Dynamic value?           → style={{ width: `${x}%` }}
Conditional styles?      → cn("base", { "variant": condition })
Static classes only?     → className="..." (no cn() needed)
Library can't use class? → style prop with var() constants
```

---

## Critical Patterns

### Pattern 5: Layout & Spacing

```tsx
// Flexbox
<div className="flex items-center justify-between gap-4">
<div className="flex flex-col space-y-2">

// Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Container
<div className="container mx-auto px-4">

// Spacing scale: 0, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24
<div className="p-4 m-2 gap-6">
```

### Pattern 6: Typography

```tsx
// Text sizing (mobile-first)
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
<p className="text-sm md:text-base text-muted-foreground">

// Font weights: thin, extralight, light, normal, medium, semibold, bold, extrabold, black
<span className="font-semibold">

// Line height
<p className="leading-tight">  // 1.25
<p className="leading-normal"> // 1.5
<p className="leading-relaxed"> // 1.625
```

### Pattern 7: Colors & Theming

```text
// Semantic colors (from design system)
bg-background
text-foreground
bg-primary / text-primary-foreground
bg-secondary / text-secondary-foreground
bg-muted / text-muted-foreground
bg-accent / text-accent-foreground
bg-destructive / text-destructive-foreground
border-border
ring-ring

// State variants
hover:bg-primary/90
focus:ring-2 focus:ring-ring
disabled:opacity-50
```

### Pattern 8: Dark Mode

```tsx
// ✅ ALWAYS: Use class-based dark mode
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">

// Theme toggle implementation
"use client"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle
    </button>
  )
}
```

---

## Dynamic Values

```tsx
// ✅ style prop for truly dynamic values
<div style={{ width: `${percentage}%` }} />
<div style={{ opacity: isVisible ? 1 : 0 }} />

// ✅ CSS custom properties for theming
<div style={{ "--progress": `${value}%` } as React.CSSProperties} />
```

---

## Style Constants for Libraries

When libraries don't accept className (like Recharts, Chart.js):

```typescript
// ✅ Constants with var() - ONLY for library props
const CHART_COLORS = {
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  text: "var(--color-text)",
  gridLine: "var(--color-border)",
};

// Usage with Recharts (can't use className)
<XAxis tick={{ fill: CHART_COLORS.text }} />
<CartesianGrid stroke={CHART_COLORS.gridLine} />
```

**Important:** Only use `var()` in the `style` prop or library props that don't support className. Never in `className`.

---

## Responsive Design

### Breakpoint System

```tsx
// Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px)

// Hide/show at breakpoints
<div className="hidden md:block">Desktop only</div>
<div className="block md:hidden">Mobile only</div>

// Responsive grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

// Responsive text
<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
```

### Container Patterns

```tsx
// Full-width container with max-width
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Section spacing
<section className="py-12 md:py-16 lg:py-24">

// Card container
<div className="rounded-lg border bg-card p-6 shadow-sm">
```

---

## Animation & Transitions

```tsx
// Transitions
<div className="transition-all duration-200 ease-in-out">
<div className="transition-colors hover:bg-accent">

// Transforms
<div className="hover:scale-105 active:scale-95">
<div className="hover:-translate-y-1">

// Opacity
<div className="opacity-0 hover:opacity-100 transition-opacity">

// Animations
<div className="animate-spin">
<div className="animate-pulse">
<div className="animate-bounce">
```

---

## Advanced Patterns

### Group Hover

```tsx
<div className="group cursor-pointer">
  <div className="group-hover:opacity-75 transition">
    <img src="..." />
  </div>
  <h3 className="group-hover:text-primary transition">Title</h3>
</div>
```

### Peer Modifier

```tsx
<input type="checkbox" className="peer sr-only" />
<label className="peer-checked:bg-primary peer-checked:text-primary-foreground">
  Label
</label>
```

### Custom Utilities with @layer

```css
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

---

## Anti-Patterns

```tsx
// ❌ DON'T: Desktop-first responsive
<div className="p-8 lg:p-6 md:p-4">

// ✅ DO: Mobile-first
<div className="p-4 md:p-6 lg:p-8">

// ❌ DON'T: Hardcoded colors
<div className="bg-blue-500 text-white">

// ✅ DO: Semantic tokens
<div className="bg-primary text-primary-foreground">

// ❌ DON'T: Inline styles
<div style={{ padding: "16px" }}>

// ✅ DO: Tailwind utilities
<div className="p-4">

// ❌ DON'T: Too many arbitrary values
<div className="w-[347px] h-[219px] mt-[23px]">

// ✅ DO: Design system tokens
<div className="w-96 h-64 mt-6">

// ❌ DON'T: String concatenation
className={"btn " + (active ? "active" : "")}

// ✅ DO: cn() with object syntax
className={cn("btn", { "active": active })}

// ❌ DON'T: !important overrides
<div className="!p-0 !m-0">

// ✅ DO: Proper specificity or refactor
<div className="p-0 m-0">
```

---

## cn() Utility

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Resources

- **Documentation**: [tailwindcss.com](https://tailwindcss.com)
- **Tailwind v4**: [v4.tailwindcss.com](https://v4.tailwindcss.com) - New CSS-first configuration
- **Theme Setup**: See Tailwind v4 docs for `@theme` directive
- **cn() utility**: Always use for conditional class composition
- **Mobile-first**: Default responsive approach
