import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {

    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly cartIcon: Locator;
    readonly burgerMenu: Locator;
    readonly logoutLink: Locator;
    readonly pageTitle: Locator;

    constructor(page: Page) {
        this.page = page;

        this.addToCartButton = page.locator('[data-test^="add-to-cart"]').first();
        this.cartIcon = page.locator('.shopping_cart_link');
        this.burgerMenu = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
        this.pageTitle = page.getByText('Products');
    }

    async verifyProductsPage() {
        await expect(this.pageTitle).toBeVisible();
    }

    async addProductToCart() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async logout() {
        await this.burgerMenu.click();
        await this.logoutLink.click();
    }
}