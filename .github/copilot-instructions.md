## Quick orientation for AI coding agents

This repository is a small Angular 20 standalone-component application. The goal of this file is to provide immediate, actionable context so an AI agent can be productive without extensive manual exploration.

High-level facts
- Angular 20 application (see `package.json` dependencies and `angular.json`).
- Entry: `src/main.ts` bootstraps the root `App` component using `bootstrapApplication(App, appConfig)`.
- Router is provided via `src/app/app.config.ts` and routes are declared in `src/app/app.routes.ts` (currently an empty `Routes` array).
- Public static assets are served from the `public/` folder (configured in `angular.json`).

Key files to read before making changes
- `src/main.ts` — application bootstrap.
- `src/app/app.ts` — root standalone component (uses `signal()` from `@angular/core`).
- `src/app/app.config.ts` — ApplicationConfig providers (error listeners, zone change detection, router provider).
- `src/app/app.routes.ts` — routing table (add routes here).
- `src/app/menu-nav/*` — example standalone component with its `.ts`, `.html`, `.css`, and tests.
- `package.json` — npm scripts: `start` -> `ng serve`, `build` -> `ng build`, `test` -> `ng test`.

Architecture & patterns to preserve
- Standalone components: components are standalone (no NgModule). They declare `imports`, `templateUrl` and (notably) a single `styleUrl` property in the existing decorators — many files use `styleUrl` (singular) instead of the more common `styleUrls` array. When editing components, preserve the existing property naming to avoid accidental churn; if you change it, run the build/tests to confirm it still passes.
- Signals: Angular signals are used (see `signal()` in `src/app/app.ts`). Prefer signals for small local state unless adding a shared service is necessary.
- Router wiring: the router is provided in `appConfig` and consumes `routes` from `app.routes.ts`. Add route entries to that file; the `App` component uses `<app-menu-nav></app-menu-nav>` in `src/app/app.html` so ensure route-linked navigation works with that component.

Developer workflows (commands)
- Start dev server (live reload): `npm start` (executes `ng serve`).
- Build production: `npm run build` (runs `ng build` — output goes to `dist/`).
- Watch incremental builds: `npm run watch`.
- Run unit tests: `npm test` (Karma + Jasmine).

Editing and testing recommendations for AI changes
- Before or after changing component decorators (template/style paths or properties) run `npm start` or `npm run build` to catch template/compile errors.
- If you modify providers in `appConfig`, remember `main.ts` bootstraps with that config — runtime DI/provider changes can affect the whole app.
- When adding routes, update `src/app/app.routes.ts` and verify navigation by running the dev server and loading `http://localhost:4200`.

Project-specific conventions & gotchas
- Files are organized per-component in `src/app/<component>/` with `.ts`, `.html`, `.css`, and `.spec.ts` test files.
- Decorator key `styleUrl` (singular) is used across components. Treat it as an intentional project pattern for now and preserve it when making edits. If you elect to normalize to `styleUrls`, do it in a single, tested PR and run the full build/tests.
- The routes array is intentionally empty; adding features should usually add route entries in `src/app/app.routes.ts`.

Examples
- Add a new route (edit `src/app/app.routes.ts`):

```ts
import { Routes } from '@angular/router';
import { SomeComponent } from './some/some.component';

export const routes: Routes = [
  { path: 'some', component: SomeComponent }
];
```

- App-level provider example (in `src/app/app.config.ts`) — providers array is where global listeners and router are declared. If you add a provider, add it here so `main.ts` picks it up.

Scope of guidance
- Documented patterns are only those visible in the tree. There are no backend integrations or services visible in this snapshot.

What to do if unsure
- Run the build/tests locally: `npm start` and `npm test` are available and fast for this small app.
- If you encounter `styleUrl` vs `styleUrls` issues, do not bulk-rewrite without running the build/tests; flag as a suggested change in the PR description.

Next steps for reviewers
- If any of the decorator naming (e.g., `styleUrl`) is accidental, tell me and I will prepare a safe conversion patch with tests and a small migration note.

If anything above is unclear or you want the file to include stricter rules (linting, commit message format, PR checklist), tell me which and I'll iterate.
