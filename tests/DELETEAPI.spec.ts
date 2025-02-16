import { test, expect, request } from '@playwright/test';
test('DELETE API Request', async ({ request }) => {
const url = 'https://jsonplaceholder.typicode.com/posts/1'; 
// //Example URL for deleting post ID 1
const response = await request.delete(url); 
// Sending DELETE request to the API endpoint
expect(response.status()).toBe(200); 
// Checking for a successful status code (200)
const responseBody = await response.json();
expect(responseBody).toEqual({}); 
// Usually, the response body is empty after deletion, but check API documentation
});