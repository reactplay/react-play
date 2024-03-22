import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
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

test('Trending Plays section is visible, has four view & goes to proper /pages ', async ({
  page
}) => {
  const plays = page.locator('[class="home-plays"]');
  await plays.scrollIntoViewIfNeeded();
  await expect(plays.locator('[class="plays-title-primary"]')).toContainText('Trending Plays');
  await page.waitForLoadState('networkidle');
  // counts cards based on four links & added "View all play string" makes it five
  const cardCount = plays.getByRole('link').count();
  expect(await cardCount).toEqual(5);
  // nav check
  await plays.getByRole('link', { name: 'View all Plays' }).click();
  expect(page.url()).toMatch(/plays/);
  await page.goBack();
});

test('What our section - testimonials is visible, slider is clickable & str to proper /pages ', async ({
  page
}) => {
  const testimonials = page.locator('[class="testimonials"]');
  await testimonials.scrollIntoViewIfNeeded();
  await page.waitForLoadState('networkidle');
  await expect(testimonials.locator('[class="title-primary"]')).toContainText(
    'What Our Community Says!'
  );
  // pagination swipier check
  await expect(testimonials.locator('.swiper-pagination')).toBeEditable();
  await expect(testimonials.locator('[class*="swiper swiper-initialized"]')).toBeVisible();
  // nav check
  await testimonials.getByRole('link', { name: 'View all Testimonials' }).click();
  expect(page.url()).toMatch(/testimonials/);
  await page.goBack();
});

test('big thanks to Contributors is visible ', async ({ page }) => {
  const contributors = page.locator('[data-testid="contributors-section"]');
  await contributors.scrollIntoViewIfNeeded();
  await page.waitForLoadState('networkidle');
  expect(contributors).toBeInViewport;
  await expect(contributors.locator('[class="title-primary"]')).toContainText(
    'Big Thanks to All Contributors!'
  );
});
test('Our Partners & Sponsors is visible, links are clickable and has links ', async ({ page }) => {
  const partnersSponsers = page.locator('[data-testid="sponsors-section"]');
  await partnersSponsers.scrollIntoViewIfNeeded();
  await page.waitForLoadState('networkidle');
  expect(partnersSponsers).toBeInViewport;
  await expect(partnersSponsers.locator('[class="title-primary"]')).toContainText(
    'OurPartners & Sponsors'
  );
  // total 10 links presents check
  expect(await partnersSponsers.getByRole('link').count()).toEqual(10);

  // backers
  await expect(partnersSponsers.locator('[class="backers-container"]')).toContainText('Backers');
  await expect(partnersSponsers.getByText('Support us with any monthly')).toContainText(
    'Support us with any monthly sponsorship. Your help means a lot to us. We will give you a shoutout and add you here.'
  );
  await expect(partnersSponsers.locator('[class="prime-sponsors-container"]')).toContainText(
    'Prime Sponsors'
  );
  await expect(partnersSponsers.getByText('Be a prime sponsor of')).toContainText(
    'Be a prime sponsor of ReactPlay. Your sponsorship will go a long way, and we will place you in our internal events, newsletters and here on the homepage.'
  );
});

test('footer is visible, links are clickable and has links ', async ({ page }) => {
  const partnersSponsers = page.locator('[class="app-footer--home app-footer"]');
  await partnersSponsers.scrollIntoViewIfNeeded();
  await page.waitForLoadState('networkidle');
  expect(partnersSponsers).toBeInViewport;
  await expect(partnersSponsers.locator('[class="body-primary"]')).toContainText(
    'An open-source project made with ❤️ by team ReactPlay.'
  );
  await expect(partnersSponsers.getByRole('heading', { name: 'About' })).toBeVisible();
  await expect(partnersSponsers.getByRole('heading', { name: 'Show love' })).toBeVisible();
  // total 14 links
  expect(await partnersSponsers.getByRole('link').count()).toEqual(14);
  await partnersSponsers.getByRole('button', { name: 'Share about ReactPlay' }).click();
  await expect(page.locator('[class*="modal-share"]').nth(0)).toBeVisible();
  await page.getByRole('button', { name: 'Cancel' }).click();
});
