const request = require('supertest');
const app = require('../app');

const TOKEN = process.env.TEST_TOKEN;

describe('GET Questions', () => {
  describe('Given no Authorization header', () => {
    test('should return status 401', async () => {
      const response = await request(app).get(
        '/api/questions/apply/?topics=[]&seniorities=[]'
      );
      expect(response.statusCode).toBe(401);
    });
  });

  describe('Given Authorization header', () => {
    test('should return status 200', async () => {
      const response = await request(app)
        .get('/api/questions/apply/?topics=[]&seniorities=[]')
        .set('Authorization', TOKEN);
      expect(response.statusCode).toBe(200);
    });

    test('should return an array', async () => {
      const response = await request(app)
        .get('/api/questions/apply/?topics=[]&seniorities=[]')
        .set('Authorization', TOKEN);
      expect(response.text).toBeTruthy();
    });
  });
});
