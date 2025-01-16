import type { Page as PlaywrightPage } from "patchright/test";
import type { BrowserContext as PlaywrightContext } from "patchright/test";
import type { Browser as PlaywrightBrowser } from "patchright/test";
import type { ActOptions, ActResult, ExtractOptions, ExtractResult, ObserveOptions, ObserveResult } from "./stagehand";
import type { z } from "zod";
export interface Page extends PlaywrightPage {
    act: (options: ActOptions) => Promise<ActResult>;
    extract: <T extends z.AnyZodObject>(options: ExtractOptions<T>) => Promise<ExtractResult<T>>;
    observe: (options?: ObserveOptions) => Promise<ObserveResult[]>;
}
export type BrowserContext = PlaywrightContext;
export type Browser = PlaywrightBrowser;
