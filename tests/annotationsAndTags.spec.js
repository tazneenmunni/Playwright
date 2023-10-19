import { test } from '@playwright/test'

test.skip('skip this test', async ({ page }) => {
    // This test will be skipped
});

test('not yet ready', async ({ page }) => {
    //await page.goto('https://google/com')
    test.fail();

});

test.fixme('test to be fixed', async ({ page }) => {

});
test('slow test', async ({ page }) => {
    test.slow();
});

//Tags
test('Test LoginPage @smoke', async ({ page }) => {

})