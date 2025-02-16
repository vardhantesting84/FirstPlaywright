import { test, expect, request } from '@playwright/test';
test('Verify GET API response', async ({ request }) => {
// Send the GET request to the API endpoint
const response = await
request.get('https://jsonplaceholder.typicode.com/posts/1');
// Validate the response status
expect(response.status()).toBe(200);
// Parse and validate the JSON response body
const data = await response.json();
expect(data).toHaveProperty('id', 1); // Check if 'id' is 1
expect(data).toHaveProperty('title'); // Ensure 'title' exists
expect(data).toHaveProperty('userId'); // Ensure 'userId' exists

//Verifying Response body
expect(data.id).toBe(1);
expect(data.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');

// Validate response headers
const headers = response.headers();
expect(headers['content-type']).toContain('application/json');
});