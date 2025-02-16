import { test, expect, request } from '@playwright/test';

test('PUT Request', async ({request}) => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    const requestData = {
        title: 'testing',
        body: 'playwright automation',
        userId: 1,
        };
        const response = await request.put(url, {
            data: requestData,
            headers: {
                'Content-Type': 'application/json',
              },
            });

     
      //body: JSON.stringify({ title: 'Updated Title', body: 'Updated Body' }),

    // Verify the status code
    
    expect(response.status()).toBe(200);

    // Verify response data
    const jsonData = await response.json();
    expect(jsonData.title).toBe('testing');
    expect(jsonData.body).toBe('playwright automation');
  });