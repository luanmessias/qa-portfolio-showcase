import { Given, Then, When } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { LoginPage } from "../models/pages/LoginPage"
import { page } from "./hooks"

let loginPage: LoginPage

Given("I access the Swag Labs login page", async () => {
	loginPage = new LoginPage(page)
	await loginPage.navigate()
})

When(
	"I fill in the username {string} and the password {string}",
	async (username, password) => {
		await loginPage.fillUsername(username)
		await loginPage.fillPassword(password)
	}
)

When("I click the Login button", async () => {
	await loginPage.clickLogin()
})

Then("I should be redirected to the products page", async () => {
	await expect(page).toHaveURL(/.*inventory.html/)
})

Then("I should see the title {string} at the top of the page", async title => {
	const titleElement = page.locator(".title")
	await expect(titleElement).toHaveText(title)
})

Then("I should see the error message {string}", async errorMessage => {
	const actualError = await loginPage.getErrorMessage()
	expect(actualError).toContain(errorMessage)
})
