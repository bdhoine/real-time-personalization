import {Configuration, OpenAIApi} from "openai";
import {generateImage, generateText} from "./openApiHelper";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

generateImage(openai,"a computer programmer participating in a hackaton");
generateText(openai,"It is time to work", "Change this sentence to: it is Beer O'clock");
