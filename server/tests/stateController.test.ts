import request from 'supertest';
import app from '../src/app';
import mongoose from 'mongoose';

// Dummy user data for authentication
const userData = {
    username: 'testUser',
    password: 'testPassword'
};

let token: string;

beforeAll(async () => {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect('mongodb://localhost:27017/robotic-test');
    }

    // Register a test user
    await request(app).post('/auth/register').send(userData);

    // Authenticate and get a token
    const loginResponse = await request(app)
        .post('/auth/login')
        .send(userData);

    token = loginResponse.headers['set-cookie'][0]; // Adjust based on how the token is set in the cookies
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});

describe('State API', () => {
    it('should create a new state', async () => {
        const response = await request(app)
            .post('/api/states')
            .set('Cookie', token) // Use the token for authentication
            .send({
                name: 'Test State',
                description: 'Test Description',
                status: 'active',
                createdBy: 'user123'
            });
        expect(response.status).toBe(201);
        expect(response.body.name).toBe('Test State');
    });
});
