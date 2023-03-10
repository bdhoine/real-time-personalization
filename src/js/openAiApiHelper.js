import {readFromCache, writeToCache} from "./cache";

const DEFAULT_IMAGE_SIZE = "512x512";
const DEFAULT_TEXT_EDIT_MODEL = "text-davinci-edit-001";
const DEFAULT_RESPONSE_FORMAT = "url";

export const generateImage = async (openai, prompt) => {
    const key = getKey("image_" + prompt);
    const cacheResult = readFromCache(key);

    if (cacheResult) {
        return cacheResult;
    }

    if (cacheResult == null) {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: DEFAULT_IMAGE_SIZE,
            response_format: DEFAULT_RESPONSE_FORMAT
        });
        writeToCache(key, response);
        return response;
    }
};


export const generateTextEdit = async (openai, prompt, instruction) => {
    const key = getKey("text_" + instruction);
    const cacheResult = readFromCache(key);

    if (cacheResult) {
        return cacheResult;
    }

    if (cacheResult == null) {
        const response = await openai.createEdit({
            model: DEFAULT_TEXT_EDIT_MODEL,
            input: prompt,
            instruction: instruction
        });
        writeToCache(key, response);
        console.log(response.data);

        return response;
    }
};


export const generateText = async (openai, prompt) => {
    const key = getKey("text_" + prompt);
    const cacheResult = readFromCache(key);

    if (cacheResult) {
        return cacheResult;
    }

    if (cacheResult == null) {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 1,
            max_tokens: 2048
        });
        writeToCache(key, response);
        console.log(response.data);

        return response;
    }
};

const getKey = (key) => {
    return key.replaceAll(" ", "_");
};
