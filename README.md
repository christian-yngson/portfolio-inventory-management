# Portfolio Inventory Management

This is a **Next.js 16+** project with **TypeScript**, **Material UI v7**, and **Tailwind CSS**, built to showcase a professional **fullstack inventory management dashboard**.

It demonstrates senior-level **fullstack development skills**, including database integration, authentication, role-based access control (RBAC), reusable components, and CI/CD-ready project structure.

---

## Features

### Core Features

- Add / Edit / Delete products
- Track stock quantity
- Manage vendors & suppliers
- Record sales & purchases
- Low-stock alerts
- Search and filtering

### Authentication & Authorization

- Simple credentials authentication (NextAuth.js)
- Role-Based Access Control (RBAC) with roles: `admin`, `manager`, `staff`
- Admin can manage roles and permissions
- Protected route groups for dashboard pages

### Dashboard & Analytics

- Charts using **Recharts / Chart.js**
- Inventory value over time
- Best-selling items (in the future)
- Stock movement trends (in the future)

---

## Tech Stack

- **Frontend:** Next.js (App Router, TypeScript), Material UI v7, Tailwind CSS
- **Backend:** Node.js API routes with Next.js, PostgreSQL database
- **Authentication:** NextAuth.js with credentials provider + JWT
- **Hosting / PaaS:** Vercel (frontend), Render or Vercel serverless for real-time socket features (in the future)

---

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run the local development server

```bash
npm run dev
```

## Routing

All routing is centralized in `@/lib/constants/routes/routes.ts` to maintain consistency and type safety.
Nested routes, child routes, and dynamic parameters are supported via functions.

Example usage:

```typescript
Routes.protected.dashboard.root(); // "/dashboard"
Routes.protected.dashboard.inventory("123"); // "/dashboard/inventory/123"
```

## Testing

This project uses Vitest for testing, along with React Testing Library and jest-dom for component assertions.

Example test:

```jsx
import { describe, it, expect } from "vitest";
import Routes from "./routes";

import { describe, it, expect } from "vitest";
import Routes from "./routes";

describe("Routes", () => {
  it('should have a home route that returns "/"', () => {
    expect(Routes.home()).toBe("/");
  });

  it('should have a login route that returns "/login"', () => {
    expect(Routes.login()).toBe("/login");
  });

  describe("Protected routes", () => {
    describe("Dashboard routes", () => {
      it('should have a dashboard root route that returns "/dashboard"', () => {
        expect(Routes.protected.dashboard.root()).toBe("/dashboard");
      });
    });
  });
});
```
