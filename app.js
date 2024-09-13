import express from 'express';
import { generateMeta, generateImage } from './controllers/openaiController.js';

const app = express()
app.listen(4000, () => console.log('listening for req on 4000'));

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello");
});

app.post('/viGen/meta', generateMeta)
app.post('/viGen/image', generateImage)

