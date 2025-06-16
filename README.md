# 🕹️ Tiny Tactics

Tiny Tactics is a strategic 3x3 web-based board game inspired by classic tic-tac-toe. Built with modern JavaScript, HTML, and CSS, it offers both competitive and casual gameplay through two main modes: play against a friend or challenge a smart computer opponent.

![image](https://github.com/user-attachments/assets/e4b11811-0f60-4aee-a330-8cb7b3f6bbae)

## ✨ Features
- **2 Game Modes**  
  - Player vs Player (local two-player)
  - Player vs Computer (basic AI)

- **Automatic Scoring System**  
  Both players' scores are tracked throughout the session and can be reset at any time.

- **Winning Highlights & Animation**  
  Winning cells are highlighted and animated for clear visual feedback.

- **Dark/Light Theme**  
  Users can toggle between dark and light mode as preferred.

- **Interactive Sound Effects**  
  Audio feedback for key actions (win, lose, draw).

- **Dynamic Background**  
  Engaging, interactive visual background for an immersive experience.

- **Restart & Reset Score Buttons**  
  Easily restart the game or reset scores at any time.

## 🛠️ Tools

This DevOps project adopts a suite of modern tools to automate and streamline development, testing, deployment, and monitoring:

- **Code Editor: Visual Studio Code (VS Code)**  
  Utilized as the primary editor for its flexibility, rich extension ecosystem, and features that support JavaScript development and Git integration. VS Code accelerates development and boosts productivity.

- **Version Control: GitHub**  
  Functions as the central hub for source code management. It allows for organized storage, detailed change tracking, code reviews via pull requests, and safe rollbacks to previous versions when needed.

- **CI/CD Automation: GitHub Actions**  
  Powers the Continuous Integration/Continuous Deployment (CI/CD) pipeline. The workflow is triggered automatically on every push or pull request to the main and specific feature branches (`Feat--**`, `fitur--**`, `Security`, `logo`, `sounds`). The deployment (CD) pipeline runs after successful CI on the main branch.

- **Code Quality & Security: ESLint**  
  Ensures JavaScript code quality and security through static analysis. ESLint checks for errors, enforces style rules, and catches potential bugs. It's tightly integrated with the CI pipeline—builds fail if violations are found. Custom rules are defined in `eslint.config.mjs`, including `js/recommended` and `eslint-plugin-security` presets.

- **Unit Testing: Jest**  
  Provides fast and robust unit testing for JavaScript. Jest supports mocking, snapshot tests, and code coverage. Tests cover game logic (winning, draw detection), AI (move selection), and UI (cell placement, switching players, score updates). Jest runs automatically in CI after linting passes.

- **Dependency Security Scan: npm audit**  
  Secures project dependencies by scanning for vulnerabilities with `npm audit --audit-level high`. Integrated into CI; the pipeline continues even if vulnerabilities are found (via `continue-on-error: true`) for flexible remediation.

- **Deployment Platform: Vercel**  
  Hosts the front-end application, streamlining deployments for JavaScript projects. Integrated with GitHub Actions, it enables automatic deployments whenever CI passes on the main branch. The live app is available at [`https://fp-pso-umber.vercel.app/`](https://fp-pso-umber.vercel.app/).

- **Monitoring & Analytics: Vercel Analytics & Speed Insights**  
  Embedded in the project for real-time performance and usage tracking. Scripts for Vercel Analytics (`/_vercel/insights/script.js`) and Speed Insights (`/_vercel/speed-insights/script.js`) are included in `index.html`. These tools provide valuable metrics for ongoing optimization and user experience improvements.

## 🧩 Project Structure

```
fp-pso/
├── index.html             # Main entry point
├── src/
│   ├── js/
│   │   └── script.js      # Main game logic
│   ├── css/
│   │   └── style.css      # Main styling
│   └── images/            # Logos and images
├── __tests__/
│   └── game.test.js       # Game logic unit tests
├── .github/workflows/
│   ├── ci.yml             # CI pipeline (lint, test, audit)
│   └── cd.yml             # CD pipeline (deploy to Vercel)
├── package.json           # npm configuration & dependencies
├── eslint.config.mjs      # ESLint configuration
├── babel.config.js        # Babel configuration
├── jest.config.js         # Jest configuration
```

## 🚀 How to Run

Follow these steps to set up and run the Tiny Tactics game on your local machine or deploy it to production.

---

### System Requirements

- **Node.js** (version 18 or higher) – JavaScript runtime
- **npm** (Node Package Manager) – for installing dependencies (usually comes with Node.js)
- **Git** – for cloning the repository
- **Web Browser** – Chrome, Firefox, Edge, etc.
- **Visual Studio Code (VS Code)** (optional, recommended)
- **VS Code Live Server Extension** (optional, recommended for local development)

---

### Installation Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/maulinanl/fp-pso.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd fp-pso
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
   This will install all required dependencies, including:
   - `eslint`, `@eslint/js`, `eslint-plugin-security`, `globals`
   - `@babel/core`, `babel-jest`, `jest`, `jest-environment-jsdom`, `@babel/preset-env`

---

### Running the Application

#### Locally

1. Open the project in Visual Studio Code.
2. Open the `index.html` file.
3. Install the "Live Server" extension by Ritwick Dey from the VS Code Extensions Marketplace (if not yet installed).
4. Click the "Go Live" button in the VS Code status bar, or right-click `index.html` and select "Open with Live Server".
5. The application will run on your `localhost`.

#### Publicly

A live version is available at:  
[https://fp-pso-umber.vercel.app/](https://fp-pso-umber.vercel.app/)

---

## 🚀 CI/CD Pipeline Setup

The project uses GitHub Actions for Continuous Integration and Deployment.

### 1. GitHub Repository Setup

- **Understand Existing Code:** Review the codebase to understand structure and functionality.
- **Clone & Create New Repository:** Fork or clone, then create a new repository for development and pipeline enhancements.
- **Initial Push:** Make necessary changes and push to the new repository.
- **Phased Development:** Add features and CI/CD pipeline gradually.
- **Code Push Workflow:**
  - Push directly to `main` if the code is stable.
  - For features/experiments, use separate branches and create Pull Requests (PRs) for review before merging to `main`.

---

### 2. Local Development Environment Setup

- **Install Node.js** and set up your environment.
- **Initialize Node.js Project:**
  ```sh
  npm init -y
  ```
- **Install development dependencies:**
  ```sh
  npm install eslint @eslint/js eslint-plugin-security globals @babel/core babel-jest jest jest-environment-jsdom @babel/preset-env --save-dev
  ```
- **Configure ESLint:** Edit `eslint.config.mjs`.
- **Configure Babel:** Edit `babel.config.js`.
- **Configure Jest:** Configure in `package.json` and `jest.config.js`.
- **Write Unit Tests:** Place tests in `__tests__/game.test.js`.
- **Write Game Logic:** Implement features in `script.js`.
- **Run the app:** Use VS Code Live Server to view changes live.
- **Run Tests:**  
  ```sh
  npm test
  ```
- **Run Lint & Security Checks:**  
  ```sh
  npm run lint
  ```

---

### 3. GitHub Actions Workflow

- **Create Workflow Folder:** `.github/workflows/`
- **Add Workflow Files:**  
  - `ci.yml` for Continuous Integration
  - `cd.yml` for Continuous Deployment

#### CI Pipeline (ci.yml)

- **Triggers:**
  - On push to: `main`, `Feat--**`, `fitur--**`, `Security`, `logo`, `sounds`
  - On pull request to: same branches as above
- **Jobs:**
  1. **Lint:** Run ESLint and security audits. Pipeline continues even if vulnerabilities are found for flexibility.
  2. **Test:** Runs only if lint passes. Executes Jest unit tests (game logic, AI, UI, state management).

#### CD Pipeline (cd.yml)

- **Triggers:**
  - On push to `main`
  - On successful completion of CI on `main`
- **Job:**  
  - Deploys to Vercel, using environment variables and secrets for secure authentication.

---

### 4. Vercel Deployment Setup

1. **Go to:** [https://vercel.com/](https://vercel.com/)
2. **Sign Up/Login:** Create or login to your Vercel account.
3. **Import Git Repository:** Use "Continue with GitHub" and select the `fp-pso` repository.
4. **Configure New Project:** Name your project and accept defaults.
5. **Deploy:** Click "Deploy."
6. **Dashboard:** After deploy, click "Continue to Dashboard."
7. **Copy Project ID:** Find and save it from the "Settings" tab.
8. **Copy User ID:** From "Account Settings."
9. **Create API Token:** In "Tokens," name and create a new token, then save it. This will be used as `secrets.VERCEL_TOKEN` in your GitHub Actions workflows.

---

When all steps are complete, every successful push to `main` will automatically update your live application on Vercel!

## 💡 Additional Notes

- All pipeline, configuration, and best-practices are included in this repository.  
- This project is suitable as a reference for learning modern JavaScript web app DevOps basics.

---

### 👨‍💻 Developed By

- Putri Salsabilla Insani
- Qoyyimil Jamilah
- Maulina Nur Laila
- Awwaliyah Aliyah

Thank you for using Tiny Tactics!  
Feedback, contributions, and issues are always welcome.
