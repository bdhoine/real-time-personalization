import {Configuration, OpenAIApi} from "openai";
import {Handler, HandlerEvent, HandlerContext} from "@netlify/functions";

const handler: Handler = async (event : HandlerEvent, context : HandlerContext) => {
    const openai = new OpenAIApi(new Configuration({apiKey: process.env.OPENAI_API_KEY}));
    const models = await openai.listModels();

    return {statusCode: 200, body: models.data};
};

export {
    handler
};
