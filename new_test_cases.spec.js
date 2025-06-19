import { test, expect } from '@playwright/test';

// Test Case 1: Successful Login Page Validation
test('successful login with valid credentials', async ({ page }) => {
  await page.goto('https://www.example.com/login'); // Replace with your login page URL
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  await page.click('#loginButton');
  await expect(page).toHaveURL('https://www.example.com/dashboard'); // Replace with your dashboard URL
  await expect(page.locator('.welcomeMessage')).toBeVisible();
});

// Test Case 2: Invalid Login Page Validation
test('unsuccessful login with invalid credentials', async ({ page }) => {
  await page.goto('https://www.example.com/login'); // Replace with your login page URL
  await page.fill('#username', 'invaliduser');
  await page.fill('#password', 'wrongpassword');
  await page.click('#loginButton');
  await expect(page.locator('.errorMessage')).toBeVisible();
  await expect(page.locator('.errorMessage')).toHaveText('Invalid username or password');
  await expect(page).toHaveURL('https://www.example.com/login'); // Should remain on login page
});

// Test Case 3: UI Screen Validation - Element Visibility
test('verify important UI element visibility', async ({ page }) => {
  await page.goto('https://www.example.com/products'); // Replace with a page containing the element
  await expect(page.locator('.productTitle')).toBeVisible();
  await expect(page.locator('.productImage')).toBeVisible();
  await expect(page.locator('.addToCartButton')).toBeEnabled();
});

// Test Case 4: API Testing - Simple GET Request Validation
test('API GET request status validation', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1'); // Example public API
  await expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('id', 1);
  expect(responseBody).toHaveProperty('title');
});


