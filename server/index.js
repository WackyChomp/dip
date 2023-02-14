import express from 'express';
import *  as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));



// Routes
app.get('/', async (req, res) => {
    res.send('Hello from the other side!');
})



// Start server
const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('You just got served on port http://localhost:8080 , how does that feel?'))
    } catch (err) {
        console.log(err)
    }
}

startServer();
