import {Configuration, OpenAIApi} from "openai";
import {Handler, HandlerEvent, HandlerContext} from "@netlify/functions";

const handler: Handler = async (event : HandlerEvent, context : HandlerContext) => {
    const openai = new OpenAIApi(new Configuration({apiKey: process.env.OPENAI_API_KEY}));
    try {
        const models = await openai.listModels();
        return {statusCode: 200, body: JSON.stringify(models.data)};
    } catch {
        return {statusCode: 500, body: "unable to fetch models"}
    }
};

export {
    handler
};
