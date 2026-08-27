# Foodix Frontend

Premium dark/orange restaurant ordering UI built with:

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Zustand cart state
- Lucide React icons

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` when the Spring Boot backend is ready.

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
```

## Pages

- `/` Home
- `/menu` Menu + category filters
- `/cart` Cart with quantity controls and promo UI
- `/checkout` Checkout UI
- `/about`
- `/offers`
- `/contact`
- `/login`

## Backend integration plan

Create API service modules later for:

- Auth
- Menu / products
- Cart sync (optional)
- Orders
- Offers / promo validation
- Payments

The current frontend uses local sample data and browser-persisted cart state so the UI can be developed independently from Spring Boot.
