export class LoginPage {
    constructor(page){
        this.page = page;
        this.username_textbox = page.getByPlaceholder("Username");
        this.password_textbox = page.getByPlaceholder("Password");
        this.login_button = page.getByRole("button", { name: "Login" });
        this.login_head = page.getByRole("heading", { name: "Login" });
        this.company_logo = page.getByRole("img", { name: "company-branding" });
    }
    async gotoLoginPage() {
        await this.page.goto(
          "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        );
    }
    async login(username, password) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
}