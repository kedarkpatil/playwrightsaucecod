import { test } from '@playwright/test';

import { LoginPage } from '../../page-objects/LoginPage';
import { ProductsPage } from '../../page-objects/ProductsPage';
import { CartPage } from '../../page-objects/CartPage';
import { CheckoutPage } from '../../page-objects/CheckoutPage';
test('Complete Order Flow', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );
await productsPage.verifyProductsPage();

    await productsPage.addProductToCart();

    await productsPage.openCart();

    await cartPage.clickCheckout();

    await checkoutPage.completeCheckout(
        'John',
        'Doe',
        '411001'
    );
    await checkoutPage.verifyOrderSuccess();
});