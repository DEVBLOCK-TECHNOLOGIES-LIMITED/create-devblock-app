# {{PROJECT_NAME}} Monorepo

Welcome to your DevBlock-standard monorepo! This project is powered by **Turborepo** and uses a scalable structure for modern web and API development.

## 📂 Structure

- **`apps/web`**: Next.js web application.
- **`apps/api`**: Node.js & Express API service.
- **`packages/types`**: Shared Zod schemas and TypeScript types.
- **`ai/`**: AI-assisted design and progress tracking.

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run development mode**:

   ```bash
   npm run dev
   ```

3. **Build all packages**:
   ```bash
   npm run build
   ```

## 🛠️ DevOps

- **Linting**: `npm run lint` (Turbo-charged)
- **CI/CD**: GitHub Actions configured in `.github/workflows/main.yml`
- **Git Hooks**: Husky and Lint-staged configured for automated quality checks.
