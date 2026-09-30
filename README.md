# ByteSpace - Modern E-Learning Platform (Job Task)

### Live Link: https://bytespace-new-zeta.vercel.app
### Github: https://github.com/mdalamin0/bytespace-new

A highly responsive, pixel-perfect e-learning landing page and authentication module built with **Next.js  (App Router)** and **Tailwind CSS**. This project is crafted following industry-standard best practices, robust component encapsulation, and strict accessibility rules.

---

## 🛠️ Tech Stack & Key Tools
- **Framework:** Next.js (App Router, React 18)
- **Styling:** Tailwind CSS v4 (utilizing modern `@theme inline` configurations)
- **Icons:** React Icons (`react-icons/fi`, `react-icons/fa`, `react-icons/lu`, `react-icons/hi2`)
- **Linter & Formatter:** Biome (Strict adherence to `a11y` accessibility standards)

---

## ✨ Features Implemented

### 1. Global Optimization & Architecture
- **Next.js Native Fonts:** Integrated **Poppins** globally using `next/font/google` to prevent Cumulative Layout Shifts (CLS).
- **Zero-Dependency Reusable Button:** Built a package-less, light-weight `<Button />` component mapping multiple visual variants (`primary`, `blue`, `outline`, `ghost`) with built-in responsive sizing.
- **Fixed & Transparent Navbar:** Implemented a non-intrusive backdrop-blur navigation structure matching the exact Figma overlays.

### 2. Core Landing Page Sections
- **Hero Section:** High-fidelity implementation with layered `z-index` configuration. Features complex bottom-aligned illustrations, responsive overlay cards, and a fully accessible search trigger layout.
- **Trusted Partners Bar:** Dynamic grid rendering using local mock arrays (`.map()`) mapped with custom brand assets.
- **Course Discovery Grid:** Implemented dynamic category button capsule arrays and individual interactive `CourseCard` items embedded with conditional badge sub-layouts.
- **Diverse Learning Paths:** A 6-column optimized flex grid displaying clean modern icons mapped dynamically from categorized schema properties.
- **Features & Growth Layout:** Parallel asymmetric rows mapping text grids to complex composite image matrices (`growth-composite.png` & `management-composite.png`). Background layers utilize absolute radial glow modifiers properly centered via layout specs.
- **Creator Engagement CTA:** A full-width immersive banner stacking grid graphics with scattered absolute vector assets.

### 3. Authentication & Error Module (Route Groups Flow)
- Developed inside an isolated layout route structure using Next.js Route Groups.
- **Sign Up & Sign In Forms:** Standalone encapsulated `<RegisterForm />` and `<LoginForm />` state controls embedded into the `(auth)` group routes. Includes modern social OAuth triggers.
- **404 Custom Error Page:** A highly stylized `not-found.tsx` mapping structural layout fallbacks. Utilizes transparent text masking overlays alongside responsive layout alignment fixes.

---

## 🧩 Quality Control & Accessibility (a11y)
The application has been audited and cleaned using strict linting rules:
- **Button Typings:** Explicit button native types enforced globally (`type="button"` / `type="submit"`).
- **Label Association:** Ensured semantic control relations using strict `htmlFor` pairings matching localized control scope `id` tags.
- **Clean Codebase:** Zero boilerplate, zero dead comments, and structured component encapsulation.

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── (auth)/            # Auth Route Group
│   │   ├── login/
│   │   │   └── page.tsx   # Sign In Route Configuration
│   │   └── register/
│   │       └── page.tsx   # Sign Up Route Configuration
│   ├── (public)/          # Public Route Group
│   │   ├── layout.tsx     # Main Layout Configuration
│   │   └── page.tsx       # Home Landing Page Core Entry
│   ├── favicon.ico
│   ├── globals.css        # Tailwind v4 Directives & Variables
│   ├── layout.tsx         # Root Layout (Poppins setup)
│   └── not-found.tsx      # Custom 404 Layout Error Handler
└── components/
    ├── form/
    │   ├── LoginForm.tsx
    │   └── RegisterForm.tsx
    ├── layout/
    │   ├── Footer.tsx
    │   └── Navbar.tsx
    ├── sections/
    │   ├── CourseCard.tsx
    │   ├── CourseDiscovery.tsx
    │   ├── CreatorCTA.tsx
    │   ├── GrowthAndManagement.tsx
    │   ├── Hero.tsx
    │   ├── LearningPaths.tsx
    │   ├── Testimonials.tsx
    │   └── TrustedCompanies.tsx
    └── ui/
        ├── Button.tsx     # Reusable Button Component
        └── Logo.tsx       # Branding Logo Core
```

---

## ⚙️ Getting Started

First, clone the repository and install the required dependencies:

```bash
git clone https://github.com
cd bytespace-new
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
