export class Dashboard {
    constructor(page) {
        this.page = page;
        //this.user_dropdown = page.locator($("span")).hasClass("oxd-userdropdown-name");
        // this.user_dropdown = page
        //   .locator("span")
        //   .filter({ hasClass: "--active oxd-userdropdown" });
        //locator('[class="--active oxd-userdropdown"]');
        this.user_dropdown = page.locator('//span[@class="oxd-userdropdown-tab"]');
        this.user_menu = page.getByRole("ul", { role: "menu" });
        
        this.user_logout_button = page
          .getByRole("menuitem", { name: "Logout" });
    }
    async logout() {
        await this.user_dropdown.click();
        await this.user_logout_button.click();
    }
}