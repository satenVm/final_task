/**
 * Base Page Object class with common methods for all pages
 * Provides reusable functionality for page interactions
 */
class BasePage {
    /**
     * Open a page by URL
     * @param {string} path - Path to append to baseUrl (default: '')
     * @returns {Promise<void>}
     */
    async open(path = '') {
        await browser.url(path);
    }

    /**
     * Wait for element to be displayed
     * @param {WebdriverIO.Element} element - Element to wait for
     * @param {number} timeout - Timeout in milliseconds (default: 5000)
     * @returns {Promise<void>}
     */
    async waitForElementDisplayed(element, timeout = 5000) {
        await element.waitForDisplayed({ timeout });
    }

    /**
     * Wait for element to be clickable
     * @param {WebdriverIO.Element} element - Element to wait for
     * @param {number} timeout - Timeout in milliseconds (default: 5000)
     * @returns {Promise<void>}
     */
    async waitForElementClickable(element, timeout = 5000) {
        await element.waitForClickable({ timeout });
    }

    /**
     * Get page title
     * @returns {Promise<string>} Page title
     */
    async getPageTitle() {
        return await browser.getTitle();
    }

    /**
     * Wait for URL to contain specific text
     * @param {string} text - Text that URL should contain
     * @param {number} timeout - Timeout in milliseconds (default: 5000)
     * @returns {Promise<void>}
     */
    async waitForUrlContains(text, timeout = 5000) {
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes(text),
            { timeout, timeoutMsg: `URL should contain "${text}" within ${timeout}ms` }
        );
    }

    /**
     * Get current URL
     * @returns {Promise<string>} Current URL
     */
    async getCurrentUrl() {
        return await browser.getUrl();
    }
}

module.exports = BasePage;

