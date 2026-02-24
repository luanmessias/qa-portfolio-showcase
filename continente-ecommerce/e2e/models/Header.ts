import type { Locator, Page } from "@playwright/test"

export class Header {
	readonly page: Page
	readonly searchInput: Locator
	readonly cartCounter: Locator
	readonly cartLink: Locator

	constructor(page: Page) {
		this.page = page
		this.searchInput = page.locator("#input-custom-label-search")
		this.cartLink = page.getByRole("link", { name: "Carrinho" })
		this.cartCounter = page.locator(".minicart-quantity")
	}

	async searchForProduct(productName: string) {
		await this.searchInput.click()
		await this.searchInput.fill(productName)
		await this.searchInput.press("Enter")
	}

	async getCartCount() {
		const counter = this.cartCounter.first()
		await counter.waitFor({ state: "visible", timeout: 7000 })
		return await counter.innerText()
	}
}
