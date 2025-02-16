import {expect, test} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';
import { DashboardPage } from '../Pages/DashboardPage';
import { AdminPage } from '../Pages/AdminPage';

const admindata = JSON.parse(JSON.stringify(require ("../TestData/AdminTestData.json")));
const logindata = JSON.parse(JSON.stringify(require ("../TestData/LoginTestData.json")));

for(const admin of admindata)
{
    test(`Verify Admin User ${admin.user}`,async ({page}) => 
    {
        const loginPage:LoginPage = new LoginPage(page);
        const dashboardPage:DashboardPage = new DashboardPage(page);
        const adminPage:AdminPage = new AdminPage(page);

        await loginPage.navigaetToLoginPage();
        await loginPage.login(logindata.username,logindata.password);

        await dashboardPage.ClickOnAdmin();
        await page.waitForTimeout(3000);
        await adminPage.SearchAdmin(admin.user,admin.expectedValue);
    
        await page.waitForTimeout(3000);
    });
}
