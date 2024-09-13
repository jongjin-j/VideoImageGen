// const { Configuration, OpenAIApi } = require('openai')
// require('dotenv').config()

// const configuration = new Configuration({
//     apiKey: process.env.OPEN_AI_KEY
// })

// const openai = new OpenAIApi(configuration)

// module.exports = openai

import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
});

export default openai;
