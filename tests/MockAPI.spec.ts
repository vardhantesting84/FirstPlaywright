import { test, expect, request } from '@playwright/test';
test('mocks a fruit and does not call api', async ({ page }) => 
{
    // Mock the api call before navigating
    await page.route('*/**/api/v1/fruits', async (route) => {
      const response = await route.fetch();
      const json = await response.json();
      json.push(
        { 
          name: "Playwright", id: 100 
        },
        {
          name: "Automation", id: 1001
        }
      );
      await route.fulfill({ response, json });
    });

    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');
  
    // Assert that the Strawberry fruit is visible
    await expect(page.getByText('Playwright')).toBeVisible();

    await page.waitForTimeout(5000);
});