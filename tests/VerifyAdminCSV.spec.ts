import {expect, test} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';
import { DashboardPage } from '../Pages/DashboardPage';
import { AdminPage } from '../Pages/AdminPage';

import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const logindata = JSON.parse(JSON.stringify(require ("../TestData/LoginTestData.json")));

const admindata = parse(fs.readFileSync(path.join("TestData",'AdminTestData.csv')), {
    columns: true,
    skip_empty_lines: true
  });

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
