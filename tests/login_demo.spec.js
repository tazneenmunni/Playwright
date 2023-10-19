import { test, expect } from '@playwright/test'

test('Demo Login Test 1', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.getByPlaceholder('Enter your username').fill("tazneen")
    await page.getByPlaceholder('Enter your password').fill("123")

    //await page.waitForSelector('link', { name: 'Sign in' }, { timeout: 5000 })
    await page.getByRole('link', { name: 'Sign in' }).click()
})

test.only('Demo Login Test 2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //await page.pause()
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('span').filter({ hasText: 'Paul Anto Collings' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();


})
