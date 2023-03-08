import { Configuration, OpenAIApi } from "openai";

const IMAGE_SIZE = "1024x1024";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


const generateImage = async (prompt) => {
    const response = await openai.createImage({
        prompt,
        n: 1,
        size: IMAGE_SIZE,
    });

    console.log(response.data);
};

generateImage("a computer programmer participating in a hackaton");
