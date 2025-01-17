import { type ClientOptions } from "openai";
import type { LLMCache } from "../../lib/cache/LLMCache";
import { type ChatCompletionOptions, LLMClient } from "../../lib/llm/LLMClient";
import type { LogLine } from "../../types/log";
import type { ChatCompletion } from "openai/resources/chat";
export declare class OllamaClient extends LLMClient {
  type: "ollama";
  private client;
  private cache;
  logger: (message: LogLine) => void;
  private enableCaching;
  clientOptions: ClientOptions;
  constructor(
    logger: (message: LogLine) => void,
    enableCaching: boolean,
    cache: LLMCache | undefined,
    modelName: "llama3.2",
    clientOptions?: ClientOptions,
  );
  createChatCompletion<T = ChatCompletion>(
    options: ChatCompletionOptions,
    retries?: number,
  ): Promise<T>;
}
