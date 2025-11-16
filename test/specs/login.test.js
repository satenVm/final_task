const LoginPage = require('../../pageobjects/LoginPage');
const testData = require('../data/testData');

describe('SauceDemo Login Tests', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    describe('UC-1: Test Login form with empty credentials', () => {
        it('should display "Username is required" error when login is clicked with empty fields', async () => {
            // Given: User is on login page with empty fields
            // (page is already opened in beforeEach with empty form)
            
            // When: User clicks Login button without entering any credentials
            await LoginPage.clickLogin();
            
            // Then: Error message "Username is required" should be displayed
            const errorMessage = await LoginPage.getErrorMessage();
            expect(errorMessage).toContain(testData.errorMessages.usernameRequired);
        });
    });

    describe('UC-2: Test Login form with credentials by passing Username', () => {
        it('should display "Password is required" error when login is clicked with only username entered', async () => {
            // Given: User is on login page and enters only username (password field is empty)
            await LoginPage.setUsername('test_user');
            
            // When: User clicks the Login button without entering password
            await LoginPage.clickLogin();
            
            // Then: Error message "Password is required" should be displayed
            const errorMessage = await LoginPage.getErrorMessage();
            expect(errorMessage).toContain(testData.errorMessages.passwordRequired);
        });
    });

    describe('UC-3: Test Login form with credentials by passing Username & Password', () => {
        // Parametrize test using data provider
        testData.validCredentials.forEach((credentials, index) => {
            it(`should successfully login with valid credentials (${credentials.username}) and validate page title`, async () => {
                // Given: User has valid credentials (username from Accepted username section and password "secret_sauce")
                await LoginPage.setUsername(credentials.username);
                await LoginPage.setPassword(credentials.password);
                
                // When: User clicks the Login button
                await LoginPage.clickLogin();
                
                // Then: User should be redirected to dashboard with title "Swag Labs"
                const pageTitle = await LoginPage.getPageTitle();
                expect(pageTitle).toBe(testData.expectedPageTitle);
            });
        });
    });
});

