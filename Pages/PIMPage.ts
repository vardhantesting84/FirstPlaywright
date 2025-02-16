import { expect,Locator, Page } from "@playwright/test";

export class PIMPage
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

    async SearchPIM(employeeId,expectedResult)
    {
        await this.usernameTxtBx.fill(employeeId);
        await this.searchBtn.click();
        
        await expect(this.resultSpan).toBeVisible();
        await expect(this.resultSpan).toHaveText(expectedResult);
        
    }
}