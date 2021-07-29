import express from 'express'
import { PlanetRepository } from '../repositories/planet.js'

const planetsRouter = express.Router()

planetsRouter.get('/', async (req, res) => {
    // Should be in some controller or pre-authenticator
    const index = req.query.startingIndex || 0
    const number = req.query.number || 10
    return res.json({
        planets: await PlanetRepository.getPlanets(index, number)
    })
})

planetsRouter.post('/', async (req, res) => {
    console.log(`Someone posted something nice:`)
    console.log(req.body)
    return res.status(200)
})

export { planetsRouter }
