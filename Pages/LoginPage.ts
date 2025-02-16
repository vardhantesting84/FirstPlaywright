import { Locator, Page } from "@playwright/test";

export class LoginPage
{
    readonly page:Page;
    readonly usernameTxtBx:Locator;
    readonly passwordTxtBx:Locator;
    readonly loginBtn:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.usernameTxtBx = page.locator("//input[@name='username']");
        this.passwordTxtBx = page.locator("//input[@name='password']");
        this.loginBtn = page.locator("//button[text()=' Login ']");
    }

    async navigaetToLoginPage()
    {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async login(username,password)
    {
        await this.usernameTxtBx.fill(username);
        await this.passwordTxtBx.fill(password);
        await this.loginBtn.click();
    }
}