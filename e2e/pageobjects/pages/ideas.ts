import { Locator, Page, expect } from '@playwright/test';

export class Ideas {
  ideasPageHeader: Locator;
  ideasPageHeading: Locator;
  ideasPageHeaderStr: Locator;
  ideasPageAllStrToggle: Locator;
  ideasPageBeginnertoggle: Locator;
  ideasPageIntermidiateToggle: Locator;
  ideasPageAdvancedToggle: Locator;
  ideasPageHeaderBadgeCounter: Locator;
  ideasPageCards: Locator;
  constructor(page: Page) {
    this.ideasPageHeader = page.locator('[class="playideas-header"]');
    this.ideasPageHeading = this.ideasPageHeader.getByRole('heading', { name: 'Play Ideas' });
    this.ideasPageHeaderStr = this.ideasPageHeader.getByText('Looking for project ideas to');
    this.ideasPageAllStrToggle = this.ideasPageHeader.getByText('All', { exact: true });
    this.ideasPageBeginnertoggle = this.ideasPageHeader.getByText('BEGINNER', { exact: true });
    this.ideasPageIntermidiateToggle = this.ideasPageHeader.getByText('INTERMEDIATE', {
      exact: true
    });
    this.ideasPageAdvancedToggle = this.ideasPageHeader.getByText('ADVANCED', { exact: true });
    this.ideasPageHeaderBadgeCounter = this.ideasPageHeader.locator('[class="header-title-badge"]');
    this.ideasPageCards = page.locator('[class="idea-actions"]');
  }

  async cardMatchwithBadgeinHeader() {
    const ideasPageCardsConvert = await this.ideasPageCards.count();
    const ideasPageCardsConvertStr = ideasPageCardsConvert.toString();
    const counterOnHeader = await this.ideasPageHeaderBadgeCounter.innerText();
    expect(ideasPageCardsConvertStr).toEqual(counterOnHeader);
  }
}
