import { test, expect, chromium } from '@playwright/test'


test('Slow motion and video recording demo', async () => {

    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });

    const context = await browser.newContext({
        recordVideo: {
            dir: '/videos/',
            size: {
                width: 800,
                height: 600
            }
        }
    });

    const page = await browser.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //await page.pause()
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    //await page.locator('span').filter({ hasText: 'Paul Anto Collings' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

    await context.close()
})