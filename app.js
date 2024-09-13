import { createInterface } from 'readline';
import generateMeta from './controllers/openaiController.js';
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('YouTube Video Title: \n', generateMeta);



// import openai from './config/openaiConfig.js';

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{"role": "system", "content": "You are a helpful assistant."},
//         {"role": "user", "content": "Who won the world series in 2020?"},
//         {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
//         {"role": "user", "content": "Where was it played?"}],
//     model: "gpt-4o-mini",
//   });

//   console.log(completion.choices[0]);
// }
// main();