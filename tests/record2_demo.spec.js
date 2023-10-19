import { test, expect, defineConfig } from '@playwright/test';
const { chromium } = require("@playwright/test");
test('record demo 2', async () => {
    test.setTimeout(120000);
    const browser = await chromium.launch({
        //headless: false
        headless: true
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.locator('body').click();
    await page.locator('body').click();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret+sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('svg').first().click();
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();

    // ---------------------
    await context.close();
    await browser.close();
});