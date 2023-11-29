import request from 'supertest'
import server from '../src/server'
import prisma from '../src/external/database/db'

describe('Register bike route', () => {
    beforeEach(async () => {
        await prisma.bike.deleteMany({})
    })

    afterAll(async () => {
        await prisma.bike.deleteMany({})
    })

    it('registers a bike with valid data', async () => {
        await request(server)
            .post('/api/bikes')
            .send({
                name: 'bike1',
                type: 'mountain bike',
                bodySize: 22,
                maxLoad: 10,
                rate: 10,
                description: 'aaaaa',
                ratings: 10,
                imageUrls: [],
                available: true,
                location: (0.0, 0.0)
            })
            .expect(201)
            .then((res) => {
                expect(res.body.id).toBeDefined()
            })
    })

    it.only('returns 400 when trying to register duplicate bike', async () => {
        await request(server)
            .post('/api/bikes')
            .send({
                name: 'bike1',
                type: 'mountain bike',
                bodySize: 22,
                maxLoad: 10,
                rate: 10,
                description: 'aaaaa',
                ratings: 10,
                imageUrls: [],
                available: true,
                location: (0.0, 0.0)
            })
            .expect(201)

        await request(server)
            .post('/api/users')
            .send({
                name: 'bike1',
                type: 'mountain bike',
                bodySize: 22,
                maxLoad: 10,
                rate: 10,
                description: 'aaaaa',
                ratings: 10,
                imageUrls: [],
                available: true,
                location: (0.0, 0.0)
            })
            .expect(400)
    }, 20000)
})