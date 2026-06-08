import { test, expect } from '@playwright/test';

test('Verify mocked response', async ({ page }) => {

    let routeIntercepted = false;

    await page.route('**/inventory.html', async route => {

        routeIntercepted = true;

        await route.fulfill({
            status: 200,
            contentType: 'text/html',
            body: '<h1>Mock Inventory</h1>'
        });

    });

    await page.goto('https://www.saucedemo.com/inventory.html');

    expect(routeIntercepted).toBeTruthy();

    await expect(
        page.getByText('Mock Inventory')
    ).toBeVisible();
});