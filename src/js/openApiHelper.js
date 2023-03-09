import {readFromCache, writeToCache} from "./cache";

const DEFAULT_IMAGE_SIZE = "1024x1024";
const DEFAULT_TEXT_EDIT_MODEL = "text-davinci-edit-001";
const DEFAULT_RESPONSE_FORMAT = "b64_json";

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
        console.log(response.data);

        console.log("fromcache: ");
        console.log(localStorage);
        return response;
    }
};


export const generateText = async (openai, prompt, instruction) => {
    const key = getKey("text_" + prompt);
    if (readFromCache(key) == null) {
        const response = await openai.createEdit({
            model: DEFAULT_TEXT_EDIT_MODEL,
            input: prompt,
            instruction: instruction
        });
        writeToCache(key, response);
        console.log(response.data);
    }
    console.log("fromcache: ");
    console.log(localStorage);
};

const getKey = (key) => {
    return key.replaceAll(" ", "_");
};
