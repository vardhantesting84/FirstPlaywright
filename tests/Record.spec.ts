import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Admin');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByText('(1) Record Found')).toBeVisible();
  await page.getByRole('listitem').filter({ hasText: 'Nirav Savaliya' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});