# WealthBridge

A production-quality fintech web app inspired by PiggyVest/Cowrywise — helping users track wealth, manage budgets, grow savings, invest wisely, and learn personal finance.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string, `SESSION_SECRET` — JWT signing secret

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, shadcn/ui, recharts, framer-motion, wouter
- API: Express 5, JWT (jsonwebtoken + bcryptjs)
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec at `lib/api-spec/openapi.yaml`)
- Build: esbuild (CJS bundle)

## Where things live

- `lib/db/src/schema/` — DB schema (users, transactions, savings_goals, budgets, investments, chat_messages, lessons)
- `lib/api-spec/openapi.yaml` — OpenAPI contract (source of truth)
- `lib/api-client-react/src/generated/` — generated React Query hooks + Zod schemas
- `artifacts/api-server/src/routes/` — Express route handlers
- `artifacts/wealthbridge/src/pages/` — React page components
- `artifacts/wealthbridge/src/components/layout/AppLayout.tsx` — sidebar + header layout
- `artifacts/wealthbridge/src/lib/auth.ts` — JWT token helpers (localStorage)

## Architecture decisions

- Contract-first API: OpenAPI spec → Orval codegen → typed hooks. Never write API hooks by hand.
- JWT stored in `localStorage` key `wb_token`; injected via `setAuthTokenGetter` in `lib/api-client-react`.
- Frontend uses `wouter` for routing (not React Router); base path driven by `import.meta.env.BASE_URL`.
- DB migrations via `pnpm --filter @workspace/db run push` (drizzle-kit push, dev only).
- Admin role set directly in DB; no self-service admin promotion by design.

## Product

- **Dashboard** — balance, savings, investments, income/expense chart, recent transactions
- **Transactions** — full CRUD, spending by category donut chart
- **Savings Goals** — progress tracking with emoji, deadline-based goals
- **Budgets** — monthly spending limits per category, over-limit alerts
- **Investments** — portfolio tracker (stocks, crypto, mutual funds, bonds), P&L
- **AI Coach** — chat interface with suggested prompts, message history
- **Learn** — financial education lessons (beginner → advanced), lesson detail view
- **Admin Panel** — platform stats, user management, lesson CMS
- **Settings** — profile, security, notification preferences

## Demo Credentials

- User: `chidi@example.com` / `user123`
- Admin: `admin@wealthbridge.com` / `admin123`

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Admin role must be set via SQL: `UPDATE users SET role = 'admin' WHERE email = '...'`
- Always run codegen after editing the OpenAPI spec: `pnpm --filter @workspace/api-spec run codegen`
- `pnpm run dev` at workspace root doesn't work — use `restart_workflow` instead.
- Verify artifacts with `pnpm --filter @workspace/<slug> run typecheck`, not `build`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
