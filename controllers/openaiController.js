import openai from '../config/openaiConfig.js';

export async function generateMeta (req, res) {
    const { title } = req.body;

    const description = await openai.chat.completions.create({
        messages: [
            {"role": "user", "content": `Come up with a description for a YouTube video called ${title}`},
        ],
        model: "gpt-4o-mini",
        max_tokens: 100
    });

    const tags = await openai.chat.completions.create({
        messages: [
            {"role": "user", "content": `Come up with 10 keywords for a YouTube video called ${title}`},
        ],
        model: "gpt-4o-mini",
        max_tokens: 100
    });
    
    res.status(200).json({
        description: description.choices[0].message,
        tags: tags.choices[0].message
    })
}

export async function generateImage (req, res) {
    const image = await openai.images.generate({
        model: "dall-e-3",
        prompt: req.body.prompt,
        n: 1,
        size: "1024x1024",
      });

    res.status(200).json({
        image_url: image.data[0].url
    })
}

export default { generateMeta, generateImage };