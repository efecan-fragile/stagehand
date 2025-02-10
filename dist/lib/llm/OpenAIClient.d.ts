import { ClientOptions } from "openai";
import { LogLine } from "../../types/log";
import { AvailableModel } from "../../types/model";
import { LLMCache } from "../cache/LLMCache";
import { CreateChatCompletionOptions, LLMClient, LLMResponse } from "./LLMClient";
export declare class OpenAIClient extends LLMClient {
    type: "openai";
    private client;
    private cache;
    private enableCaching;
    private seedOverride;
    clientOptions: ClientOptions;
    constructor({ enableCaching, cache, modelName, clientOptions, seedOverride, }: {
        logger: (message: LogLine) => void;
        enableCaching?: boolean;
        cache?: LLMCache;
        modelName: AvailableModel;
        clientOptions?: ClientOptions;
        seedOverride?: number;
    });
    createChatCompletion<T = LLMResponse>({ options: optionsInitial, logger, retries, }: CreateChatCompletionOptions): Promise<T>;
}
