import openai from '../config/openaiConfig.js';

export async function generateMeta (title) {
    const completion = await openai.chat.completions.create({
        messages: [
            {"role": "user", "content": `Come up with a description for a YouTube video called ${title}`},
        ],
        model: "gpt-4o-mini",
        max_tokens: 100
    });
    
    console.log(completion.choices[0].message);

    const tags = await openai.chat.completions.create({
        messages: [
            {"role": "user", "content": `Come up with 10 keywords for a YouTube video called ${title}`},
        ],
        model: "gpt-4o-mini",
        max_tokens: 100
    });
    
    console.log(tags.choices[0].message);
}

export async function generateImage (description) {
    const image = await openai.images.generate({
        model: "dall-e-3",
        prompt: description,
        n: 1,
        size: "1024x1024",
      });

    const image_url = image.data[0].url;
    console.log(image_url)
}

export default { generateMeta, generateImage };