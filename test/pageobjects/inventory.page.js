class InventoryPage {
    get title() { return $('.app_logo'); }

    async waitForLoad() {
        await this.title.waitForExist({ timeout: 10000 });
    }
}

module.exports = new InventoryPage();
