import { test, expect } from '@playwright/test';
import { Home } from '../pageobjects/pages/home';
import { Constant } from '../pageobjects/enums/constant';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
});

test('Header section is visible and btns are editable', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded');
  const home = new Home(page);
  await expect(home.header).toBeVisible(); // header to be visibile
  await home.headerVisibleClickable();
});

test('learn/create/socialize section should render and assert strings', async ({ page }) => {
  const features = new Home(page);
  await features.featuresSection.scrollIntoViewIfNeeded();
  await expect(features.featuresSection).toBeInViewport();
  // learn
  await expect(features.learnHowTo).toBeVisible();
  await expect(features.learnHowTo).toContainText(
    'Learn how to "Think in React" and build applications inspired by several plays(source code & demos). Get to the source code of it, find related article, or even a YouTube video. Learn from the expert code reviews.'
  );

  // create
  await expect(features.createYourPlays).toBeVisible();
  await expect(features.createYourPlays).toContainText(
    'Create your own plays and own them by following a few simple steps. Learned something new? Perfect to present as a play. You can also contribute to the existing plays. Your play will be reviewed by the experts before being made public'
  );
  // socialize
  await expect(features.socializeYourPlays).toBeVisible();
  await expect(features.socializeYourPlays).toContainText(
    'Share your plays with the community. The best way of building in public is by sharing the learning. You can share your plays on social media platforms like Facebook, Twitter, LinkedIn, to name a few, just with a single click.'
  );
});

test('Ideas section is visible & goes to proper /pages ', async ({ page }) => {
  const ideasSection = new Home(page);
  await ideasSection.ideas.scrollIntoViewIfNeeded();
  await expect(ideasSection.ideas).toBeInViewport();
  await expect(ideasSection.ideas).toContainText(
    'Not sure how to get started?We have got lot of ideasGet started with some ideas'
  );

  // navigation works
  await ideasSection.ideas.getByRole('link', { name: 'Get started with some ideas' }).click();
  expect(page.url()).toMatch(/ideas/);
  await page.goBack();
});

test('Trending Plays section is visible, has four view & goes to proper /pages ', async ({
  page
}) => {
  const playsSection = new Home(page);
  await playsSection.plays.scrollIntoViewIfNeeded();
  await expect(playsSection.playsTitle).toContainText('Trending Plays');
  await page.waitForLoadState('networkidle');
  // counts cards based on four links & added "View all play string" makes it five
  const cardCount = playsSection.playsLink.count();
  expect(await cardCount).toEqual(Constant.TRENDING_PLAYS_CARD_COUNT);
  // nav check
  await playsSection.viewAllPlays.click();
  expect(page.url()).toMatch(/plays/);
  await page.goBack();
});

test('What our section - testimonials is visible, slider is clickable & str to proper /pages ', async ({
  page
}) => {
  const testimonialsSection = new Home(page);
  await testimonialsSection.testimonials.scrollIntoViewIfNeeded();
  await page.waitForLoadState('networkidle');
  await expect(testimonialsSection.testimonialsTitle).toContainText('What Our Community Says!');
  // pagination swipier check
  await expect(testimonialsSection.swiperPagination).toBeEditable();
  await expect(testimonialsSection.swiperinitialized).toBeVisible();
  // nav check
  await testimonialsSection.viewAllTestimonial.click();
  expect(page.url()).toMatch(/testimonials/);
  await page.goBack();
});

test('big thanks to Contributors is visible ', async ({ page }) => {
  const contributorsSection = new Home(page);
  await contributorsSection.contributors.scrollIntoViewIfNeeded();
  await page.waitForLoadState('networkidle');
  expect(contributorsSection.contributors).toBeInViewport;
  await expect(contributorsSection.contributorsTitle).toContainText(
    'Big Thanks to All Contributors!'
  );
});
test('Our Partners & Sponsors is visible, links are clickable and has links ', async ({ page }) => {
  const partnersSponsersSection = new Home(page);
  await partnersSponsersSection.partnersSponsers.scrollIntoViewIfNeeded();
  await page.waitForLoadState('networkidle');
  expect(partnersSponsersSection.partnersSponsers).toBeInViewport;
  await expect(partnersSponsersSection.partnersSponsersTitle).toContainText(
    'OurPartners & Sponsors'
  );
  // total 10 links presents check
  expect(await partnersSponsersSection.partnersSponsersLinks.count()).toEqual(
    Constant.PARTNERS_SPONSERS_LINKS_COUNT
  );

  // backers
  await expect(partnersSponsersSection.partnersSponsersBackersContainers).toContainText('Backers');
  await expect(partnersSponsersSection.partnersSponsersSupport).toContainText(
    'Support us with any monthly sponsorship. Your help means a lot to us. We will give you a shoutout and add you here.'
  );
  await expect(partnersSponsersSection.partnersSponsersPrime).toContainText('Prime Sponsors');
  await expect(partnersSponsersSection.partnersSponsersBePrime).toContainText(
    'Be a prime sponsor of ReactPlay. Your sponsorship will go a long way, and we will place you in our internal events, newsletters and here on the homepage.'
  );
});

test('footer is visible, links are clickable and has links ', async ({ page }) => {
  const footer = new Home(page);
  await footer.appFooter.scrollIntoViewIfNeeded();
  await page.waitForLoadState('networkidle');
  expect(footer.appFooter).toBeInViewport;
  await footer.footerVisibleClickable();
});
