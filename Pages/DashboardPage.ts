import { Locator, Page } from "@playwright/test";

export class DashboardPage
{
    readonly page:Page;
    readonly adminSpan:Locator;
    readonly pimSpan:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.adminSpan = page.locator("//span[text()='Admin']");
        this.pimSpan = page.locator("//span[text()='PIM']");
    }

    async ClickOnAdmin()
    {
        await this.adminSpan.click();
    }

    async ClickOnPIM()
    {
        await this.pimSpan.click();
    }
}