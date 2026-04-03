import type { Locator, Page } from "@playwright/test"

export class LoginPage {
	readonly page: Page
	readonly usernameInput: Locator
	readonly passwordInput: Locator
	readonly loginButton: Locator
	readonly errorMessage: Locator

	constructor(page: Page) {
		this.page = page
		this.usernameInput = page.locator('[data-test="username"]')
		this.passwordInput = page.locator('[data-test="password"]')
		this.loginButton = page.locator('[data-test="login-button"]')
		this.errorMessage = page.locator('[data-test="error"]')
	}

	async navigate() {
		await this.page.goto("https://www.saucedemo.com/")
	}

	async fillUsername(username: string) {
		await this.usernameInput.fill(username)
	}

	async fillPassword(password: string) {
		await this.passwordInput.fill(password)
	}

	async clickLogin() {
		await this.loginButton.click()
	}

	async getErrorMessage(): Promise<string> {
		return await this.errorMessage.innerText()
	}
}
