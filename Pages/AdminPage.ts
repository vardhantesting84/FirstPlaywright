import { expect,Locator, Page } from "@playwright/test";

export class AdminPage
{
    readonly page:Page;
    readonly usernameTxtBx:Locator;
    readonly searchBtn:Locator;
    readonly resultSpan:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.usernameTxtBx = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]");
        this.searchBtn = page.locator("//button[@type='submit']");
        this.resultSpan = page.locator("(//span[@class='oxd-text oxd-text--span'])[1]");
    }

    async SearchAdmin(username,expectedResult)
    {
        await this.usernameTxtBx.fill(username);
        await this.searchBtn.click();
        
        await expect(this.resultSpan).toBeVisible();
        await expect(this.resultSpan).toHaveText(expectedResult);
        
    }
}