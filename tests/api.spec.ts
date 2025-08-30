import { test, expect, request, APIRequestContext } from '@playwright/test';

test.describe('API Endpoints', () => {
  let apiContext: APIRequestContext;

  test.beforeAll(async () => {
    apiContext = await request.newContext({
      baseURL: 'http://127.0.0.1:3000/api',
      timeout: 10000 // Increase timeout to 10 seconds
    });
  });

  test('GET /api/health should return status OK', async () => {
    const response = await apiContext.get('/api/health');
    expect(response.ok()).toBeTruthy();
    const json = await response.json();
    expect(json.status).toBe('OK');
  });

  test('GET /api/schools should return an array', async () => {
    const response = await apiContext.get('/api/schools');
    expect(response.ok()).toBeTruthy();
    const json = await response.json();
    expect(Array.isArray(json)).toBe(true);
  });

  test('POST /api/schools should validate required fields', async () => {
    const response = await apiContext.post('/api/schools', {
      data: {},
    });
    expect(response.status()).toBe(400);
    const json = await response.json();
    expect(json.error).toBe('Missing required fields');
  });

  test('POST /api/schools should add a new school', async () => {
    const newSchool = {
      name: 'Test School',
      address: '123 Test St',
      city: 'Testville',
      state: 'TS',
      contact: 1234567890,
      email_id: 'test@example.com',
      image: null,
    };
    const response = await apiContext.post('/api/schools', {
      data: newSchool,
    });
    expect(response.ok()).toBeTruthy();
    const json = await response.json();
    expect(json.message).toBe('School added successfully');
  });
});
