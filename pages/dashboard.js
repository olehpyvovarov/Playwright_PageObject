//@ts-check
export class Dashboard {
    /**
     * @param {import("playwright-core").Page} page
     */
    constructor(page) {
        this.page = page;
       
        this.user_dropdown = page.locator('//span[@class="oxd-userdropdown-tab"]');
        //this.user_menu = page.getByRole("list", { name: "menu" });
        //this.user_menu = this.user_dropdown.getByRole("list").nth(1);
        //this.user_menu = page.getByText('AboutSupportChange PasswordLogout');   //this works 1
        
        this.user_menu = page.locator('ul .oxd-dropdown-menu'); // this works 2
        //this.user_menu = page.locator('.oxd-dropdown-menu');  // this works 3
        this.user_logout_button = page
          .getByRole("menuitem", { name: "Logout" });
    }

    async logout() {
        await this.user_dropdown.click();
        await this.user_logout_button.click();
    }
}