import { expect, test } from "@playwright/test"
import { CookieBanner } from "../models/CookieBanner"
import { Header } from "../models/Header"
import { SearchResults } from "../models/SearchResults"

test.describe("Gestão de Carrinho (SCRUM-6)", () => {
	test("Deve buscar um produto e adicionar ao carrinho com sucesso", async ({
		page
	}) => {
		const cookieBanner = new CookieBanner(page)
		const header = new Header(page)
		const searchResults = new SearchResults(page)

		await test.step("DADO que estou na página inicial e aceito os cookies", async () => {
			await page.goto("https://www.continente.pt/")
			await cookieBanner.acceptIfVisible()
		})

		await test.step('QUANDO eu pesquiso por "Arroz Agulha"', async () => {
			await header.searchForProduct("Arroz Agulha")
		})

		await test.step('E clico no botão "Adicionar" no primeiro resultado', async () => {
			await searchResults.addFirstProductToCart()
		})

		await test.step("ENTÃO devo ver a quantidade de itens no carrinho ser 1", async () => {
			await expect(header.cartCounter.first()).toBeVisible({ timeout: 15000 })
			await expect(header.cartCounter.first()).toHaveText("1", {
				timeout: 10000
			})
		})
	})
})
