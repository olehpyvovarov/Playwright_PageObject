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
    await dashboard.user_dropdown.click();        //necessary to assert 'user_menu' and others
    //await page.pause();
    //console.log(`LOG from dashboard ${dashboard.user_menu.innerHTML}`); // for debugging - little help
    await expect(dashboard.user_menu).toBeVisible();
    await expect(dashboard.user_logout_button).toBeVisible();

    console.log(`LOG2 ${await dashboard.user_menu.textContent()}`);  // for debugging - shows text in all elements
    console.log(`LOG3 ${await dashboard.user_menu.innerText()}`);   // for debugging - shows only text in the 1st element
    await expect(dashboard.user_menu).toContainText('Change Password');
    await expect(dashboard.user_menu.getByRole('listitem')).toHaveCount(4);
})
test.skip('logout_test', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new Dashboard(page);
    await login.gotoLoginPage();
    await login.login("Admin", "admin123");
    await dashboard.logout();

})