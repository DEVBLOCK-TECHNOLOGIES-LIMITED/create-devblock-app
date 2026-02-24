# @devblocktechnologies/create-devblock-app

> Official project scaffolding CLI by [DevBlock Technologies](https://devblock.io)

Spin up a high-performance, TypeScript-first ecosystem in seconds. This CLI provides standardized boilerplate for Web, Mobile, and API projects, mirroring the professional architecture used at DevBlock.

## 🚀 Quick Start

Run the CLI without installation:

```bash
npx @devblocktechnologies/create-devblock-app [project-name]
```

### Options

| Flag       | Description                             |
| :--------- | :-------------------------------------- |
| `--mobile` | Scaffold an Expo (React Native) project |
| `--web`    | Scaffold a Next.js (App Router) project |
| `--api`    | Scaffold a modular Express server       |

---

## 🏗️ Ecosystem Overview

### 📱 Mobile (`--mobile`)

A premium foundation for cross-platform apps.

- **Core**: React Native & Expo (TypeScript)
- **Styling**: NativeWind (Tailwind for Mobile)
- **Navigation**: Expo Router (File-based routing)
- **UI**: Lucide Icons & Reusable Boilerplate (Buttons, Cards)
- **State**: Sample AuthContext included

### 🌐 Web (`--web`)

A robust, SEO-optimized foundation for modern web apps.

- **Core**: Next.js 15+ App Router (TypeScript)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **UI**: Premium Layout system & Modular Components
- **Icons**: Lucide React

### ⚙️ API (`--api`)

A modular, scalable backend foundation.

- **Core**: Node.js & Express (TypeScript)
- **Validation**: Zod
- **Security**: JWT Utilities, Helmet, & CORS
- **Middleware**: Global Error Handling & Request Logging
- **Structure**: Controller-Service-Route architecture

---

## 📂 Standardized Structure

All templates follow the **DevBlock Standard** directory tree:

```text
src/
├── api/          # API clients or service integrations
├── components/   # Atomic & Modular UI components
├── context/      # React Context state management
├── hooks/        # Custom reusable logic
├── routes/       # API route definitions (Back-end)
├── services/     # Business logic & Database interactions (Back-end)
├── utils/        # Helper functions & Constants
└── theme/        # Design tokens & Global styles
```

---

## 🛠️ Performance & Best Practices

- **TypeScript-First**: All templates are strictly typed for developer productivity.
- **Modern Styling**: Tailwind-based workflow across both Web and Mobile.
- **Modular Design**: Components and services are decoupled for easy testing and scaling.
- **Ready to Ship**: Pre-configured with ESLint, linting, and basic security defaults.

---

## 💻 System Requirements

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

## 📄 License

MIT © [DevBlock Technologies](https://devblock.io)
