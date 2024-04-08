import { Locator, Page, expect } from '@playwright/test';

export class Plays {
  searchBoxContainer: Locator;
  searchBoxFilter: Locator;
  searchBoxFilterModal: Locator;
  searchBoxFilterModalHeading: Locator;
  searchBoxFilterModalText: Locator;
  searchBoxFilterModalLevels: Locator;
  searchBoxFilterModalTags: Locator;
  searchBoxFilterModalOwners: Locator;
  searchBoxFilterModalLanguages: Locator;
  searchBoxFilterModalTextInputField: Locator;
  searchBoxFilterModalLvlsInput: Locator;
  searchBoxFilterModalCancelBtn: Locator;
  searchBoxFilterModalApplyBtn: Locator;
  searchBoxInputField: Locator;
  oopsError: Locator;
  oopsErrorPlaynotFound: Locator;
  oopsErrorPlaynotFoundClear: Locator;
  dynamicBannerContainer: Locator;
  dynamicBannerContainerPlayBtn: Locator;
  sortByPlayswrapper: Locator;
  sortByPlays: Locator;
  sortByPlaysNewest: Locator;
  sortByPlaysOldest: Locator;
  sortByPlaysMostLiked: Locator;
  sortByPlaysRandom: Locator;
  listOfPlays: Locator;
  constructor(page: Page) {
    this.searchBoxContainer = page.getByTestId('plays-search-box-container');
    this.searchBoxFilter = this.searchBoxContainer.getByRole('button', { name: 'Filter Plays' });
    this.searchBoxFilterModal = page.locator('[class="modal-filter"]');
    this.searchBoxFilterModalHeading = this.searchBoxFilterModal.getByRole('heading', {
      name: 'Filter Plays By'
    });
    this.searchBoxFilterModalText = this.searchBoxFilterModal.getByText('Text', { exact: true });
    this.searchBoxFilterModalLevels = this.searchBoxFilterModal.getByText('Levels');
    this.searchBoxFilterModalTags = this.searchBoxFilterModal.getByText('Tags');
    this.searchBoxFilterModalOwners = this.searchBoxFilterModal.getByText('Owners');
    this.searchBoxFilterModalLanguages = this.searchBoxFilterModal.getByText('Languages');
    this.searchBoxFilterModalCancelBtn = this.searchBoxFilterModal.getByRole('button', {
      name: 'Cancel'
    });
    this.searchBoxFilterModalApplyBtn = this.searchBoxFilterModal.getByRole('button', {
      name: 'Apply'
    });
    this.searchBoxInputField = page.getByTestId('plays-search-box-input-field');
    this.oopsError = page.getByText('OOPS!Play not foundYou migh');
    this.oopsErrorPlaynotFound = this.oopsError.getByText('Play not found');
    this.oopsErrorPlaynotFoundClear = this.oopsError.getByRole('link', { name: 'clear' });
    this.dynamicBannerContainer = page.locator('[class="dynamic-banner-container"]');
    this.dynamicBannerContainerPlayBtn = page.getByRole('button', { name: "Let's Play" });
    this.sortByPlayswrapper = page.locator('[class="sort-by-plays-wrapper"]');
    this.sortByPlays = this.sortByPlayswrapper.locator('#sort-by-plays');
    this.sortByPlaysNewest = this.sortByPlayswrapper.locator('[value="Newest"]');
    this.sortByPlaysOldest = this.sortByPlayswrapper.locator('[value="Oldest"]');
    this.sortByPlaysMostLiked = this.sortByPlayswrapper.locator('[value="Most Liked"]');
    this.sortByPlaysRandom = this.sortByPlayswrapper.locator('[value="Random"]');
    this.listOfPlays = page.locator('[class="list-plays"]');
  }
  async filterModalAssertions() {
    await this.searchBoxFilter.click();
    await expect(this.searchBoxFilterModalHeading).toBeVisible();
    await expect(this.searchBoxFilterModalText).toBeVisible();
    await expect(this.searchBoxFilterModalLevels).toBeVisible();
    await expect(this.searchBoxFilterModalTags).toBeVisible();
    await expect(this.searchBoxFilterModalOwners).toBeVisible();
    await expect(this.searchBoxFilterModalLanguages).toBeVisible();
    await expect(this.searchBoxFilterModalCancelBtn).toBeEditable();
    await expect(this.searchBoxFilterModalApplyBtn).toBeEditable();
    await this.searchBoxFilterModalCancelBtn.click();
  }
}
