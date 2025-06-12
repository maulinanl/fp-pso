# 🕹️ Tiny Tactics

Tiny Tactics is a strategic 3x3 web-based board game inspired by classic tic-tac-toe. Built with modern JavaScript, HTML, and CSS, it offers both competitive and casual gameplay through two main modes: play against a friend or challenge a smart computer opponent.
![image](https://github.com/user-attachments/assets/e4b11811-0f60-4aee-a330-8cb7b3f6bbae)

## ✨ Features
-**Dual Game Modes**: Users can choose to play against a friend (Player vs. Player) or against a computer with a simple artificial intelligence that can automatically determine the best move.
-**Score System**: Player scores are automatically recorded during the game session. Scores can be reset with a special button. However, if only restarting the game mid-session, the score is retained.
-**Winning Highlights & Animations**: When a win occurs, the winning cells will be highlighted and animated to provide more engaging visual feedback.
-**Restart Game Button**: Players can easily restart the game at any time.
-**Dark Mode**: Users can change the theme appearance between light and dark according to their preference.
-**Interactive Sound Effects**: Sound effects are added for every important action such as winning, losing, and drawing.
-**Interactive Background Display**: The game background is designed with interactive and illustrative visual elements to create a fun and immersive playing atmosphere.

### 👨‍💻 Developed By

- Putri Salsabilla Insani
- Qoyyimil Jamilah
- Maulina Nur Laila
- Awwaliyah Aliyah

## 🛠️ Tools
This DevOps project leverages various integrated modern tools to ensure automated and efficient development, testing, deployment, and monitoring processes.
-**Code Editor**: Visual Studio Code (VS Code) 
   - Used as the primary code editor in the development of the "Tiny Tactics!" game source code. Its flexibility, rich extension ecosystem, and features supporting JavaScript development and Git integration make VS Code a highly efficient tool for the team.
-**Version Control**: GitHub 
   - Serves as the central foundation for managing the project's source code. It enables storing all source code centrally and organized , tracking detailed changes including who made them and when , facilitating effective code review through pull requests , and allowing rollbacks to previous versions for stability.
-**CI/CD Automation**: GitHub Actions 
   - The backbone of the Continuous Integration/Continuous Deployment (CI/CD) pipeline automation in the "Tiny Tactics!" project. It automates the development workflow efficiently. The CI/CD pipeline is configured to automatically trigger on every push to the main branch and specific feature branches (like Feat--**, fitur--**, Security, logo, and sounds), as well as on every pull request targeting these branches. The CD pipeline specifically triggers after the "CI Pipeline" workflow successfully completes on the main branch.
-**Code Quality & Security**: ESLint 
   - A tool that helps check and fix JavaScript code to be cleaner and error-free, ensuring the code follows certain rules and preventing bugs from the start. It analyzes code statically to identify potential errors, bugs, and style violations, helping developers write cleaner, structured, and problem-free code. ESLint is integrated directly into the CI pipeline, causing the build to fail if violations are found. Custom configurations are defined in eslint.config.mjs, including js/recommended and eslint-plugin-security presets.
-**Unit Testing**: Jest 
   - A popular, comprehensive JavaScript testing framework designed to work optimally with modern JavaScript applications. Jest provides fast unit testing with an intuitive API, including mocking, snapshot testing, and code coverage reporting. It is used for comprehensive unit tests on various aspects of the game, such as game logic (winning conditions, draw detection) , AI logic (best move selection) , and UI interactions (cell placement, player switching, score updates). Jest is automatically run in the CI pipeline after linting is successful.
-**Dependency Security Scan**: npm audit 
   - Integrated into the CI pipeline to ensure project dependency security. The command npm audit --audit-level high is run to scan for high-severity security vulnerabilities. The configuration continue-on-error: true allows the CI pipeline to continue even if vulnerabilities are found, providing flexibility for review and remediation.
-**Deployment Platform**: Vercel 
   - A cloud-based deployment platform chosen for hosting the "Tiny Tactics!" front-end application. Vercel is designed to simplify and accelerate web project deployment, especially for JavaScript frameworks. It integrates closely with GitHub Actions, enabling automatic deployment whenever the CI pipeline succeeds on the main branch. The application is deployed to `https://fp-pso-umber.vercel.app/`.
-**Monitoring & Analytics**: Vercel Analytics & Speed Insights 
   - Integrated into the project to gain insights into application performance and usage. Scripts for Vercel Analytics (/_vercel/insights/script.js) and Speed Insights `/_vercel/speed-insights/script.js` are added with defer to index.html. This integration is important for monitoring performance metrics and user behavior post-deployment, assisting with future iterations and optimizations.

## 🚀 How to Run
To run the Tiny Tactics game, follow these steps:

#### System Requirements (Tools Needed)
-**Node.js**: JavaScript runtime environment (version 18 or later recommended).
-**npm (Node Package Manager)**: Used to manage project dependencies (usually already included with Node.js installation).
-**Git**: Version control system for cloning the repository.
-**Web Browser**: Such as Google Chrome, Mozilla Firefox, or Microsoft Edge.
-**Visual Studio Code (VS Code)**: (Optional, but recommended as a code editor).
-**VS Code Live Server Extension**: (Optional, but recommended for running the web application locally with a simple HTTP server).

#### Installation Steps (Project Setup)
1. Clone the repository:
   ```
   git clone https://github.com/maulinanl/fp-pso.git
   ```
2. Navigate to the project directory:
   ```
   cd fp-pso
   ```
3. Install dependencies:
   ```
   npm install
   ```
   This command will install required dependencies, including eslint, @eslint/js, eslint-plugin-security, globals, @babel/core, babel-jest, jest, jest-environment-jsdom, and @babel/preset-env.

#### Running the Application
##### Locally:
1. Open the project in Visual Studio Code.
2. Open `the index.html` file.
3. Install the "Live Server" extension by Ritwick Dey from the VS Code Extensions Marketplace (if not already installed).
4. Click the "Go Live" button located in the bottom status bar of VS Code, or right-click `index.html` and select "Open with Live Server".
5. The application will run on your localhost.

##### Publicly :
The application is publicly available via the link: `https://fp-pso-umber.vercel.app/`.

🚀 CI/CD Pipeline Setup
The project implements a robust CI/CD pipeline using GitHub Actions to automate the integration and deployment processes.
**1. GitHub Repository Setup**
   1. Understand Existing Code: Begin by studying the existing code in the initial repository to understand its functionality and structure.
   2. Clone and Create New Repository: Clone the code and create a new repository as the development space for the pipeline and further project enhancements.
   3. Initial Modifications and Push: Make necessary initial modifications to the code and push these initial changes to the repository.
   4. Phased Development: Continue project development gradually, focusing on adding features and building the pipeline.
   5. Flexible Code Push:
      - If the code is stable and production-ready, push directly to the main branch.
      - If still under feature development or requiring validation, push to a separate branch and create a pull request to main once stable, allowing for testing and review before deployment.
      - 
**2. Local Development Environment Setup (ESLint, JavaScript, Node.js, Jest)**
   1. Install Node.js and Configure Environment: Install Node.js and configure the environment settings on your device.
   2. Initialize Node.js Project: Initialize a Node.js project using npm init -y.
   3. Install Dependencies: Install the following development dependencies:
      ```
      npm install eslint @eslint/js eslint-plugin-security globals @babel/core babel-jest jest jest-environment-jsdom @babel/preset-env --save-dev
      ```
   4. Configure ESLint: Set up ESLint in `eslint.config.mjs`.
   5. Configure Babel: Configure Babel in `babel.config.js`.
   6. Configure Jest: Configure Jest in `package.json` and `jest.config.js`.
   7. Write Unit Tests: Develop unit tests in the `__tests__/game.test.js`.
   8. Modify `script.js`: Implement game logic and features by modifying `script.js`.
   9. Run Local Application: Run the local application using VS Code Live Server.
   10. Run Unit Tests: Execute unit tests using `npm test`.
   11. Run Linting and Security Checks: Perform linting and security checks using `npm run lint`.

**3. GitHub Actions Setup**
   1. Create Workflow Folder: Create a `.github/workflows` folder in your repository.
   2. Add YAML Files: Add YAML files as pipelines to this folder to define triggers for repository modifications.
   3. Define CI/CD Pipelines: For this project, two main pipelines are configured: `CI.yml` and `CD.yml`.
   4. Pipeline Triggering: The development pipeline (CI) can be triggered via pushes and pull requests from new feature development and fixes, followed by approval from a monitor who will push to the `main` branch for deployment (CD).

**A. CI Pipeline (ci.yml)**
The CI pipeline is configured to automatically trigger under specific conditions to ensure code quality and stability.
- Trigger Conditions:
   - `on: push`: Triggered on pushes to the `main`, `Feat--**`, `fitur--**`, `Security`, `logo`, and `sounds branches`. The branch patterns ensure that changes to any branch starting with these prefixes trigger the pipeline, allowing early detection of issues.
   - `on: pull_request`: Triggered on pull requests targeting the `main`, `Feat--**`, `fitur--**`, `Security`, `logo`, and `sounds branches`. This ensures every new contribution undergoes quality checks before being merged.
- Jobs:
1. `lint` **Job (Run ESLint)** 
   - **Name**: `Run ESLint `
   - **Runs On**: u`buntu-latest `
   - **Steps**:
   -    Checkout repository: Downloads the latest project source code from the GitHub repository.
         - Set up Node.js: Configures the required Node.js environment (version '18').
         - Install dependencies: Installs all Node.js packages listed as development dependencies in `package.json`.
         - Run npm audit for vulnerabilities (DevSecOps SCA): Performs Software Composition Analysis (SCA) using `npm audit --audit-level high` to scan for known security vulnerabilities in third-party dependencies. `continue-on-error: true` allows the pipeline to proceed despite vulnerability warnings.
         - Make ESLint executable: Grants execution permissions to the ESLint binary (`chmod +x ./node_modules/.bin/eslint`).
         - Run ESLint (DevSecOps SAST & Linting): Executes linting and Static Application Security Testing (SAST) on JavaScript code using `npm run lint`. The configuration in `eslint.config.mjs` includes js/recommended and eslint-plugin-security rules, with specific rules like `no-unused-vars`, `no-undef`, and `security/detect-object-injection` turned off for flexibility within the game context.
2. `test` **Job (Run Unit Tests)**
   - **Name**: `Run Unit Tests `
   - **Runs On**: `ubuntu-latest `
   - **Needs**: `lint` (this job will only run if the `lint` job completes successfully).
   - **Steps**:
         - Checkout repository: Downloads the project source code.
         - Set up Node.js: Configures the Node.js environment.
         - Install dependencies: Installs necessary dependencies for testing.
         - Make Jest executable: Grants execution permissions to the Jest binary (`chmod +x ./node_modules/.bin/jest`).
         - Run Tests: Executes all unit tests defined with Jest (`npm test`).
         - Test Results: All 25 unit tests passed, indicating that the game's functionality runs as expected, covering game logic, AI, UI, and state management.

**B. CD Pipeline (cd.yml)**
The CD pipeline is designed to trigger automatically based on specific conditions to ensure only stable and tested code is deployed.
- Trigger Conditions:
   - `on: push` to `main branch`: The pipeline will trigger if there is a direct push to the main branch.
   - `on: workflow_run` from "CI Pipeline": This pipeline also triggers after the "CI Pipeline" workflow completes (with status `completed`). This condition specifically checks if the triggering CI workflow was successful (`conclusion == 'success'`) and originated from the `main` branch (`head_branch == 'main'`). This combination ensures that deployment only occurs for changes that have passed all CI checks and have been integrated into the production (`main`) branch.
- Job:
1. `deploy` **Job** 
   - **Name**: `deploy `
   - **Runs On**: `ubuntu-latest `
   - **Condition** (`if`): `github.event.name == 'push' && github.ref == 'refs/heads/main' || github.event.name == 'workflow_run' && github.event.workflow_run.conclusion == 'success' && github.event.workflow_run.head_branch == 'main'`.
   - **Steps**:
         - Checkout repository: Downloads the latest version of the project source code from the GitHub repository to the GitHub Actions runner environment.
         - Install Vercel CLI: Installs the Vercel command-line interface globally in the GitHub Actions environment. Vercel CLI is the tool used to interact with the Vercel platform.
         - Pull Vercel Environment Information: Authenticates with the Vercel account and retrieves project-specific configurations (like Vercel Project ID and Organization ID). Authentication is done securely using a Vercel API Token stored as a GitHub Secret (`secrets.VERCEL_TOKEN`). Project and organization IDs are also provided as environment variables.
         - Deploy to Vercel: Publishes the application to Vercel in the production environment. This command instructs Vercel to take the application files from the GitHub Actions runner (which have already been checked out) and deploy them. Vercel intelligently recognizes this as a static frontend application and serves it to the public project URL.

After all these stages are successfully executed, the Tic-Tac-Toe game application will be automatically updated and available live at the specified Vercel URL.

**4. Vercel Setup for Deployment**
1. **Access Vercel**: Go to `https://vercel.com/`.
2. **Create/Login Account**: Create a new account if you don't have one, or log in if you do.
3. **Import Git Repository**: In the "Import Git Repository" section, select "Continue with GitHub".
4. **Login with GitHub**: Log in using your GitHub account.
5. **Select Repository**: Choose the `fp-pso` repository to import.
6. **Configure New Project**: In the "New Project" section, fill in the "Project Name" and leave the rest as default.
7. **Deploy**: Click "Deploy".
8. **Continue to Dashboard**: After the deployment process finishes and displays "Congratulations!", click "Continue to Dashboard".
9. **Get Project ID**: Go to the "Settings" tab, find "Project ID", copy, and save it.
10. **Get User ID**: Click the "Profile" icon in the top-right corner, then "Account Settings", find "User ID", copy, and save it.
11. **Create API Token**: Still in "Account Settings", click the "Tokens" menu. In the "Create Token" section, fill in "Token Name", choose "Scope", and "Expiration", then click "Create".
12. **Save Token**: Copy and save the created token. This token will be used as `secrets.VERCEL_TOKEN` in your GitHub Actions workflow.
      
