import { Configuration, OpenAIApi } from "openai";
import { writeToCache, readFromCache } from "./cache";

const IMAGE_SIZE = "1024x1024";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async (prompt) => {
    if (readFromCache(prompt) == null){
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: IMAGE_SIZE,
        });
        writeToCache(prompt, response);
        console.log(response.data);
    }
    console.log("fromcache: ");
    console.log(localStorage);

};

generateImage("a computer programmer participating in a hackaton");
