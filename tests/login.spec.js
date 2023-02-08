import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.js';
import { Dashboard } from '../pages/dashboard.js';

test('login_test', async ({ page })=>{
    const login = new LoginPage(page);
    const dashboard = new Dashboard(page);
    await login.gotoLoginPage();
    await login.login('Admin', 'admin123');
    await expect(page).toHaveURL(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    expect(dashboard.user_dropdown).toBeDefined();
    const a = await dashboard.user_dropdown.click();
    
    expect(dashboard.user_menu).toContainText('About');
    //expect(user_menu1.getByRole("menuitem", { name: "About" })).toBeVisible();

    //const user_menu2 = dashboard.user_menu;
    //expect(user_menu1).toEqual(user_menu2);
    //await expect(dashboard.user_dropdown).toBeVisible();
    //await expect(dashboard.user_dropdown).toHaveCount(1);
})
test.skip('logout_test', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new Dashboard(page);
    await login.gotoLoginPage();
    await login.login("Admin", "admin123");
    await dashboard.logout();

})