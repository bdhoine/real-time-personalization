import {readFromCache, writeToCache} from "./cache";

const IMAGE_SIZE = "256x512";
const DEFAULT_TEXT_EDIT_MODEL = "text-davinci-edit-001";

export const generateImage = async (openai, prompt) => {
    const cacheResult = readFromCache("Image - " + prompt)

    if (cacheResult) {
        return cacheResult;
    }

    if (cacheResult == null) {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: IMAGE_SIZE,
        });
        writeToCache("Image - " + prompt, response);
        console.log(response.data);

        console.log("fromcache: ");
        console.log(localStorage);
        return response;
    } 
};


export const generateText = async (openai, prompt, instruction) => {
    if (readFromCache("Text - " + prompt) == null) {
        const response = await openai.createEdit({
            model: DEFAULT_TEXT_EDIT_MODEL,
            input: prompt,
            instruction: instruction
        });
        writeToCache("Text - " + prompt, response);
        console.log(response.data);
    }
    console.log("fromcache: ");
    console.log(localStorage);
};
