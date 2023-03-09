import {Configuration, OpenAIApi} from "openai";
import {generateImage, generateText} from "./openAiApiHelper";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateUsingWrapperImage = (prompt) => {
    return generateImage(openai, prompt).then((result) => {
        return result;
    });
};

export const generateUsingWrapperText = (prompt, instruction) => {
    return generateText(openai, prompt, instruction).then((result) => {
        return result;
    });
};

// generateImage(openai,"a computer programmer participating in a hackaton");
// generateText(openai,"It is time to work", "Change this sentence to: it is Beer O'clock");
