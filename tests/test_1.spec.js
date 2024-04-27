const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Browse LambdaTest in different search engines', () => {
  test('Search LambdaTest on DuckDuckGo', async ({ page }) => {
    
    await page.goto('https://duckduckgo.com')
    let element = await page.locator("#searchbox_input");
    await element.click();
    await element.fill("LambdaTest");
    await element.press("Enter");
    const title = await page.title()
    await page.waitForTimeout(3000)
    console.log('Page title:: ', title)
    // Use the expect API for assertions provided by playwright
    expect(title).toEqual(expect.stringContaining('LambdaTest'))
  })
})