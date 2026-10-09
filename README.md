# Continuous Integration with GitHub Actions

A small Express app used to build a CI pipeline with GitHub Actions: lint and tests run automatically on every push.

## The app

| File | Role |
|---|---|
| `src/app.js` | Express app (`/` and `/health`), exported so it can be tested without opening a port |
| `src/server.js` | Starts the app on `PORT` (default `3000`) |
| `test/app.test.js` | Tests with the built-in `node:test` runner and `supertest` |
| `eslint.config.js` | ESLint flat config (recommended rules, Node globals) |

Run locally:

```bash
npm ci
npm run lint   # ESLint
npm test       # node --test
npm start      # http://localhost:3000
```

## Pipeline

Workflow file: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

### 0 - First workflow

- **Trigger**: every `push`.
- **Job `lint`** on an `ubuntu-latest` runner:
  1. `actions/checkout` fetches the code.
  2. `actions/setup-node` installs Node.js 20.
  3. `npm ci` installs the exact dependencies from `package-lock.json`.
  4. `npm run lint` runs ESLint. Any lint error fails the job.

Successful run: [CI run #37921455495](https://github.com/Yugz29/holbertonschool-continuous_integration/actions/runs/37921455495)
