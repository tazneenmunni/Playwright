const { test, expect } = require('@playwright/test')

// const { hello, helloWorld } = require('./demo/hello')

// //import { hello, helloWorld } from './demo/hello.js'
// console.log(helloWorld())

test('My first test', async ({ page }) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')

})