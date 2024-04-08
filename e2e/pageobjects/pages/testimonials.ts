import { Locator, Page } from '@playwright/test';

export class Testimonials {
  testimonialsTitle: Locator;
  testimonialsBtn: Locator;
  testimonialCards: Locator;
  constructor(page: Page) {
    this.testimonialsTitle = page.getByRole('heading', { name: 'What Our Community Says!' });
    this.testimonialsBtn = page.getByRole('button', { name: 'Testimonial' });
    this.testimonialCards = page.locator('[class*="grid"]');
  }
}
