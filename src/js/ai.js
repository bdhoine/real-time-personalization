import {Configuration, OpenAIApi} from "openai";
import {generateImage, generateText, generateTextEdit} from "./openAiApiHelper";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateImageUsingWrapperImage = (prompt) => {
    return generateImage(openai, prompt).then((result) => {
        return result;
    });
};

export const generateTextEditUsingWrapperText = (prompt, instruction) => {
    return generateTextEdit(openai, prompt, instruction).then((result) => {
        return result;
    });
};

export const generateTextUsingWrapperText = (prompt) => {
    return generateText(openai, prompt).then((result) => {
        return result;
    });
};
