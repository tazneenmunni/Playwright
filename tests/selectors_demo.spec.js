import { test, expect } from '@playwright/test'

test('Selectors Demo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/v1/')
    await page.pause()
    //using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Edison')
    await page.locator('[id="user-name"]').fill('Imran')
    //using CSS Selectors
    //#login-button
    await page.locator('#login-button').click()
    //await page.pause()
    //using xpath
    //await page.locator('//input[@name="password"]').fill('Faraday')
    await page.locator('xpath=//input[@name="password"]').fill('Taz123')
    //using text
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()
})