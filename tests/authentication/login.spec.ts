import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { ProductsPage } from '../../page-objects/ProductsPage';
import { users, loginData } from '../../test-data/credentials';

test.describe('Authentication Tests', () => {

  test('TC-001 Login Authentication with valid username and password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );

    await loginPage.verifySuccessfulLogin();
  });

  test('Failed login with invalid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );

    await expect(
      loginPage.verifyErrorMessage()
    ).toBeTruthy();
  });

  test('Logout successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.navigate();

    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );

    await productsPage.logout();

    await expect(page).toHaveURL('/');
  });

});