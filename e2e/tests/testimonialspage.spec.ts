import { test, expect } from '@playwright/test';
import { Testimonials } from '../pageobjects/pages/testimonials';

test.beforeEach(async ({ page }) => {
  await page.goto('/testimonials');
  await page.waitForLoadState('networkidle');
});

test('testimonial page is visible, header is visible and btn is clickable ', async ({ page }) => {
  const testimonialsPage = new Testimonials(page);
  expect(page.url()).toMatch(/testimonials/);
  await page.waitForLoadState('networkidle');
  await expect(testimonialsPage.testimonialsTitle).toContainText('What Our Community Says!');
  expect(testimonialsPage.testimonialsBtn).toBeEditable();
  expect(testimonialsPage.testimonialCards).toBeVisible();
});
