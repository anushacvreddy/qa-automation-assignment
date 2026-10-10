
import { test, expect } from '@playwright/test';

const apiKey = process.env.REQRES_API_KEY;

test.describe('ReqRes Users API', () => {
  test.beforeEach(() => {
    expect(
      apiKey,
      'REQRES_API_KEY must be set in the .env file',
    ).toBeTruthy();
  });

  test('GET /api/users/2 returns a user with an email', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2', {
      headers: {
        'x-api-key': apiKey!,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.data.email).toBeTruthy();
    expect(typeof body.data.email).toBe('string');
  });

  test('POST /api/users creates morpheus as a leader', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      headers: {
        'x-api-key': apiKey!,
        'Content-Type': 'application/json',
      },
      data: {
        name: 'morpheus',
        job: 'leader',
      },
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.name).toBe('morpheus');
  });
});
