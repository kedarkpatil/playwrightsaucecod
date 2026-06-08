import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { ProductsPage } from '../../page-objects/ProductsPage';

test.describe('Visual Regression Tests', () => {

    test('Inventory page visual validation', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        await loginPage.navigate();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await productsPage.verifyProductsPage();

        await expect(page).toHaveScreenshot(
            'inventory-page.png',
            {
                fullPage: true
            }
        );
    });

});