const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    // CSS Locators
    get usernameInput() {
        return $('#user-name');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    get errorMessage() {
        return $('.error-message-container');
    }

    get errorMessageText() {
        return $('.error-message-container h3');
    }

    // Methods
    /**
     * Open login page and wait for form elements to be visible
     * @param {string} path - Path to append (default: '/')
     * @returns {Promise<void>}
     */
    async open(path = '/') {
        await super.open(path);
        // Wait for page to load - check that login form elements are visible
        await this.waitForElementDisplayed(this.usernameInput);
        await this.waitForElementDisplayed(this.passwordInput);
        await this.waitForElementDisplayed(this.loginButton);
    }

    async setUsername(username) {
        await this.waitForElementDisplayed(this.usernameInput);
        await this.usernameInput.setValue(username);
    }

    async setPassword(password) {
        await this.waitForElementDisplayed(this.passwordInput);
        await this.passwordInput.setValue(password);
    }

    /**
     * Private method to clear any input field
     * @param {WebdriverIO.Element} element - WebDriverIO element to clear
     * @param {string} selector - CSS selector for the field
     * @param {string} fieldName - Name of the field for error messages
     */
    async clearField(element, selector, fieldName) {
        // Ensure field is displayed before clearing
        await this.waitForElementDisplayed(element);
        // Clear the field using JavaScript to ensure it's properly cleared
        await browser.execute((sel) => {
            const input = document.querySelector(sel);
            if (input) {
                input.value = '';
                input.defaultValue = '';
                input.dispatchEvent(new Event('input', { bubbles: true }));
                input.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }, selector);
        await element.clearValue();
        // Wait for field to be cleared (value should be empty)
        await browser.waitUntil(
            async () => {
                const value = await element.getValue();
                return value === '';
            },
            { timeout: 2000, timeoutMsg: `${fieldName} field should be cleared` }
        );
    }

    async clearUsername() {
        await this.clearField(this.usernameInput, '#user-name', 'Username');
    }

    async clearPassword() {
        await this.clearField(this.passwordInput, '#password', 'Password');
    }

    async clickLogin() {
        await this.waitForElementDisplayed(this.loginButton);
        await this.waitForElementClickable(this.loginButton);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        // Wait for error message to be displayed
        await this.waitForElementDisplayed(this.errorMessageText);
        return await this.errorMessageText.getText();
    }

    async login(username, password) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.clickLogin();
    }
}

module.exports = new LoginPage();


