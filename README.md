# 🕹️ Tiny Tactics

Tiny Tactics is a strategic 3x3 web-based board game inspired by classic tic-tac-toe. Built with modern JavaScript, HTML, and CSS, it offers both competitive and casual gameplay through two main modes: play against a friend or challenge a smart computer opponent.

![Tiny Tactics Screenshot](https://github.com/user-attachments/assets/e4b11811-0f60-4aee-a330-8cb7b3f6bbae)

---

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

---

## 🛠️ Tools

This DevOps project adopts a suite of modern tools to automate and streamline development, testing, deployment, and monitoring:

- **Code Editor: Visual Studio Code (VS Code)**  
  Utilized as the primary editor for its flexibility, rich extension ecosystem, and features that support JavaScript development and Git integration.

- **Version Control: GitHub**  
  Central hub for source code management, detailed tracking, code reviews via pull requests, and safe rollbacks to previous versions.

- **CI/CD Automation: GitHub Actions**  
  Powers the Continuous Integration/Continuous Deployment (CI/CD) pipeline. The workflow is triggered automatically on every push or pull request to the `main` and feature branches (`Feat--**`, `fitur--**`, `Security`, `logo`, `sounds`). The deployment (CD) pipeline runs after successful CI on the main branch.

- **Code Quality & Security: ESLint**  
  Ensures JavaScript code quality and security through static analysis. ESLint is tightly integrated with the CI pipeline—builds fail if violations are found. Custom rules are defined in `eslint.config.mjs`.

- **Unit Testing: Jest**  
  Provides fast and robust unit testing. Covers game logic, AI, and UI behaviors. Jest runs automatically in CI after linting passes.

- **Dependency Security Scan: npm audit**  
  Scans for vulnerabilities with `npm audit --audit-level high`. Integrated into CI (pipeline continues even if vulnerabilities are found for flexible remediation).

- **Deployment Platform: Vercel**  
  Hosts the front-end application, streamlining deployments for JavaScript projects. Integrated with GitHub Actions for automatic deployments on successful CI runs.  
  **Live app:** [https://fp-pso-umber.vercel.app/](https://fp-pso-umber.vercel.app/)

- **Monitoring & Analytics: Vercel Analytics & Speed Insights**  
  Embedded scripts in `index.html` provide real-time performance and usage metrics.

---

## 🧩 Project Structure

```
fp-pso/
├── index.html               # Main entry point
├── src/
│   ├── js/
│   │   └── script.js        # Main game logic
│   ├── css/
│   │   └── style.css        # Main styling
│   └── images/              # Logos and images
├── __tests__/
│   └── game.test.js         # Game logic unit tests
├── .github/workflows/
│   ├── ci.yml               # CI pipeline (lint, test, audit)
│   └── cd.yml               # CD pipeline (deploy to Vercel)
├── package.json             # npm configuration & dependencies
├── eslint.config.mjs        # ESLint configuration
├── babel.config.js          # Babel configuration
├── jest.config.js           # Jest configuration
```

---

## 🚀 How to Run

Follow these steps to set up and run the Tiny Tactics game locally or deploy it to production.

### System Requirements

- **Node.js** (v18+)
- **npm** (Node Package Manager)
- **Git**
- **Web Browser** (Chrome, Firefox, Edge, etc.)
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
3. Install the **Live Server** extension (if not already installed).
4. Click the "Go Live" button in the VS Code status bar, or right-click `index.html` and select "Open with Live Server".
5. The application will run on your `localhost`.

#### Publicly

A live version is available at:  
[https://fp-pso-umber.vercel.app/](https://fp-pso-umber.vercel.app/)

---

## 🚀 CI/CD Pipeline Setup

The project uses GitHub Actions for automated CI/CD.

### 1. GitHub Repository Setup

- Review and understand the codebase.
- Fork or clone the repository for your own development.
- Make changes and push to your remote repository.
- Use feature branches and Pull Requests (PRs) for best practice.

---

### 2. Local Development Environment Setup

- **Install Node.js** and set up your environment.
- **Initialize Node.js Project:**
  ```sh
  npm init -y
  ```
- **Install development dependencies:**
  ```sh
  npm install eslint @eslint/js eslint-plugin-security globals \
    @babel/core babel-jest jest jest-environment-jsdom @babel/preset-env --save-dev
  ```
- **Configure ESLint:** Edit `eslint.config.mjs`.
- **Configure Babel:** Edit `babel.config.js`.
- **Configure Jest:** Edit `package.json` and `jest.config.js`.
- **Write Unit Tests:** Place tests in `__tests__/game.test.js`.
- **Write Game Logic:** Implement features in `src/js/script.js`.
- **Run the app:** Use Live Server to view changes live.
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

- **Workflows location:** `.github/workflows/`
  - `ci.yml` for Continuous Integration
  - `cd.yml` for Continuous Deployment

#### CI Pipeline (ci.yml)

- **Triggers:**
  - On push or pull request to `main`, `Feat--**`, `fitur--**`, `Security`, `logo`, `sounds`
- **Jobs:**
  1. **Lint:** Runs ESLint and security audits. Pipeline continues on vulnerability warnings.
  2. **Test:** Executes Jest unit tests (runs only if lint passes).

#### CD Pipeline (cd.yml)

- **Triggers:**
  - On push to `main`
  - On successful CI completion for `main`
- **Job:**  
  - Deploys to Vercel, using environment variables and secrets for authentication.

---

### 4. Vercel Deployment Setup

1. Go to [https://vercel.com/](https://vercel.com/)
2. Sign up or log in.
3. Import the `fp-pso` repository from GitHub.
4. Configure the new project (default settings are fine).
5. Click **Deploy**.
6. After deployment, go to Dashboard.
7. Copy your Project ID and User ID from the **Settings** and **Account Settings** tabs.
8. Create an API token in the **Tokens** menu and save it as `secrets.VERCEL_TOKEN` in your GitHub Actions workflow.

Once configured, every push to `main` will automatically update your live application on Vercel!

---

## 💡 Additional Notes

- This repository is a reference for DevOps best practices in modern JavaScript web apps.
- All pipeline, configuration, and best-practice examples are included.

---

## 👨‍💻 Developed By

- Putri Salsabilla Insani
- Qoyyimil Jamilah
- Maulina Nur Laila
- Awwaliyah Aliyah

---

Thank you for using Tiny Tactics!  
Feedback, contributions, and issues are always welcome.
