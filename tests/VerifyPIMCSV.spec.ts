import {expect, test} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';
import { DashboardPage } from '../Pages/DashboardPage';
import { PIMPage } from '../Pages/PIMPage';

import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const logindata = JSON.parse(JSON.stringify(require ("../TestData/LoginTestData.json")));

const pimdata = parse(fs.readFileSync(path.join("TestData",'PIMTestData.csv')), {
    columns: true,
    skip_empty_lines: true
  });

for(const pim of pimdata)
{
test(`Verify PIM User ${pim.employeeId}`,async ({page}) =>{

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
