<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


```md
# agents.md

Guidance for any human/LLM agent contributing to this repository.
Goal: **highly maintainable Next.js frontend** using the **App Router** and modern Next.js conventions.

ALWAYS REFERENCE NEXTJS SKILLS FROM ~/.agents/skills

---

## 0) Non-negotiables

- **Next.js App Router only** (`app/` routing). Follow Next.js folder/file conventions.
- **No page-specific components in shared folders.** Page/route-specific components live in that route's `/_components` directory.
- **One component per file.** Never define two exported React components in the same file.
- **Utilities** live in `lib/` or a `shared/utils/` directory, and **each utility function is its own file** (1 file = 1 exported utility).
- **No data fetching in `useEffect`.** Prefer Server Components + React Query (TanStack Query) patterns. React effects are an escape hatch and often unnecessary.
- **React Query is mandatory** for client-side server-state: queries + mutations + caching + invalidation. For App Router + SSR/streaming patterns, follow TanStack Query SSR guidance.
- **Accessibility is not optional.** Use semantic HTML first; use ARIA only when needed and align with WAI-ARIA authoring practices.

---

## 1) Tech stack assumptions

- Next.js 16 (App Router) — no `src/` directory.
- TypeScript everywhere.
- Tailwind CSS v4 (CSS-based config via `globals.css`).
- shadcn/ui (Radix Maia style, olive base color, Remix Icons).
- TanStack Query (React Query v5) for client-side server state.
- ESLint + Prettier + strict TS config.

---

## 2) Project structure

### 2.1 High-level layout

```
app/
  (routes)
components/
  ui/           # shadcn UI primitives
shared/
  ui/           # custom reusable UI components
  hooks/
  lib/
  types/
  utils/
  config/
  constants/
  providers/
lib/            # root-level utilities (cn, etc.)
hooks/          # root-level hooks (if few)
```

### 2.2 Route folder conventions (App Router)

Each route segment folder under `app/**` may contain:
- `page.tsx` (the route)
- `layout.tsx` (if needed)
- `loading.tsx`, `error.tsx`, `not-found.tsx` (when applicable)
- `route.ts` (route handlers / API endpoints)
- `/_components/` for route-specific components
- `/_hooks/` for route-specific hooks (rare; prefer shared hooks when reusable)
- `/_lib/` for route-specific helpers (rare; keep small)

**Example:**
```
app/events/
  page.tsx
  loading.tsx
  _components/
    event-card.tsx
    event-filters.tsx
  _hooks/
    use-event-filters.ts
```

**Important:** Only files that are part of the route should live in the route folder. Anything reusable across routes belongs in `shared/**` or `components/`.

Next.js safe colocation: folders don't become routes unless they contain a `page.tsx` or `route.ts`.

### 2.3 Shared folders

**`shared/ui/`**
- Reusable UI components (custom, not shadcn)
- One component per file
- No route-specific styling or assumptions

**`shared/utils/`**
- Pure functions only
- 1 utility function per file
- Prefer no framework imports (keep utils portable)

**`shared/hooks/`**
- Reusable hooks (non-route-specific)
- Hooks that wrap React Query logic go here if reused across routes

**`shared/types/`**
- Global TS types (domain models, API DTOs, shared component props)

**`shared/lib/`**
- Shared clients and wrappers (e.g., `queryClient`, `fetcher`, `env`, `logger`, `analytics`)

---

## 3) Component rules

### 3.1 File & naming conventions

- Route components: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`
- Components: `kebab-case.tsx` (e.g., `event-card.tsx`)
- Hooks: `use-*.ts` (e.g., `use-events-query.ts`)
- Utilities: `verb-noun.ts` (e.g., `format-currency.ts`)
- Types: `*.ts` (e.g., `event.ts`, `ticket.ts`)
- Keep imports ordered: external → shared → local route

### 3.2 Server vs Client Components

- Default to **Server Components** (no `"use client"`).
- Use `"use client"` only when you need:
  - state, effects, event handlers
  - React Query hooks (`useQuery`, `useMutation`)
  - browser-only APIs

---

## 4) Data fetching rules (React Query + App Router)

### 4.1 No `useEffect` fetching

Do not do:
- `useEffect(() => { fetch(...) }, [])`
- `useEffect(() => setStateFromProps(...))` unless truly synchronizing with an external system

React docs: if you're not syncing with an external system, you likely don't need an Effect.

### 4.2 Preferred patterns

**Pattern A — Server Component fetch (for read-only pages)**
- Fetch in Server Component using Next.js data access patterns.
- Pass results down to Server Components (or as initial props).
- Use when you don't need client caching or mutations.

**Pattern B — React Query in Client Components (for interactive pages)**
- Queries in client components via `useQuery`.
- Mutations via `useMutation`.
- Always use proper query keys and invalidation.

**Pattern C — SSR/Prefetch + Hydrate React Query (best UX for client-heavy pages)**
- Prefetch on the server and hydrate in the client.
- Follow TanStack Query's App Router SSR/streaming guidance.

### 4.3 Query key rules

- Query keys must be **stable arrays**.
- Must include all params that affect the result.

Examples:
- `['events', { categoryId, timeFilter }]`
- `['event', eventId]`

### 4.4 Mutations rules

- Mutations must:
  - return typed results
  - invalidate or optimistically update relevant queries
  - surface errors in UI accessibly (see a11y)

---

## 5) API layer conventions

### 5.1 One fetcher abstraction

In `shared/lib/` define a small `fetchJson` wrapper:
- Handles base URL, headers, auth (if needed)
- Throws typed errors (or normalized error object)

All queries/mutations should use this fetcher instead of ad-hoc `fetch()` scattered everywhere.

### 5.2 Route handlers and Server Actions

- Prefer **Route Handlers** (`route.ts`) for API endpoints when needed.
- Prefer **Server Actions** for form submissions where appropriate.
- Keep them thin: validate input → call domain logic → return result.

(If both are present, avoid duplicating logic—extract shared logic to `shared/lib/`.)

---

## 6) Accessibility (A11y) standards

Follow semantic HTML first; use ARIA patterns when building custom widgets.

### 6.1 Minimum checklist

- Use correct landmarks: `header`, `nav`, `main`, `footer`
- Every input has an associated `<label>`
- Buttons are `<button>` (not clickable divs)
- Keyboard navigation works (Tab/Shift+Tab, Enter/Space)
- Focus states are visible
- Dialogs/menus follow ARIA authoring practices (focus trap, aria attributes, escape to close)
- Error messages are announced (e.g., `aria-live="polite"` for async errors)
- Images have meaningful `alt` text or empty alt (`alt=""`) if decorative

---

## 7) Code quality rules

- Keep components small and single-purpose.
- Prefer composition over configuration-heavy components.
- Avoid prop drilling when it becomes painful; use context sparingly.
- No `any` in production code (use generics / unknown + parsing).
- Add JSDoc only when it clarifies non-obvious intent.

---

## 8) When you add a new feature

1. Add/adjust route(s) under `app/<feature>/`
2. Create page-specific components under `app/<feature>/_components/`
3. If logic is reusable, move it to `shared/hooks` or `shared/lib`
4. Add utilities (1 function per file) under `shared/utils/`
5. Wire data via React Query (no `useEffect` fetching)
6. Confirm keyboard navigation + basic screen reader semantics

---

## 9) PR/Review checklist

- [ ] Folder structure follows this guide
- [ ] One component per file
- [ ] No `useEffect` data fetching
- [ ] React Query used correctly (query keys, invalidation)
- [ ] A11y checks passed (labels, semantics, keyboard, focus)
- [ ] Types are strict and meaningful
- [ ] No duplicated logic across routes

---

## 10) Quick examples (canonical)

### Route + components
- `app/events/page.tsx`
- `app/events/_components/event-card.tsx`
- `app/events/_components/event-list.tsx`

### Shared UI + utils
- `components/ui/button.tsx`
- `shared/ui/topbar.tsx`
- `shared/utils/format-currency.ts`
- `lib/utils.ts` (cn helper)

---

## 11) References (for agents)

- React: "You Might Not Need an Effect"
- React: `useEffect` caveats
- Next.js: Project structure and conventions
- Next.js: Safe colocation in `app/`
- TanStack Query: Advanced SSR with Next.js App Router
- WAI: ARIA Authoring Practices Guide
- MDN: WAI-ARIA basics
```
