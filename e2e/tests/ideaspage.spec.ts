import { test, expect } from '@playwright/test';
import { Home } from '../pageobjects/pages/home';
import { Ideas } from '../pageobjects/pages/ideas';

test.beforeEach(async ({ page }) => {
  await page.goto('/ideas');
  await page.waitForLoadState('domcontentloaded');
});

test('Header section is visible and btns are editable', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded');
  const home = new Home(page);
  await expect(home.header).toBeVisible(); // header to be visibile
  await home.headerVisibleClickable();
});

test('Ideas Page Header section is visible, btns are editable and count matchs with card number', async ({
  page
}) => {
  const headerIdeas = new Ideas(page);
  await expect(headerIdeas.ideasPageHeader).toBeVisible();
  await expect(headerIdeas.ideasPageHeading).toBeInViewport();
  await expect(headerIdeas.ideasPageHeaderStr).toContainText(
    'Looking for project ideas to practice React? Great, you have landed on the right place. Here are some ideas to get you started.'
  );
  // toggle btns
  await expect(headerIdeas.ideasPageAllStrToggle).toBeEditable();
  await expect(headerIdeas.ideasPageBeginnertoggle).toBeEditable();
  await expect(headerIdeas.ideasPageIntermidiateToggle).toBeEditable();
  await expect(headerIdeas.ideasPageAdvancedToggle).toBeEditable();
  // dynamically check counter on header
  await headerIdeas.cardMatchwithBadgeinHeader();
});

test('Beginner toggle is visible and count matchs with card number', async ({ page }) => {
  const headerIdeas = new Ideas(page);
  await headerIdeas.ideasPageBeginnertoggle.click();
  // checks counts
  await headerIdeas.cardMatchwithBadgeinHeader();
});

test('Intermidiate toggle is visible and count matchs with card number', async ({ page }) => {
  const headerIdeas = new Ideas(page);
  await headerIdeas.ideasPageIntermidiateToggle.click();
  // checks counts
  await headerIdeas.cardMatchwithBadgeinHeader();
});

test('Advanced toggle is visible and count matchs with card number', async ({ page }) => {
  const headerIdeas = new Ideas(page);
  await headerIdeas.ideasPageAdvancedToggle.click();
  // checks counts
  await headerIdeas.cardMatchwithBadgeinHeader();
});
