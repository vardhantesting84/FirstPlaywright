import { test, expect, request } from '@playwright/test';
test('Verify POST API response', async ({ request }) => {
// Define the API endpoint
const url = 'https://jsonplaceholder.typicode.com/posts';
// Data to send in the POST request
const requestData = {
title: 'testing',
body: 'playwright automation',
userId: 1,
};
// Send the POST request
const response = await request.post(url, {
data: requestData,
headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
    },
});
// Validate the response status
expect(response.status()).toBe(201); // Created
// Parse and validate the JSON response
const responseData = await response.json();
expect(responseData).toHaveProperty('id'); // Check if 'id' exists
expect(responseData.title).toBe('testing');
expect(responseData.body).toBe('playwright automation');
expect(responseData.userId).toBe(1);
});