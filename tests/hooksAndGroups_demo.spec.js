import { test, expect } from '@playwright/test'

test.describe('All my tests', () => {


    test('Login', async ({ page }) => {


        await page.goto('https://www.saucedemo.com/v1/')
        await page.locator('[data-test="username"]').fill('problem_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await page.close()

    })
    // test.afterAll(async ({ page }) => {
    //     await page.close()
    // })

    test('Home Page', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/v1/')
        await page.locator('[data-test="username"]').fill('problem_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();


        //await page.pause()

        await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
        await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
        await page.getByRole('button', { name: 'ADD TO CART' }).first().click();
        await page.getByRole('link', { name: 'Sauce Labs Fleece Jacket' }).click();
        await page.getByRole('button', { name: 'ADD TO CART' }).click();
        await page.close()
    })

    test('Logout', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/v1/')
        await page.locator('[data-test="username"]').fill('problem_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        await page.close()

    })
})