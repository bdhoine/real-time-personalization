import {Configuration, OpenAIApi} from "openai";
import {generateImage, generateTextEdit} from "./openAiApiHelper";

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
    return generateTextEdit(openai, prompt, instruction).then((result) => {
        return result;
    });
};
