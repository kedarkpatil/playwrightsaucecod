import { test, expect } from '@playwright/test';

import { LoginPage } from '../../page-objects/LoginPage';
import { loginData } from '../../test-data/credentials';

for (const data of loginData) {

  test(`Login using ${data.username}`, async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      data.username,
      data.password
    );

    if (data.expected === 'success') {
      await loginPage.verifySuccessfulLogin();
    } else {
      await expect(
        loginPage.errorMessage
      ).toBeVisible();
    }
  });
}