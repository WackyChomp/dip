import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)         // instance


// router test
router.route('/').get((req, res) => {
    res.send('This is route is from dalleRoute.js :O !#@$%')
})


export default router;