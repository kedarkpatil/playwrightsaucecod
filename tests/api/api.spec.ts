import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {

    test('Validate SauceDemo login page response', async ({ request }) => {

        const response = await request.get(
            'https://www.saucedemo.com/'
        );

        expect(response.status()).toBe(200);

        const body = await response.text();

        expect(body).toContain('Swag Labs');
    });

    test('Verify home page API response', async ({ request }) => {

    const response = await request.get(
        'https://www.saucedemo.com'
    );

    expect(response.ok()).toBeTruthy();

    expect(response.status()).toBe(200);
});

});