#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import prompts from "prompts";
import ora from "ora";
import fs from "fs-extra";
import path from "path";
import { execa } from "execa";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DEVBLOCK_BANNER = `
${chalk.cyan("██████╗ ███████╗██╗   ██╗██████╗ ██╗      ██████╗  ██████╗██╗  ██╗")}
${chalk.cyan("██╔══██╗██╔════╝██║   ██║██╔══██╗██║     ██╔═══██╗██╔════╝██║ ██╔╝")}
${chalk.cyan("██║  ██║█████╗  ██║   ██║██████╔╝██║     ██║   ██║██║     █████╔╝ ")}
${chalk.cyan("██║  ██║██╔══╝  ╚██╗ ██╔╝██╔══██╗██║     ██║   ██║██║     ██╔═██╗ ")}
${chalk.cyan("██████╔╝███████╗ ╚████╔╝ ██████╔╝███████╗╚██████╔╝╚██████╗██║  ██╗")}
${chalk.cyan("╚═════╝ ╚══════╝  ╚═══╝  ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝")}
${chalk.gray("  CLI — Built with purpose. Delivered with precision.\n")}
`;

program
  .name("create-devblock-app")
  .description("Official DevBlock Technologies project scaffolding CLI")
  .version("1.1.1")
  .argument("[project-name]", "Name of the project to create")
  .option("--mobile", "Scaffold a React Native (Expo) mobile project")
  .option("--web", "Scaffold a Next.js web project")
  .option("--api", "Scaffold a Node.js API project")
  .option("--ai", "Add AI-assisted design and progress tracking files")
  .option("--git", "Initialize a Git repository and create initial commit")
  .option("--monorepo", "Scaffold a Turborepo monorepo")
  .action(async (projectNameArg, options) => {
    console.log(DEVBLOCK_BANNER);

    // Determine project type
    let projectType = null;
    if (options.mobile) projectType = "mobile";
    else if (options.web) projectType = "web";
    else if (options.api) projectType = "api";
    else if (options.monorepo) projectType = "monorepo";

    // If no flag provided, prompt for type
    if (!projectType) {
      const typeResponse = await prompts({
        type: "select",
        name: "type",
        message: "What type of project would you like to scaffold?",
        choices: [
          { title: "📱 Mobile  (React Native + Expo)", value: "mobile" },
          { title: "🌐 Web     (Next.js)", value: "web" },
          { title: "⚙️  API     (Node.js + Express)", value: "api" },
          { title: "🏗️  Monorepo (Turborepo)", value: "monorepo" },
        ],
      });
      if (!typeResponse.type) process.exit(0);
      projectType = typeResponse.type;
    }

    // Get project name
    let projectName = projectNameArg;
    if (!projectName) {
      const nameResponse = await prompts({
        type: "text",
        name: "name",
        message: "What is your project name?",
        initial: "my-devblock-app",
        validate: (val) =>
          /^[a-z0-9-_]+$/i.test(val)
            ? true
            : "Use only letters, numbers, hyphens, or underscores.",
      });
      if (!nameResponse.name) process.exit(0);
      projectName = nameResponse.name;
    }

    const targetDir = path.resolve(process.cwd(), projectName);

    // Check if directory exists
    if (fs.existsSync(targetDir)) {
      const { overwrite } = await prompts({
        type: "confirm",
        name: "overwrite",
        message: `Directory "${projectName}" already exists. Overwrite?`,
        initial: false,
      });
      if (!overwrite) process.exit(0);
      await fs.remove(targetDir);
    }

    console.log();

    // Scaffold based on type
    if (options.monorepo) {
      await scaffoldMonorepo(projectName, targetDir);
    } else {
      if (projectType === "mobile") {
        await scaffoldMobile(projectName, targetDir);
      } else if (projectType === "web") {
        await scaffoldWeb(projectName, targetDir);
      } else if (projectType === "api") {
        await scaffoldApi(projectName, targetDir);
      }
    }

    // AI Files
    if (options.ai) {
      await scaffoldAiFiles(projectName, targetDir);
    }

    // Brand Color Customization
    await handleBrandColor(targetDir);

    // Environment Variables
    await handleEnvVars(targetDir);

    // Git Initialization
    if (options.git) {
      await initializeGit(targetDir);
    }

    // Done — Final Next Steps
    console.log(`
${chalk.green("✔")} ${chalk.bold("Your DevBlock project is ready!")}
${chalk.gray("Follow the next steps above to get started.")}
`);
  });

async function handleBrandColor(targetDir) {
  const { color } = await prompts({
    type: "text",
    name: "color",
    message: "Enter your primary brand color (Hex)?",
    initial: "#2563eb",
    validate: (val) =>
      /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(val)
        ? true
        : "Please enter a valid Hex color code.",
  });

  if (color && color !== "#2563eb") {
    const spinner = ora("Customizing brand colors...").start();
    try {
      await replacePlaceholders(targetDir, "#2563eb", color); // Replace default blue
      spinner.succeed(`Brand color updated to ${chalk.hex(color)(color)}!`);
    } catch {
      spinner.fail("Failed to update brand color.");
    }
  }
}

async function handleEnvVars(targetDir) {
  const envExamplePath = path.join(targetDir, ".env.example");
  if (!fs.existsSync(envExamplePath)) return;

  const { setupEnv } = await prompts({
    type: "confirm",
    name: "setupEnv",
    message: "Would you like to set up your environment variables (.env) now?",
    initial: true,
  });

  if (setupEnv) {
    const content = await fs.readFile(envExamplePath, "utf8");
    const lines = content.split("\n");
    const envValues = {};

    for (const line of lines) {
      if (line.includes("=") && !line.startsWith("#")) {
        const [key, defaultValue] = line.split("=");
        const { value } = await prompts({
          type: "text",
          name: "value",
          message: `Value for ${chalk.cyan(key)}?`,
          initial: defaultValue || "",
        });
        envValues[key] = value || defaultValue || "";
      }
    }

    const envContent = Object.entries(envValues)
      .map(([k, v]) => `${k}=${v}`)
      .join("\n");
    await fs.writeFile(path.join(targetDir, ".env"), envContent);
    console.log(`${chalk.green("✔")} .env file created!`);
  }
}

async function initializeGit(targetDir) {
  const spinner = ora("Initializing Git repository...").start();
  try {
    await execa("git", ["init"], { cwd: targetDir });
    await execa("git", ["add", "."], { cwd: targetDir });
    await execa(
      "git",
      ["commit", "-m", "feat: initial scaffold from devblock"],
      {
        cwd: targetDir,
      },
    );
    spinner.succeed("Git repository initialized with initial commit!");
  } catch (err) {
    spinner.fail("Git initialization failed.");
    console.error(chalk.red(err.message));
  }
}

async function scaffoldMonorepo(projectName, targetDir) {
  const spinner = ora(
    `Scaffolding ${chalk.cyan(projectName)} monorepo (Turborepo)...`,
  ).start();

  try {
    const templateDir = path.join(__dirname, "../templates/monorepo");
    if (!fs.existsSync(templateDir)) {
      // If template doesn't exist yet, we'll create it soon
      throw new Error(`Monorepo template directory not found: ${templateDir}`);
    }
    await fs.copy(templateDir, targetDir, { overwrite: true });
    await replacePlaceholders(targetDir, "{{PROJECT_NAME}}", projectName);
    spinner.succeed(`Monorepo ${chalk.cyan(projectName)} created!`);
  } catch (err) {
    spinner.fail("Monorepo scaffold failed.");
    console.error(chalk.red(err.message));
    process.exit(1);
  }

  await installDependencies(targetDir);
}

async function scaffoldAiFiles(projectName, targetDir) {
  const spinner = ora(
    `Adding AI design and progress tracking files...`,
  ).start();

  try {
    const aiTemplateDir = path.join(__dirname, "../templates/ai");
    if (!fs.existsSync(aiTemplateDir)) {
      throw new Error(`AI template directory not found: ${aiTemplateDir}`);
    }

    const aiTargetDir = path.join(targetDir, "ai");
    await fs.ensureDir(aiTargetDir);

    // Copy design.md and progress.md into the ai/ folder
    await fs.copy(aiTemplateDir, aiTargetDir, { overwrite: true });

    // Replace project name placeholder in the added files
    await replacePlaceholders(aiTargetDir, "{{PROJECT_NAME}}", projectName);

    spinner.succeed("AI files added to /ai successfully!");
  } catch (err) {
    spinner.fail("Failed to add AI files.");
    console.error(chalk.red(err.message));
  }
}

async function scaffoldMobile(projectName, targetDir) {
  const spinner = ora(
    `Scaffolding ${chalk.cyan(projectName)} mobile project...`,
  ).start();

  try {
    // Copy template files
    const templateDir = path.join(__dirname, "../templates/mobile");
    if (!fs.existsSync(templateDir)) {
      throw new Error(`Template directory not found: ${templateDir}`);
    }
    await fs.copy(templateDir, targetDir, { overwrite: true });

    // Replace project name placeholder in files
    await replacePlaceholders(targetDir, "{{PROJECT_NAME}}", projectName);

    spinner.succeed(`Project ${chalk.cyan(projectName)} created!`);
  } catch (err) {
    spinner.fail("Scaffold failed.");
    console.error(chalk.red(err.message));
    process.exit(1);
  }

  await installDependencies(targetDir);

  // Done — print next steps
  console.log(`
${chalk.green("✔")} ${chalk.bold("Your DevBlock mobile project is ready!")}

${chalk.gray("Next steps:")}
  ${chalk.cyan(`cd ${projectName}`)}
  ${chalk.cyan("npx expo start")}

${chalk.gray("Stack:")}
  React Native · Expo · NativeWind · Expo Router · Lucide Icons

${chalk.gray("Docs & support → ")}${chalk.underline("https://devblock.io/docs")}
`);
}

async function scaffoldWeb(projectName, targetDir) {
  const spinner = ora(
    `Scaffolding ${chalk.cyan(projectName)} web project...`,
  ).start();

  try {
    // Copy template files
    const templateDir = path.join(__dirname, "../templates/web");
    if (!fs.existsSync(templateDir)) {
      throw new Error(`Template directory not found: ${templateDir}`);
    }
    await fs.copy(templateDir, targetDir, { overwrite: true });

    // Replace project name placeholder in files
    await replacePlaceholders(targetDir, "{{PROJECT_NAME}}", projectName);

    spinner.succeed(`Project ${chalk.cyan(projectName)} created!`);
  } catch (err) {
    spinner.fail("Scaffold failed.");
    console.error(chalk.red(err.message));
    process.exit(1);
  }

  await installDependencies(targetDir);

  // Done — print next steps
  console.log(`
${chalk.green("✔")} ${chalk.bold("Your DevBlock web project is ready!")}

${chalk.gray("Next steps:")}
  ${chalk.cyan(`cd ${projectName}`)}
  ${chalk.cyan("npm run dev")}

${chalk.gray("Stack:")}
  Next.js · Tailwind CSS · Lucide Icons · Framer Motion

${chalk.gray("Docs & support → ")}${chalk.underline("https://devblock.io/docs")}
`);
}

async function scaffoldApi(projectName, targetDir) {
  const spinner = ora(
    `Scaffolding ${chalk.cyan(projectName)} API project...`,
  ).start();

  try {
    // Copy template files
    const templateDir = path.join(__dirname, "../templates/api");
    if (!fs.existsSync(templateDir)) {
      throw new Error(`Template directory not found: ${templateDir}`);
    }
    await fs.copy(templateDir, targetDir, { overwrite: true });

    // Replace project name placeholder in files
    await replacePlaceholders(targetDir, "{{PROJECT_NAME}}", projectName);

    spinner.succeed(`Project ${chalk.cyan(projectName)} created!`);
  } catch (err) {
    spinner.fail("Scaffold failed.");
    console.error(chalk.red(err.message));
    process.exit(1);
  }

  await installDependencies(targetDir);

  // Done — print next steps
  console.log(`
${chalk.green("✔")} ${chalk.bold("Your DevBlock API project is ready!")}

Next steps:
  ${chalk.cyan(`cd ${projectName}`)}
  ${chalk.cyan("npm run dev")}

Stack:
  Node.js · Express · TypeScript · Zod · JWT

Docs & support → ${chalk.underline("https://devblock.io/docs")}
`);
}

async function installDependencies(targetDir) {
  const { install } = await prompts({
    type: "confirm",
    name: "install",
    message: "Install dependencies now?",
    initial: true,
  });

  if (install) {
    const installSpinner = ora("Installing dependencies...").start();
    try {
      await execa("npm", ["install"], { cwd: targetDir });
      installSpinner.succeed("Dependencies installed!");
    } catch {
      installSpinner.fail(
        "Dependency install failed. Run `npm install` manually.",
      );
    }
  }
}

async function replacePlaceholders(dir, placeholder, value) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      if (file.name === "node_modules" || file.name === ".git") continue;
      await replacePlaceholders(fullPath, placeholder, value);
    } else {
      const ext = path.extname(file.name);
      const textExts = [
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
        ".json",
        ".md",
        ".env",
        ".css",
        ".html",
      ];
      if (textExts.includes(ext)) {
        const content = await fs.readFile(fullPath, "utf8");
        if (content.includes(placeholder)) {
          await fs.writeFile(fullPath, content.replaceAll(placeholder, value));
        }
      }
    }
  }
}

program.parse();
