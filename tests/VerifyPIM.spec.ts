import {expect, test} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';
import { DashboardPage } from '../Pages/DashboardPage';
import { PIMPage } from '../Pages/PIMPage';

const pimdata = JSON.parse(JSON.stringify(require ("../TestData/PIMTestData.json")));
const logindata = JSON.parse(JSON.stringify(require ("../TestData/LoginTestData.json")));

for(const pim of pimdata)
{
test(`@Imp Verify PIM User ${pim.employeeId}`,async ({page}) =>{

    const loginPage:LoginPage = new LoginPage(page);
    const dashboardPage:DashboardPage = new DashboardPage(page);
    const pimPage:PIMPage = new PIMPage(page);

    await loginPage.navigaetToLoginPage();
    await loginPage.login(logindata.username,logindata.password);

    await dashboardPage.ClickOnPIM();

    await pimPage.SearchPIM(pim.employeeId,pim.expectedValue);

    await page.waitForTimeout(3000);
});
}
