import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Header section is visible and btns are editable', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded');
  const header = page.locator('[data-testid="app-header"]');
  await expect(header).toBeVisible(); // header to be visibile
  await expect(header.getByTestId('app-logo')).toBeVisible();
  // assertion of header static informations
  await expect(header.getByTestId('browse-btn')).toHaveText('Browse');
  await expect(header.getByTestId('events-btn')).toBeEditable();
  await expect(header.getByTestId('create-btn')).toBeEditable();
  await expect(header.getByTestId('leaderboard-btn')).toBeEditable();
  await expect(header.getByTestId('ideas-btn')).toBeEditable();
  await expect(header.getByTestId('github-btn')).toBeEditable();
  await expect(header.getByTestId('twitter-btn')).toBeEditable();
  await expect(header.getByTestId('discord-btn')).toBeEditable();
  await expect(header.getByTestId('share-btn')).toBeEditable();
});

test('learn/create/socialize section should render and assert strings', async ({ page }) => {
  const featuresSection = page.locator('[class="home-features"]');
  await featuresSection.scrollIntoViewIfNeeded();
  await expect(featuresSection).toBeInViewport();
  // learn
  await expect(featuresSection.getByText('Learn how to')).toBeVisible();
  const learnString = featuresSection.getByText('Learn how to');
  await expect(learnString).toContainText(
    'Learn how to "Think in React" and build applications inspired by several plays(source code & demos). Get to the source code of it, find related article, or even a YouTube video. Learn from the expert code reviews.'
  );

  // create
  await expect(featuresSection.getByText(' Create your own plays')).toBeVisible();
  const createStr = featuresSection.getByText(' Create your own plays');
  await expect(createStr).toContainText(
    'Create your own plays and own them by following a few simple steps. Learned something new? Perfect to present as a play. You can also contribute to the existing plays. Your play will be reviewed by the experts before being made public'
  );
  // socialize
  await expect(featuresSection.getByText('Socialize Share your plays')).toBeVisible();
  const socializeStr = featuresSection.getByText('Socialize Share your plays');
  await expect(socializeStr).toContainText(
    'Share your plays with the community. The best way of building in public is by sharing the learning. You can share your plays on social media platforms like Facebook, Twitter, LinkedIn, to name a few, just with a single click.'
  );
});

test('Ideas section is visible & goes to proper /pages ', async ({ page }) => {
  const ideas = page.locator('[class="home-ideas"]');
  await ideas.scrollIntoViewIfNeeded();
  await expect(ideas).toBeInViewport();
  await expect(ideas).toContainText(
    'Not sure how to get started?We have got lot of ideasGet started with some ideas'
  );

  // navigation works
  await ideas.getByRole('link', { name: 'Get started with some ideas' }).click();
  expect(page.url()).toMatch(/ideas/);
  await page.goBack();
});

test.only('Trending Plays section is visible, has four view, is clickable & goes to proper /pages ', async ({
  page
}) => {
  await page.pause();
});
