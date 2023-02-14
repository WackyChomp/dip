import express from 'express';
import *  as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);    // End point for front end
app.use('/api/v1/dalle', dalleRoutes);        // End point for front end


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
