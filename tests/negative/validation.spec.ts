import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { CheckoutPage } from '../../page-objects/CheckoutPage';


test('Login without username and password', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login('', '');

  await expect(
    loginPage.errorMessage
  ).toBeVisible();
});

test('Checkout with empty first name', async ({ page }) => {

  await page.goto('/');

  await page.getByPlaceholder('Username')
    .fill('standard_user');

  await page.getByPlaceholder('Password')
    .fill('secret_sauce');

  await page.getByRole('button', {
    name: 'Login'
  }).click();

  await page.getByRole('button', {
    name: 'Add to cart'
  }).first().click();

  await page.locator('.shopping_cart_link')
    .click();

  await page.getByRole('button', {
    name: 'Checkout'
  }).click();

  await page.getByPlaceholder('Last Name')
    .fill('Doe');

  await page.getByPlaceholder('Zip/Postal Code')
    .fill('12345');

  await page.getByRole('button', {
    name: 'Continue'
  }).click();

  await expect(
    page.locator('[data-test="error"]')
  ).toBeVisible();
});