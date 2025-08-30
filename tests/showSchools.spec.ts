import { test, expect } from '@playwright/test';

test.describe('ShowSchools Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:3000/showSchools');
  });

  test('should display loading message initially', async ({ page }) => {
    await expect(page.locator('text=Loading schools...')).toBeVisible();
  });

  test('should display schools or no schools message', async ({ page }) => {
    // Wait for loading to finish
    await page.waitForSelector('text=Loading schools...', { state: 'detached' });

    // Check if either no schools message or school heading is visible
    const noSchools = page.locator('text=No schools found.');
    const schoolHeading = page.locator('h1', { hasText: 'Schools' });

    const noSchoolsVisible = await noSchools.isVisible();
    const schoolHeadingVisible = await schoolHeading.isVisible();

    expect(noSchoolsVisible || schoolHeadingVisible).toBe(true);
  });
});
