import { planetsRouter } from './routers/planet.js';
import express from 'express'
import cors from 'cors'
import { config } from './config.js'

var app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json())

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});

app.use('/planet', planetsRouter)