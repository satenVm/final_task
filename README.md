# final_task
# Automated Testing — Final Task

## Technology Stack
- WebdriverIO
- Mocha
- Page Object Pattern
- CSS Locators
- Parallel Execution
- Data Provider
- Logging

## Test Cases

### UC-1 — Empty Credentials
1. Enter any username & password
2. Clear both fields
3. Click Login
4. Validate error: “Username is required”

### UC-2 — Empty Password
1. Enter username & password
2. Clear password
3. Click Login
4. Validate error: “Password is required”

### UC-3 — Valid Login
1. Use usernames from “Accepted usernames”
2. Password: `secret_sauce`
3. Validate dashboard title “Swag Labs”


/project
 ├─ /test
 │   ├─ /pageobjects
 │   │     ├─ login.page.js
 │   │     └─ inventory.page.js
 │   ├─ /specs
 │   │     └─ loginTests.e2e.js
 │   └─ /data
 │         └─ users.js
 ├─ wdio.conf.js
 ├─ package.json
 └─ README.md