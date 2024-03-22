import { Locator, Page, expect } from '@playwright/test';

export class Home {
  header: Locator;
  appLogo: Locator;
  browseBth: Locator;
  createBtn: Locator;
  eventBtn: Locator;
  leaderboardBtn: Locator;
  ideasBtn: Locator;
  githubBtn: Locator;
  twitterBtn: Locator;
  discordBtn: Locator;
  shareBtn: Locator;
  featuresSection: Locator;
  learnHowTo: Locator;
  createYourPlays: Locator;
  socializeYourPlays: Locator;
  ideas: Locator;
  plays: Locator;
  playsTitle: Locator;
  playsLink: Locator;
  viewAllPlays: Locator;
  testimonials: Locator;
  testimonialsTitle: Locator;
  swiperPagination: Locator;
  swiperinitialized: Locator;
  viewAllTestimonial: Locator;
  contributors: Locator;
  contributorsTitle: Locator;
  partnersSponsers: Locator;
  partnersSponsersTitle: Locator;
  partnersSponsersLinks: Locator;
  partnersSponsersBackersContainers: Locator;
  partnersSponsersSupport: Locator;
  partnersSponsersPrime: Locator;
  partnersSponsersBePrime: Locator;
  appFooter: Locator;
  appFooterPrimaryStr: Locator;
  appFooterAboutStr: Locator;
  appFooterShowLove: Locator;
  appFooterShareReactPlay: Locator;
  appFooterModal: Locator;
  appFooterModalCancel: Locator;
  constructor(page: Page) {
    this.header = page.locator('[data-testid="app-header"]');
    this.appLogo = this.header.getByTestId('app-logo');
    this.browseBth = this.header.getByTestId('browse-btn');
    this.eventBtn = this.header.getByTestId('events-btn');
    this.createBtn = this.header.getByTestId('create-btn');
    this.leaderboardBtn = this.header.getByTestId('leaderboard-btn');
    this.ideasBtn = this.header.getByTestId('ideas-btn');
    this.githubBtn = this.header.getByTestId('github-btn');
    this.twitterBtn = this.header.getByTestId('twitter-btn');
    this.discordBtn = this.header.getByTestId('discord-btn');
    this.shareBtn = this.header.getByTestId('share-btn');
    this.featuresSection = page.locator('[class="home-features"]');
    this.learnHowTo = this.featuresSection.getByText('Learn how to');
    this.createYourPlays = this.featuresSection.getByText(' Create your own plays');
    this.socializeYourPlays = this.featuresSection.getByText('Socialize Share your plays');
    this.ideas = page.locator('[class="home-ideas"]');
    this.plays = page.locator('[class="home-plays"]');
    this.playsTitle = this.plays.locator('[class="plays-title-primary"]');
    this.playsLink = this.plays.getByRole('link');
    this.viewAllPlays = this.plays.getByRole('link', { name: 'View all Plays' });
    this.testimonials = page.locator('[class="testimonials"]');
    this.testimonialsTitle = this.testimonials.locator('[class="title-primary"]');
    this.swiperPagination = this.testimonials.locator('.swiper-pagination');
    this.swiperinitialized = this.testimonials.locator('[class*="swiper swiper-initialized"]');
    this.viewAllTestimonial = this.testimonials.getByRole('link', {
      name: 'View all Testimonials'
    });
    this.contributors = page.locator('[data-testid="contributors-section"]');
    this.contributorsTitle = this.contributors.locator('[class="title-primary"]');
    this.partnersSponsers = page.locator('[data-testid="sponsors-section"]');
    this.partnersSponsersTitle = this.partnersSponsers.locator('[class="title-primary"]');
    this.partnersSponsersLinks = this.partnersSponsers.getByRole('link');
    this.partnersSponsersBackersContainers = this.partnersSponsers.locator(
      '[class="backers-container"]'
    );
    this.partnersSponsersSupport = this.partnersSponsers.getByText('Support us with any monthly');
    this.partnersSponsersPrime = this.partnersSponsers.locator(
      '[class="prime-sponsors-container"]'
    );
    this.partnersSponsersBePrime = this.partnersSponsers.getByText('Be a prime sponsor of');
    this.appFooter = page.locator('[class="app-footer--home app-footer"]');
    this.appFooterPrimaryStr = this.appFooter.locator('[class="body-primary"]');
    this.appFooterAboutStr = this.appFooter.getByRole('heading', { name: 'About' });
    this.appFooterShowLove = this.appFooter.getByRole('heading', { name: 'Show love' });
    this.appFooterShareReactPlay = this.appFooter.getByRole('button', {
      name: 'Share about ReactPlay'
    });
    this.appFooterModal = page.locator('[class*="modal-share"]').nth(0);
    this.appFooterModalCancel = page.getByRole('button', { name: 'Cancel' });
  }

  async headerVisibleClickable() {
    await expect(this.appLogo).toBeVisible();
    // assertion of header static informations
    await expect(this.browseBth).toHaveText('Browse');
    await expect(this.eventBtn).toBeEditable();
    await expect(this.createBtn).toBeEditable();
    await expect(this.leaderboardBtn).toBeEditable();
    await expect(this.ideasBtn).toBeEditable();
    await expect(this.githubBtn).toBeEditable();
    await expect(this.twitterBtn).toBeEditable();
    await expect(this.discordBtn).toBeEditable();
    await expect(this.shareBtn).toBeEditable();
  }

  async footerVisibleClickable() {
    await expect(this.appFooterPrimaryStr).toContainText(
      'An open-source project made with ❤️ by team ReactPlay.'
    );
    await expect(this.appFooterAboutStr).toBeVisible();
    await expect(this.appFooterShowLove).toBeVisible();
    // total 14 links
    expect(await this.appFooter.getByRole('link').count()).toEqual(14);
    await this.appFooterShareReactPlay.click();
    await expect(this.appFooterModal).toBeVisible();
    await this.appFooterModalCancel.click();
  }
}
