class InventoryPage {
    get title() { return $('.app_logo'); }

    async waitForLoad() {
        await this.title.waitForExist({ timeout: 5000 });
    }
}

module.exports = new InventoryPage();
