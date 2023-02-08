// @ts-check
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
    await dashboard.user_dropdown.click();
    
    console.log(`from dashboard ${dashboard.user_menu}`);
    await expect(dashboard.user_logout_button).toBeVisible();
    
    await expect(dashboard.user_menu).toContainText('Change Password');
    await expect(dashboard.user_menu.getByRole('listitem')).toHaveCount(4);
})
test('logout_test', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new Dashboard(page);
    await login.gotoLoginPage();
    await login.login("Admin", "admin123");
    await dashboard.logout();

})