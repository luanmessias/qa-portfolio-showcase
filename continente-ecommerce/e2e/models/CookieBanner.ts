import type { Locator, Page } from "@playwright/test"

export class CookieBanner {
	readonly page: Page
	readonly acceptAllButton: Locator
	readonly cookieDialog: Locator

	constructor(page: Page) {
		this.page = page
		this.cookieDialog = page.locator("#CybotCookiebotDialog")
		this.acceptAllButton = page.getByRole("button", { name: /permitir todos/i })
	}

	async acceptIfVisible() {
		try {
			await this.cookieDialog.waitFor({ state: "visible", timeout: 10000 })
			await this.acceptAllButton.click()
			await this.cookieDialog.waitFor({ state: "hidden", timeout: 5000 })
		} catch (_error) {
			console.log("Banner de cookies não apareceu ou já foi aceite.")
		}
	}
}
