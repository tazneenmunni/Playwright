import test, { page, expect } from '@playwright/test'

test('Assertions Demo', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')
    //await page.pause()
    //ASSERTIONS
    //check element is present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    // await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

    // if (await page.$('heading', { name: 'The Kitchen' })) {
    //     await page.getByRole('heading', { name: 'The Kitchen' }).click
    // }

    // if (await page.$('text=The Kitchen')) {
    //     await page.locator('text=The Kitchen').click()
    // }

    //check element is hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    //check element enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

    //check text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    //await expect(page.locator('text=The kitchen')).not.toHaveText('The kitchen')

    //check attribute value
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)
    //check page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)
    await page.pause()
    //visual validation with screenshoot
    await expect(page).toHaveScreenshot()


})