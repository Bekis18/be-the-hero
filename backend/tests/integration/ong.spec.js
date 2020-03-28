const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback(); //importante zerar o banco de dados antes de fazer o teste!
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "YUNO",
        email: "contato@gmail.com",
        whatsapp: "12345678910",
        city: "Rio Do Sul",
        uf: "SC"
      });

      expect(response.body).toHaveProperty('id')
      expect(response.body.id).toHaveLength(8)
  });
})