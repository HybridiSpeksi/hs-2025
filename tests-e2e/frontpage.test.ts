import { expect, test } from '@playwright/test'

test('home page has expected h1', async ({ page }) => {
	await page.goto('/')
	await expect(page.getByAltText('Taustakerros 1')).toBeVisible()
	await expect(page.getByAltText('kasvit')).toBeVisible()
	await expect(page.getByAltText('tatu')).toBeVisible()
})
