import { Page, Locator, expect } from '@playwright/test';

export class CartPage {

    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly cartTitle: Locator;

    constructor(page: Page) {
        this.page = page;

        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.continueShoppingButton = page.getByRole('button', {
            name: 'Continue Shopping'
        });
        this.cartTitle = page.getByText('Your Cart');
    }

    async verifyCartPage() {
        await expect(this.cartTitle).toBeVisible();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}