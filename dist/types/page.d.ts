import type { Page as PlaywrightPage } from "patchright/test";
import type { BrowserContext as PlaywrightContext } from "patchright/test";
import type { Browser as PlaywrightBrowser } from "patchright/test";
import type { ActOptions, ActResult, ExtractOptions, ExtractResult, ObserveOptions, ObserveResult } from "./stagehand";
import { z } from "zod";
export declare const defaultExtractSchema: z.ZodObject<{
    extraction: z.ZodString;
}, "strip", z.ZodTypeAny, {
    extraction?: string;
}, {
    extraction?: string;
}>;
export interface Page extends Omit<PlaywrightPage, "on"> {
    act(action: string): Promise<ActResult>;
    act(options: ActOptions): Promise<ActResult>;
    act(observation: ObserveResult): Promise<ActResult>;
    extract(instruction: string): Promise<ExtractResult<typeof defaultExtractSchema>>;
    extract<T extends z.AnyZodObject>(options: ExtractOptions<T>): Promise<ExtractResult<T>>;
    observe(): Promise<ObserveResult[]>;
    observe(instruction: string): Promise<ObserveResult[]>;
    observe(options?: ObserveOptions): Promise<ObserveResult[]>;
    on: {
        (event: "popup", listener: (page: Page) => unknown): Page;
    } & PlaywrightPage["on"];
}
export type BrowserContext = PlaywrightContext;
export type Browser = PlaywrightBrowser;
