# AFTERTASTE × USM — Interactive Editorial Experience & RSVP Architecture

> **"The collector is away. The apartment is open."**  
> An ultra-luxury, editorial event invitation and interactive RSVP application built for the opening night of Armory Week at 53 Scott Ave, Brooklyn. Built with **React 19**, **TypeScript**, **Vite 6**, **Tailwind CSS v4**, **Motion**, and **Vaul**.

---

## 📑 Table of Contents
1. [Project Overview & Concept](#-project-overview--concept)
2. [Complete Technology Stack & Tooling](#-complete-technology-stack--tooling)
3. [Full Directory & Codebase Structure](#-full-directory--codebase-structure)
4. [Component Architecture & User Journey](#-component-architecture--user-journey)
5. [From Basic to Advanced: Core Concepts Explained](#-from-basic-to-advanced-core-concepts-explained)
6. [Interactive Subsystems Deep-Dive](#-interactive-subsystems-deep-dive)
   - [Responsive Drawer & Modal System](#1-responsive-drawer--modal-system)
   - [Multi-Step RSVP & Ticket Issuance Flow](#2-multi-step-rsvp--ticket-issuance-flow)
   - [Global Haptics Engine](#3-global-haptics-engine)
   - [Gated Secret Address Reveal](#4-gated-secret-address-reveal)
   - [Darkroom Tactile Aesthetics & Film Grain](#5-darkroom-tactile-aesthetics--film-grain)
7. [How to Explain This Project (Interview & Presentation Guide)](#-how-to-explain-this-project-interview--presentation-guide)
8. [Local Development & Commands](#-local-development--commands)

---

## 🏛 Project Overview & Concept

**AFTERTASTE × USM** is a high-craft, editorial web application engineered as the official digital invitation, immersive catalogue, and multi-step RSVP gateway for an exclusive private gathering.

### The Creative Direction
- **Editorial Print Meets Modern Web**: Combines Swiss modernist typography (**OpenRunde**, **Cormorant Garamond**), aged parchment paper textures (`#DDD5C4`), darkroom carbon surfaces (`#0A0908`), and iconic USM Haller terracotta rust accents (`#C6532C`).
- **Interactive Storytelling**: Instead of a dry registration form, guests embark on a guided spatial narrative exploring the apartment's rooms (Dining Room, Office Archive, Analog Listening Sanctuary), USM modular furniture cabinets, and the dinner-to-afters timeline.
- **Native iOS-Quality Sheet Interactions**: Incorporates fluid spring physics, full-page scaling when modals open (mimicking Apple iOS system sheets), tactile mobile vibration feedback, and custom multi-step verification.

---

## 🛠 Complete Technology Stack & Tooling

| Domain | Technology / Tool | Version | Purpose in Codebase |
| :--- | :--- | :--- | :--- |
| **Core Framework** | **React** | `^19.0.1` | Component model, latest React 19 hooks and rendering pipeline. |
| **Language** | **TypeScript** | `~5.8.2` | Strict end-to-end type safety across components, models, and data payloads. |
| **Build & Bundling** | **Vite** | `^6.2.3` | Instant HMR (Hot Module Replacement), optimized ESM build pipeline. |
| **Styling Engine** | **Tailwind CSS v4** | `^4.1.14` | Next-generation CSS compiler using `@import "tailwindcss";` and custom CSS tokens. |
| **Motion & Physics** | **Motion / Framer Motion** | `^12.23.24` / `^13.2.0` | Physics-based spring animations, layout morphing, and drawer gestures. |
| **Drawer Primitives** | **Vaul** | `^1.1.2` | Native iOS-style bottom drawer sheet with pull-down drag physics. |
| **Headless Primitives**| **Radix UI Primitives** | `^1.3.x` | Accessible modal dialogs (`@radix-ui/react-dialog` via `@radix-ui/react-slot`). |
| **Component Primitives**| **Base UI** | `^1.8.0` | Unstyled headless UI building blocks. |
| **Class Utilities** | **clsx** & **tailwind-merge** | `^2.1.1` & `^3.6.0` | Conflict-free conditional CSS class composition (`cn()` helper). |
| **Component Variants** | **class-variance-authority** | `^0.7.1` | Type-safe design system component variants (buttons, cards, badges). |
| **Dynamic QR Codes** | **qrcode** | `^1.5.4` | In-browser dynamic SVG/Canvas QR generation for the personalized VIP pass. |
| **Sensory Hardware** | **Web Vibration API** | Native Browser API | Fine-tuned physical haptic feedback debounced for touch interactions. |
| **Icons** | **Lucide React** & **Radix Icons** | `^0.546.0` | Crisp SVG iconography matching the editorial minimalist aesthetic. |
| **Responsive Hooks** | **react-use-measure** | `^2.1.7` | Dynamic DOM bounding rect measurement for fluid animated containers. |

---

## 📂 Full Directory & Codebase Structure

```
rumor-assessment-/
├── index.html                   # HTML5 entry point with OpenRunde & Google Fonts preloads
├── package.json                 # Project dependencies, build scripts, and engine configs
├── tsconfig.json                # TypeScript compiler configuration (strict mode enabled)
├── vite.config.ts               # Vite configuration with React and Tailwind v4 plugins
├── metadata.json                # Project descriptor & capability declarations
├── public/                      # Static assets (fonts, icons, raw images)
│   └── fonts/                   # OpenRunde woff2 font files (Regular, Medium, Semibold, Bold)
└── src/
    ├── main.tsx                 # React DOM root hydration
    ├── App.tsx                  # Master application orchestrator and state coordinator
    ├── index.css                # Global design system tokens, typography, and grain shaders
    ├── types.ts                 # Central TypeScript interfaces (Host, Room, RSVP, etc.)
    ├── data.ts                  # Editorial copy, room descriptions, schedule & USM items
    ├── hooks/                   # Custom React hooks
    │   ├── use-mobile.ts        # Dynamic viewport width breakpoint detector (< 768px / 1024px)
    │   └── use-measure.ts       # Animated height/width measurement wrapper
    ├── lib/                     # Utilities & Hardware abstraction
    │   ├── utils.ts             # `cn()` utility combining `clsx` and `tailwind-merge`
    │   └── haptics.ts           # Web Vibration API tactile engine with touch debouncing
    ├── data/
    │   └── countries.ts         # Comprehensive country calling codes and flags for phone input
    └── components/              # Architectural UI components
        ├── FlyerCard.tsx                # Left sticky column: physical print flyer card
        ├── FlyerModal.tsx               # Fullscreen lightbox modal for high-res flyer inspection
        ├── RumorHeaderRow.tsx           # Bento row with Quick Facts, Date, Venue, Share & RSVP
        ├── EditorialHeroSection.tsx     # Section 01: Headline, formal invitation copy & status pill
        ├── RumorAboutSection.tsx        # Section 02: Narrative context & Armory Week framing
        ├── EditorialExperienceSection.tsx # Section 03: 3-phase journey & USM cabinet relics
        ├── ThingsToKnowSection.tsx      # Section 04: Phone-free policy, dress code & arrival notes
        ├── RumorLocationSection.tsx     # Section 05: Location preview, gated lock, Google Maps link
        ├── RumorHostsSection.tsx        # Section 06: Host profiles, Instagram links & contact button
        ├── RumorFooterStamp.tsx         # Section 07: Editorial colophon, Rumor & Syed Subhan credit
        ├── RumorStickyRsvp.tsx          # Mobile bottom persistent RSVP bar
        ├── ShareDrawer.tsx              # Web Share API & clipboard link copy sheet
        ├── ContactOrganizerModal.tsx    # Modal form to message event hosts directly
        ├── CabinetItemModal.tsx         # Interactive inspection modal for USM cabinet relics
        ├── family-drawer/               # Multi-step authentication & RSVP subsystem
        │   ├── family-drawer-component.tsx # Primary controller switching between Drawer & Dialog
        │   ├── multi-step-component.tsx    # Step state manager (Phone -> OTP -> Confirmed)
        │   ├── phone-view.tsx              # Step 1: International phone input with country selector
        │   ├── otp-view.tsx                # Step 2: 6-digit OTP code verification
        │   ├── confirmed-view.tsx          # Step 3: Verified ticket pass with dynamic QR code
        │   ├── default-view.tsx            # Initial invitation view inside drawer
        │   └── pricing-card.tsx            # Ticket tier and guest allotment specifications
        └── ui/                          # Reusable Atomic Design Primitives
            ├── button.tsx               # CVA-driven polymorphic button
            ├── card.tsx                 # Standardized surface cards with subtle borders
            ├── dialog.tsx               # Desktop accessible dialog (Radix primitive)
            ├── drawer.tsx               # Mobile pull drawer (Vaul primitive)
            ├── responsive-drawer.tsx    # Context-aware wrapper: Vaul on mobile, Dialog on desktop
            ├── otp-input.tsx            # Accessible segmented 6-digit PIN input
            ├── qrcode.tsx               # Canvas-rendered QR generator component
            └── skeleton.tsx             # Loading placeholder state
```

---

## 🔄 Component Architecture & User Journey

```
[App.tsx (Root State)]
   │
   ├── [Darkroom Film Grain Background (.bg-grain)]
   │
   ├── <motion.div> (Page Scale Shell: shrinks to 0.94 scale with rounded corners when ShareDrawer opens)
   │     │
   │     ├── Left Column (Desktop Sticky 300px Track):
   │     │     └── <FlyerCard /> ─── (Click) ───> <FlyerModal /> (Lightbox)
   │     │
   │     └── Right Column (Fluid Editorial Scroll):
   │           ├── <EditorialHeroSection /> (Invitation Copy & Status)
   │           ├── <RumorHeaderRow /> (Bento Row: Date, Map Unlock, Share Button)
   │           ├── <RumorAboutSection /> (The "Collector is Away" Story)
   │           ├── <EditorialExperienceSection /> (3 Phases + USM Relic Tiles)
   │           │     └── (Click Relic) ───> <CabinetItemModal />
   │           ├── <ThingsToKnowSection /> (Phone-Free, Dress Code)
   │           ├── <RumorLocationSection /> (Gated: Blurred map until RSVP)
   │           ├── <RumorHostsSection />
   │           │     └── (Click Contact) ───> <ContactOrganizerModal />
   │           └── <RumorFooterStamp /> (Colophon & Credits)
   │
   ├── <RumorStickyRsvp /> (Bottom floating bar on mobile & desktop)
   │
   ├── <ShareDrawer /> (Native Share / Copy Link Sheet)
   │
   └── <FamilyDrawerComponent /> (The RSVP Gateway)
         └── <MultiStepComponent />
               ├── [View 1: PhoneView] -> Country Select + Mobile Number
               ├── [View 2: OtpView]   -> 6-Digit Code Verification
               └── [View 3: ConfirmedView] -> Dynamic QR Code + Apple Wallet + Secret Address Unlock
```

---

## 🧠 From Basic to Advanced: Core Concepts Explained

### 1. Basic Level: React 19 & Component Composition
- **Unidirectional Data Flow**: State lives at the appropriate common ancestor (`App.tsx` coordinates `isRsvpOpen`, `isAddressUnlocked`, `isShareOpen`).
- **State Inversion**: Children notify parents via callbacks (`onOpenRsvp`, `onSelectItem`, `onReveal`), keeping presentation components decoupled from domain logic.
- **Type-Safe Props**: Every component defines strict TypeScript interfaces extending standard HTML elements or domain models (`Host`, `RoomItem`, `CabinetDiscoveryItem`).

### 2. Intermediate Level: Fluid Typography & CSS Tokens
- **Tailwind CSS v4 `@theme` Integration**: Custom color system configured directly in `src/index.css`:
  - `--background: #0B0A09` (Darkroom black)
  - `--paper: #DDD5C4` (Warm aged parchment)
  - `--accent: #C6532C` (USM Haller Terracotta rust)
- **Viewport-Responsive Clamp Calculations**: No jagged breakpoint jumps; typography and spacing use math functions:
  ```css
  padding: clamp(16px, 2.5vw, 28px);
  font-size: clamp(28px, 6vw, 38px);
  ```

### 3. Advanced Level: Adaptive Polymorphic Architecture (`ResponsiveDrawer`)
- Instead of maintaining two separate components for Mobile (Bottom Sheet) and Desktop (Centered Modal), the codebase uses `src/components/ui/responsive-drawer.tsx`:
  - Queries `useMobile()` (detects screen width `< 1024px`).
  - Renders a touch-draggable **Vaul Drawer** on mobile devices.
  - Automatically switches to an accessible **Radix Dialog** modal on desktop screens.
  - Keeps identical business logic and children across both screen formats.

### 4. Expert Level: Native iOS-Style Canvas Scaling & Tactile Physics
- **Viewport Canvas Shrinking**: When `isShareOpen` is true, the entire root page scales down using Framer Motion:
  ```tsx
  <motion.div
    animate={{
      scale: isShareOpen ? 0.94 : 1,
      borderRadius: isShareOpen ? 28 : 0,
      filter: isShareOpen ? 'brightness(0.85)' : 'brightness(1)',
      y: isShareOpen ? -8 : 0,
    }}
    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
  >
  ```
- **Haptic Feedback Engine**: Detects touch screens via `(pointer: coarse)` and fires subtle 8ms–35ms micro-vibrations through `navigator.vibrate` on interactive elements.

---

## 🔍 Interactive Subsystems Deep-Dive

### 1. Responsive Drawer & Modal System
- **File**: `src/components/ui/responsive-drawer.tsx`
- **Mechanism**: Reads `window.matchMedia('(max-width: 1023px)')`. When on mobile, `Vaul.Root` handles momentum dragging, rubber-banding, and snap points. On desktop, `Dialog.Root` handles ESC key closing, focus traps, and backdrop blurring.

### 2. Multi-Step RSVP & Ticket Issuance Flow
- **Files**: `src/components/family-drawer/*`
- **Step 1 (Phone Input)**: Integrated with `src/data/countries.ts` for dial codes and validation.
- **Step 2 (OTP Verification)**: Uses a custom auto-focusing 6-box PIN input with paste support.
- **Step 3 (Pass & Unlock)**:
  - Generates a real-time QR code via `qrcode` with guest metadata and a unique ticket token (`USM-NYC-ARMORY-2026`).
  - Calls `onReveal()`, which flips `isAddressUnlocked = true` across the entire application.
  - Unlocks the secret Brooklyn address ("53 Scott Ave, Brooklyn, NY 11237") in the hero bento, map preview, and sticky bar.
  - Allows direct download of `.ics` calendar invitation files with accurate UTC coordinates.

### 3. Global Haptics Engine
- **File**: `src/lib/haptics.ts`
- **Pattern Dictionary**:
  - `selection`: `8ms` (subtle tab switch)
  - `light`: `12ms` (standard button tap)
  - `medium`: `22ms` (modal trigger)
  - `success`: `[10ms, 40ms, 15ms]` (double-pulse on OTP verification)
- **Automatic Event Delegation**: `initGlobalHaptics()` listens on `window` for `pointerdown`, inspects `e.target.closest('button, a, [role="button"]')`, debounces clicks by 80ms, and fires physical feedback without cluttering React component code.

### 4. Gated Secret Address Reveal
- The event begins as an exclusive mystery. The address is displayed as:
  > `[LOCKED] • RSVP to unlock private Scott Ave location`
- Once the guest completes the SMS verification, `isAddressUnlocked` triggers animated re-renders:
  - Unblurs the venue location.
  - Activates direct Google Maps and Apple Maps navigation links.
  - Updates the sticky bottom bar from `"RSVP TO UNLOCK"` to `"VIEW CONFIRMED TICKET"`.

### 5. Darkroom Tactile Aesthetics & Film Grain
- **File**: `src/index.css` (`.bg-grain`)
- Modern OLED displays often suffer from digital color banding on subtle dark gradients. To create an analog gallery atmosphere, an SVG fractal noise filter is injected as a fixed background overlay with `mix-blend-mode` and 3% opacity:
  ```css
  background-image: url("data:image/svg+xml,...feTurbulence type='fractalNoise' baseFrequency='0.75'...");
  ```
  This creates the physical texture of 35mm film grain or archival darkroom paper.

---

## 🎤 How to Explain This Project (Interview & Presentation Guide)

### The 30-Second Elevator Pitch
> *"AFTERTASTE × USM is a luxury editorial event platform built with React 19, TypeScript, and Vite. Inspired by Swiss modernist print design and Apple iOS native interaction patterns, it features an interactive spatial walkthrough, a responsive drawer-to-dialog subsystem, a multi-step phone/OTP verification flow that generates personalized dynamic QR passes, and a custom haptic feedback engine for mobile tactile immersion."*

### Key Talking Points for Technical Interviews:
1. **Design System & Tailwind v4**:
   - *"I used CSS variables for semantic design tokens (paper, rust, surface) coupled with Tailwind v4, ensuring high contrast, accessibility, and zero runtime CSS overhead."*
2. **Component Architecture & Clean Code**:
   - *"The codebase isolates stateful flows (like the 3-step RSVP drawer) from presentational layouts. Primitives in `src/components/ui/` provide reusable, unstyled functionality, while editorial sections in `src/components/` handle storytelling."*
3. **Adaptive UX (Mobile-First + Desktop-Optimized)**:
   - *"Rather than forcing mobile bottom sheets onto 4K displays, I built a `ResponsiveDrawer` bridge that renders Vaul bottom sheets on touch devices and Radix dialogs with backdrop filters on desktop."*
4. **Performance & Delight**:
   - *"We replaced heavy graphic assets with clean SVG noise shaders and dynamic QR canvas rendering. The touch interactions use a debounced Web Vibration API engine that gives physical tactile feedback on smartphones without extra libraries."*

---

## 🚀 Local Development & Commands

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **pnpm** or **yarn**

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Run the Vite development server (starts on http://localhost:3000)
npm run dev

# 3. Type-check with TypeScript (zero emits, checks all types)
npm run lint

# 4. Build for production
npm run build

# 5. Preview production bundle locally
npm run preview
```

### Environment Variables
Copy `.env.example` to `.env` if using external API keys:
```bash
cp .env.example .env
```

---

## 👨‍💻 Colophon & Credits
- **Project**: Aftertaste × USM (Armory Week NYC)
- **Design & Engineering**: Syed Subhan
- **Inspiration**: USM Modular Furniture, Swiss Modernism, Emil Kowalski (*animations.dev*), Rumor.
