# react-router

Live demo: https://veetihietasalo.github.io/react-router/

A React Router 6 exercise: a nav bar and three pages (Home, About, Contact), set up with `createBrowserRouter` and nested routes rendered through `<Outlet>`. The pages hold placeholder text only.

Stack: React 18, React Router 6, Vite 4.

Run:

```bash
npm install
npm run dev
```

The app runs under `/react-router/` (http://localhost:5173/react-router/ in dev), the same path as on GitHub Pages.

GitHub Pages:
- Vite `base` is `/react-router/` and the router `basename` comes from `import.meta.env.BASE_URL`.
- `npm run build` also writes `dist/404.html`, a copy of `index.html`. Pages serves it for any unknown path, so a reload on `/about` or `/contact` still loads the app. That reload comes back with HTTP status 404, but the page renders.
- The demo is `dist/` pushed to the `gh-pages` branch.

Status: course exercise, October 2023 (one commit, 11 Oct 2023).
