import { test, expect } from '@playwright/test';
import { Plays } from '../pageobjects/pages/plays';

test.beforeEach(async ({ page }) => {
  await page.goto('/plays');
  await page.waitForLoadState('networkidle');
});

test('search functionaliy is visible and filter options is functions properly', async ({
  page
}) => {
  const playsPage = new Plays(page);
  await expect(playsPage.searchBoxContainer).toBeVisible();
  await expect(playsPage.searchBoxFilter).toBeVisible();
  // assertion of all filter modal fields
  await playsPage.filterModalAssertions();
  await playsPage.searchBoxInputField.fill('testin e2e tests with react play');
  await expect(playsPage.oopsErrorPlaynotFound).toBeVisible();
  await playsPage.oopsErrorPlaynotFoundClear.click();
});

test('play btn is editable, header is visible & user can nav back and forth using the btn', async ({
  page
}) => {
  const playsPage = new Plays(page);
  await expect(playsPage.searchBoxContainer).toBeVisible();
  await expect(playsPage.searchBoxFilter).toBeVisible();
  // assertion of all filter modal fields
  await playsPage.filterModalAssertions();
  await expect(playsPage.dynamicBannerContainer).toBeVisible();
  await expect(playsPage.dynamicBannerContainerPlayBtn).toBeEditable();
  await playsPage.dynamicBannerContainerPlayBtn.click();
  await page.goBack();
});

test('sort by section is functional ', async ({ page }) => {
  const playsPage = new Plays(page);
  await expect(playsPage.searchBoxContainer).toBeVisible();
  await expect(playsPage.searchBoxFilter).toBeVisible();

  await expect(playsPage.sortByPlayswrapper).toBeVisible();
  await expect(playsPage.sortByPlaysNewest).not.toBeVisible();
  await expect(playsPage.sortByPlaysOldest).not.toBeVisible();
  await expect(playsPage.sortByPlaysMostLiked).not.toBeVisible();
  await expect(playsPage.sortByPlaysRandom).not.toBeVisible();
});

test('Randomly click on some cards and return to the plays page', async ({ page }) => {
  const playsPage = new Plays(page);
  await expect(playsPage.searchBoxContainer).toBeVisible();
  await expect(playsPage.searchBoxFilter).toBeVisible();
  await expect(playsPage.listOfPlays).toBeVisible();

  const allCards = playsPage.listOfPlays.locator('a');
  const numberOfCards = await allCards.count();
  const numberOfRandomClicks = 5;
  const randomIndices = Array.from({ length: numberOfRandomClicks }, () =>
    Math.floor(Math.random() * numberOfCards)
  );
  // Clicks on randomly selected cards
  for (const index of randomIndices) {
    await allCards.nth(index).click();
    await page.goBack();
  }
});
