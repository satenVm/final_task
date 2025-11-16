const login = require('../pageobjects/login.page');
const inventory = require('../pageobjects/inventory.page');
const { validUsers, sampleUser } = require('../data/users');

describe('Sauce Demo Login Tests (UC-1, UC-2, UC-3)', () => {

    beforeEach(async () => {
        await login.open();
    });

    it('UC-1: Empty Credentials -> Username is required', async () => {
        // enter then clear both fields
        await login.setUsername('anything');
        await login.setPassword('anything');
        await login.clearUsername();
        await login.clearPassword();

        await login.clickLogin();

        const text = await login.errorMsg.getText();
        console.log('Error message text:', text);
        await expect(login.errorMsg).toHaveTextContaining('Username is required');
    });

    it('UC-2: Empty Password -> Password is required', async () => {
        await login.setUsername(sampleUser);
        await login.setPassword('somepass');
        await login.clearPassword();

        await login.clickLogin();

        const text = await login.errorMsg.getText();
        console.log('Error message text:', text);
        await expect(login.errorMsg).toHaveTextContaining('Password is required');
    });

    validUsers.forEach(user => { 
        it(`UC-3: Valid Login with ${user} -> should reach inventory`, async () => {
            await login.login(user, 'secret_sauce');

            await inventory.waitForLoad();

            const titleText = await inventory.title.getText();
            console.log('Inventory title text:', titleText);
            await expect(inventory.title).toHaveText('Swag Labs');
        });
    });

});
