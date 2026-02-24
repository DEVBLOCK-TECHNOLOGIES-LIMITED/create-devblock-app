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

| Command                                                         | Description             |
| :-------------------------------------------------------------- | :---------------------- |
| `npx @devblocktechnologies/create-devblock-app my-app --mobile` | Create a Mobile project |
| `npx @devblocktechnologies/create-devblock-app my-app --web`    | Create a Web project    |
| `npx @devblocktechnologies/create-devblock-app my-app --api`    | Create an API project   |

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
