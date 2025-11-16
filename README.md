# Test Automation - SauceDemo Login Tests

## Task Description

This project implements automated tests for the SauceDemo login functionality using WebDriverIO test automation framework.

**Launch URL:** https://www.saucedemo.com/

## Test Cases

### UC-1: Test Login form with empty credentials

1. User is on login page with empty fields
2. User clicks the "Login" button without entering credentials
3. Check the error message: "Username is required"

### UC-2: Test Login form with credentials by passing Username

1. User is on login page and enters only username (password field is empty)
2. User clicks the "Login" button without entering password
3. Check the error message: "Password is required"

### UC-3: Test Login form with credentials by passing Username & Password

1. User enters valid credentials (username from Accepted username section and password "secret_sauce")
2. User clicks the Login button
3. User is redirected to dashboard and page title "Swag Labs" is validated

## Technical Stack

- **Test Automation Tool:** WebDriverIO v7.40.0
- **Browsers:** Chrome, Firefox
- **Locators:** CSS Selectors
- **Pattern:** Page Object Model with BasePage inheritance
- **Assertions:** WebDriverIO built-in assertions (expect)
- **Test Framework:** Mocha with BDD UI
- **Language:** JavaScript (Node.js)
- **Logging:** WebDriverIO spec-reporter with info log level
- **Data Provider:** Custom test data module for test parametrization
- **Parallel Execution:** Configured via maxInstances in wdio.conf.js
- **Async/Await:** All methods use async/await for proper asynchronous handling
- **Explicit Waits:** All waits use explicit element expectations instead of fixed pauses

## Project Structure

```
finaltask/
├── package.json
├── wdio.conf.js              # WebDriverIO configuration
├── README.md                 # Project documentation
├── CRITERIA_ANALYSIS.md      # Detailed criteria analysis
├── pageobjects/
│   ├── BasePage.js          # Base Page Object with common methods
│   └── LoginPage.js         # Login Page Object (extends BasePage)
└── test/
    ├── specs/
    │   └── login.test.js    # Test file with UC-1, UC-2, UC-3
    └── data/
        └── testData.js      # Data provider for credentials
```

## Setup Instructions

### Prerequisites

- Node.js (v16.0.0 or higher, LTS version recommended)
- npm (Node Package Manager, comes with Node.js)
- Chrome browser (required)
- Firefox browser (optional, configured but may require additional setup)

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd final_task
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Run all tests (parallel execution on Chrome and Firefox):
```bash
npm test
```

### Run tests on Chrome only:
```bash
npm test -- --capabilities.chrome
```

### Run tests on Firefox only:
```bash
npm test -- --capabilities.firefox
```

## Features

### Page Object Pattern with BasePage

The project implements Page Object Model pattern with inheritance:

- **BasePage.js** - Base class with common methods:
  - `open(path)` - Open page by URL
  - `waitForElementDisplayed(element, timeout)` - Wait for element to be displayed
  - `waitForElementClickable(element, timeout)` - Wait for element to be clickable
  - `getPageTitle()` - Get page title
  - `waitForUrlContains(text, timeout)` - Wait for URL to contain text
  - `getCurrentUrl()` - Get current URL

- **LoginPage.js** - Login page class (extends BasePage):
  - CSS locators for all page elements
  - Methods for login interactions
  - Methods for field clearing
  - Error message handling

### Parallel Execution

Tests are configured to run in parallel across multiple browsers. The `maxInstances` setting in `wdio.conf.js` allows running 2 instances simultaneously (one for Chrome, one for Firefox).

### BDD Structure

All tests follow Given-When-Then structure:
- **Given:** Initial state (preconditions)
- **When:** User actions
- **Then:** Expected results

### Logging

- WebDriverIO spec-reporter provides detailed test execution logs
- Log level is configured as 'info' in `wdio.conf.js`
- All test steps are logged with clear messages

### CSS Locators

All locators use efficient CSS selectors:
- `#user-name` - Username input field
- `#password` - Password input field
- `#login-button` - Login button
- `.error-message-container h3` - Error message text

### Assertions

Tests use WebDriverIO's built-in `expect` assertions for:
- Error message validation (toContain)
- Page title validation (toBe)
- All assertions use explicit waits before validation
