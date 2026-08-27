# Foodix Full Project Workspace

This ZIP is organized as an industry-style split workspace:

```text
foodix/
├── frontend/          # Next.js + TypeScript + Tailwind CSS
├── backend/           # Spring Boot package scaffold for later implementation
└── design-reference/  # Original UI reference supplied for the project
```

Start with `frontend/README.md`.


## UI update
- Home hero now uses the supplied grilled chicken bowl image on the right side.
- The global content shell uses a wide desktop max-width (up to 1520px on very large screens).
- Header, hero, cards, borders, dark surfaces and orange accents were tightened to better match the supplied Foodix reference design.
- The hero delivery / quality / payment cards are integrated into the main hero panel for a layout closer to the reference.

## Latest UI update
- Hero food image now has smooth floating/Ken Burns animation, desktop mouse parallax, ambient glow, light sweep and subtle particles.
- Animation automatically simplifies on touch/mobile devices and honors `prefers-reduced-motion`.
- Responsive spacing, typography and content grids were refined for mobile, tablet, laptop and wide desktop screens.
