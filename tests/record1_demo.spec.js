import { test, expect, defineConfig } from '@playwright/test';

test('record demo test', async ({ page }) => {
    test.setTimeout(120000);
    await page.locator('body').click();
    //await page.locator('body').click({ timeout: 60000 });
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="password"]').click();
    await page.locator('#login_button_container div').nth(3).click();
    await page.getByText('Accepted usernames are:standard_userlocked_out_userproblem_userperformance_glitc').click();
    await page.getByText('Accepted usernames are:standard_userlocked_out_userproblem_userperformance_glitc').click();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button45654"]').click();
    await page.locator('[data-test="login-button45654"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
});