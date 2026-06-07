# playwrightsaucecod
# Playwright TypeScript Automation Framework - Sauce Labs

## Overview

This project contains automated UI tests for the Sauce Labs application using Playwright with TypeScript and the Page Object Model (POM) design pattern.

Application Under Test:

https://www.saucedemo.com/

The framework supports:

* TypeScript
* Playwright Test Runner
* Page Object Model (POM)
* Data-Driven Testing
* Cross-Browser Execution (Chromium and Firefox)
* GitHub Actions CI/CD Integration
* HTML Test Reports

---

## Prerequisites

Before running the tests, ensure the following are installed:

* Node.js (v18 or higher)
* npm
* Visual Studio Code (recommended)

Verify installation:

```bash
node -v
npm -v
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd playwrightproject
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Install Playwright browsers with dependencies:

```bash
npx playwright install --with-deps
```

---

## Base URL Configuration

The application URL is configured in:

`playwright.config.ts`

```typescript
use: {
    baseURL: 'https://www.saucedemo.com'
}
```

To change environments, update the value of `baseURL`.

Example:

```typescript
use: {
    baseURL: 'https://test-environment-url.com'
}
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/authentication/login.spec.ts
```

Run tests in Chromium only:

```bash
npx playwright test --project=Chromium
```

Run tests in Firefox only:

```bash
npx playwright test --project=Firefox
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

---

## Test Scenarios Covered

### Authentication

* Successful Login
* Failed Login with Invalid Credentials
* Logout Functionality

### Core Workflow

* Login
* Browse Products
* Add Product to Cart
* Checkout
* Complete Purchase

### Negative / Edge Cases

* Login with Empty Credentials
* Checkout Validation Errors

### Data-Driven Testing

* Multiple User Credential Validation

---

## Reporting

After execution, Playwright generates an HTML report added live timestamp to avoid confusion of old result in playwright-report folder.

Open the report:

```bash
npx playwright show-report
```

Report location:

```text
playwright-report/
```

---

## Browser Support

Configured browsers as requirement is f 2 browser:

* Chromium
* Firefox

Configuration available in:

```typescript
projects: [
  {
    name: 'Chromium'
  },
  {
    name: 'Firefox'
  }
]
```

---

## CI/CD Integration

GitHub Actions workflow is configured at:

```text
.github/workflows/playwright.yml
```

The workflow automatically executes tests on:

* Push to main/master branch
* Pull Request creation

---

# AI-Assisted Test Automation

This project was developed using AI-assisted automation tools to accelerate framework setup, test generation, and code review.

---

## Claude CLI Setup

The following tools were installed and configured on Windows:

1. Installed Claude CLI using Command Prompt.
2. Installed the latest Playwright CLI.
3. Installed Playwright CLI Skills to enable AI-assisted browser automation using natural language instructions.

### Example Prompt

```text
Use playwright-cli skill to run following test.

TC-001: Login Authentication test case with valid uname and pwd

Steps:
1. Navigate to https://www.saucedemo.com/
2. Enter username as "standard_user"
3. Enter password as "secret_sauce"
4. Verify user is logged in successfully

TC-002: Login Authentication test case with invalid uname and pwd

Steps:
1. Navigate to https://www.saucedemo.com/
2. Enter invalid username
3. Enter invalid password
4. Verify appropriate error message is displayed
```

---

## GitHub Copilot Usage

GitHub Copilot was used to assist with:

- Playwright test generation
- Page Object Model creation
- Locator suggestions
- TypeScript code completion
- Assertion recommendations
- Framework refactoring

### Example Prompts

```text
Create Playwright Page Object for Sauce Labs Login Page
```

```text
Generate Playwright TypeScript test for successful login
```

```text
Create data-driven Playwright test using multiple credential sets
```

---

## MCP (Model Context Protocol) Usage

MCP-compatible tooling was explored for AI-assisted software development workflows.

### Use Cases

- Code generation
- Test automation assistance
- Local project context awareness
- Repository analysis
- Documentation generation

### Tools Evaluated

- GitHub Copilot
- Claude CLI
- Playwright CLI
- MCP-enabled development environments

---

## AI Generated Test Scenarios by giving prompt like use playright-cli to run below scenarios

### TC-001: Successful Login

```text
1. Navigate to https://www.saucedemo.com/
2. Enter username: standard_user
3. Enter password: secret_sauce
4. Click Login
5. Verify Inventory page is displayed
```

### TC-002: Invalid Login

```text
1. Navigate to https://www.saucedemo.com/
2. Enter invalid username
3. Enter invalid password
4. Click Login
5. Verify error message is displayed
```

### TC-003: Logout

```text
1. Login using valid credentials
2. Open Menu
3. Click Logout
4. Verify Login page is displayed
```

### TC-004: Complete Purchase Workflow

```text
1. Login
2. Add product to cart
3. Open cart
4. Checkout
5. Enter customer information
6. Complete order
7. Verify order confirmation
```



## Future Enhancements

- API Testing Integration
- Playwright MCP Server Integration
- Visual Regression Testing
- Docker Execution
- Parallel Test Execution
- Cross-Browser Grid Execution
- Advanced AI-Assisted Test Generation

## Author

Automation Framework created by * **Kedar Patil** - *Initial work & framework design* - [GitHub Profile](https://[github.com](https://github.com/kedarkpatil/playwrightsaucecod) using:

* Playwright
* TypeScript
* Page Object Model (POM)
* GitHub Actions




