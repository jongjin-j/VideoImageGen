import openai from '../config/openaiConfig.js';

const generateMeta = async (title) => {
    const completion = await openai.chat.completions.create({
        messages: [
            {"role": "user", "content": `Come up with a description for a YouTube video called ${title}`},
        ],
        model: "gpt-4o-mini",
        max_tokens: 100
      });
    
      console.log(completion.choices[0].message);
}

export default generateMeta;