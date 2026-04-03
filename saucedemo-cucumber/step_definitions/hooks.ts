import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber"
import {
	type Browser,
	type BrowserContext,
	chromium,
	type Page
} from "@playwright/test"

let browser: Browser
let context: BrowserContext
export let page: Page

BeforeAll(async () => {
	browser = await chromium.launch({ headless: false })
})

Before(async () => {
	context = await browser.newContext()
	page = await context.newPage()
})

After(async () => {
	await page.close()
	await context.close()
})

AfterAll(async () => {
	await browser.close()
})
