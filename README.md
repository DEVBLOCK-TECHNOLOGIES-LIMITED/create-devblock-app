# @devblocktechnologies/create-devblock-app

> Official project scaffolding CLI by [DevBlock Technologies](https://devblock.io)

Spin up a high-performance, TypeScript-first ecosystem in seconds. This CLI provides standardized boilerplate for Web, Mobile, and API projects, mirroring the professional architecture used at DevBlock.

---

## 💻 Installation

You can run the CLI without local installation using `npx`:

```bash
npx @devblocktechnologies/create-devblock-app [project-name]
```

Or install it globally to use it anywhere:

```bash
npm install -g @devblocktechnologies/create-devblock-app
create-devblock-app [project-name]
```

---

## 🚀 Quick Start

Launch the interactive prompt by running:

```bash
npx @devblocktechnologies/create-devblock-app
```

### Direct Scaffolding

| Command      | Description                                            |
| :----------- | :----------------------------------------------------- |
| `--mobile`   | Create a React Native + Expo project                   |
| `--web`      | Create a Next.js web project                           |
| `--api`      | Create a Node.js API project                           |
| `--monorepo` | Create a Turborepo monorepo (Web + API + Shared Types) |
| `--ai`       | Add AI-assisted design and progress tracking files     |
| `--git`      | Automatically initialize Git and create initial commit |
| `--help`     | Show all available options                             |

---

## 🔥 Pro Features

### 📦 DevBlock Monorepo (`--monorepo`)

Scaffold an enterprise-grade **Turborepo** monorepo in seconds.

- **Shared Types**: A dedicated `packages/types` folder using Zod for cross-package type safety.
- **Integrated Apps**: Pre-configured `apps/web` and `apps/api` that reference shared types.
- **Optimized Pipeline**: Turbo-charged builds and linting.

### 🎨 Brand Customization

During scaffolding, the CLI will ask for your **Primary Brand Color (Hex)**. It will then automatically:

- Update Tailwind/CSS theme variables.
- Configure brand-specific styling tokens across the project.

### 🔐 Environment Variable Manager

The CLI automatically detects `.env.example` files and guides you through setting up your local `.env`. No more manual copying and pasting.

### 🛡️ DevOps Core

Every project comes ready for professional development:

- **CI/CD**: Pre-configured GitHub Actions for automated testing and builds.
- **Git Hooks**: Integrated **Husky** and **Lint-staged** to ensure zero-defect commits.
- **Git Automation**: Use the `--git` flag to handle the initial repository setup automatically.

---

## 🏗️ Ecosystem Overview

### 📱 Mobile (`--mobile`)

A premium foundation for cross-platform apps built with **React Native & Expo**.

- **Stack**: TypeScript, NativeWind (Tailwind), Expo Router, Lucide Icons.
- **Workflow**: `cd [project-name] && npx expo start`

### 🌐 Web (`--web`)

A robust foundation for modern web apps built with **Next.js**.

- **Stack**: TypeScript, Next.js 15+ App Router, Tailwind CSS v4, Framer Motion, Lucide React.
- **Workflow**: `cd [project-name] && npm run dev`

### ⚙️ API (`--api`)

A modular, scalable backend foundation built with **Node.js & Express**.

- **Stack**: TypeScript, Express, Zod (Validation), JWT (Auth), Helmet & CORS (Security).
- **Workflow**: `cd [project-name] && npm run dev`

---

## 🤖 AI-Assisted Development (`--ai`)

Enhance your project with AI-optimized documents designed for seamless collaboration with Large Language Models (LLMs). This feature generates a dedicated `ai/` folder in your project root.

### 📂 The `ai/` Folder

- **`design.md`**: Your architectural source of truth. Use this to define your system's "North Star," including logic patterns, data models, and UI/UX requirements.
- **`progress.md`**: An automated and manual tracking document. Keeps both you and your AI agent aligned on what's done, what's in progress, and what's next.

### 💡 Recommendations for AI Collaboration

To maximize the value of these documents, we recommend the following professional workflow:

#### 🧠 Context-First Coding

When using AI-powered editors like **Cursor**, **Windsurf**, or **VS Code Copilot**, ensure `ai/design.md` is always indexed or attached to your chat context. This provides the LLM with the "Deep Context" it needs to generate code that aligns with your architectural soul, rather than just generic snippets.

#### 🔄 The "Design-First" Loop

Treat `ai/design.md` as your project's source of truth. Before writing a single line of feature code:

1.  **Define**: Update the design doc with the new feature's logic, state requirements, and UI expectations.
2.  **Prompt**: Use a targeted prompt:
    > _"Referencing `ai/design.md`, implement the new Authentication service. Ensure it follows the established error handling patterns defined in the Data Modeling section."_

#### 📈 Active Progress Alignment

Maintain alignment by updating `ai/progress.md` at the end of every development sprint or session. This prevents "context drift" where the AI forgets the project's current state and begins suggesting redundant or conflicting implementations.

---

### 🚀 Pro-Tips

- **Explicit Referencing**: Use the `@` symbol or direct file paths in your AI prompts (e.g., _"Check @design.md for the component hierarchy"_).
- **The Agentic Hand-off**: If you are using an agentic AI, start your session by saying: _"Read `ai/progress.md` to see what we've done and what's next, then update it once we finish this task."_
- **Architectural Guardrails**: Use `design.md` to set "Rules of Engagement" for the AI (e.g., _"Always use functional components," "No external state managers unless specified"_).
- **Living Documentation**: A stale design doc is an AI's worst enemy. Spend 2 minutes updating it after a major refactor—it will save you 2 hours of AI debugging later.

---

## 📂 Standardized Structure

All templates follow the **DevBlock Standard** directory tree for consistency across projects:

```text
src/
├── api/          # API clients or service integrations
├── components/   # Atomic & Modular UI components
├── context/      # React Context state management (Web/Mobile)
├── hooks/        # Custom reusable logic
├── routes/       # API route definitions (Back-end)
├── services/     # Business logic & Database interactions (Back-end)
├── utils/        # Helper functions & Constants
└── theme/        # Design tokens & Global styles
```

---

## 🛠️ Development & Contributions

To work on this CLI locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/DEVBLOCK-TECHNOLOGIES-LIMITED/create-devblock-app.git
   cd create-devblock-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Link for local testing**:
   ```bash
   npm link
   ```
   Now you can run `create-devblock-app` directly in any directory to test your changes.

---

## 💻 System Requirements

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

## 📄 License

MIT © [DevBlock Technologies](https://devblock.io)
