import type { Locator, Page } from "@playwright/test"

export class SearchResults {
	readonly page: Page
	readonly firstProduct: Locator
	readonly firstProductAddButton: Locator

	constructor(page: Page) {
		this.page = page
		this.firstProduct = page
			.locator(".productTile:not(.product-tile-loaded-sponsored)")
			.first()
		this.firstProductAddButton = this.firstProduct.getByRole("button", {
			name: "Adicionar ao carrinho"
		})
	}

	async addFirstProductToCart() {
		await this.firstProduct.waitFor({ state: "visible", timeout: 10000 })
		await this.firstProductAddButton.scrollIntoViewIfNeeded()
		await this.page.waitForTimeout(500)
		await this.page.evaluate(() => window.scrollBy(0, -200))
		await this.page.waitForTimeout(500)
		await this.firstProductAddButton.click()
		await this.page.waitForTimeout(3000)
	}
}
