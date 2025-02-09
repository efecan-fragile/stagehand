import { StagehandContainer } from "./StagehandContainer";
export declare function isElementNode(node: Node): node is Element;
export declare function isTextNode(node: Node): node is Text;
/**
 * Extended visibility result interface to also capture the reason for non-visibility.
 */
interface VisibilityResult {
    visible: boolean;
    reason: string;
}
/**
 * Finds and returns a list of scrollable elements on the page,
 * ordered from the element with the largest scrollHeight to the smallest.
 *
 * @param topN Optional maximum number of scrollable elements to return.
 *             If not provided, all found scrollable elements are returned.
 * @returns An array of HTMLElements sorted by descending scrollHeight.
 */
export declare function getScrollableElements(topN?: number): HTMLElement[];
/**
 * Calls getScrollableElements, then for each element calls generateXPaths,
 * and returns the first XPath for each.
 *
 * @param topN (optional) integer limit on how many scrollable elements to process
 * @returns string[] list of XPaths (1 for each scrollable element)
 */
export declare function getScrollableElementXpaths(topN?: number): Promise<(string | string[])[]>;
export declare function processDom(chunksSeen: Array<number>): Promise<{
    outputString: string;
    selectorMap: Record<number, (string | string[])[]>;
    chunk: number;
    chunks: number[];
}>;
export declare function processAllOfDom(): Promise<{
    outputString: string;
    selectorMap: {};
}>;
export declare function scrollToHeight(height: number): Promise<void>;
export declare function processElements(chunk: number, scrollToChunk?: boolean, indexOffset?: number, container?: StagehandContainer, debug?: boolean): Promise<{
    outputString: string;
    selectorMap: Record<number, (string | string[])[]>;
}>;
export declare function storeDOM(): string;
export declare function restoreDOM(storedDOM: string): void;
export declare function createTextBoundingBoxes(): void;
export declare function getElementBoundingBoxes(xpath: string | string[]): Array<{
    text: string;
    top: number;
    left: number;
    width: number;
    height: number;
}>;
/**
 * Checks if an element is visible and therefore relevant for LLMs to consider
 * (size, display properties, opacity, if it’s top-element in local doc, and iframe is top-element in parent).
 * Returns an object with { visible: boolean, reason: string }.
 */
export declare function isVisible(element: Element): VisibilityResult;
/**
 * Checks if a text node is visible in the main page, similarly to isVisible,
 * returning { visible: boolean, reason: string } for debug.
 */
export declare function isTextVisible(node: ChildNode): VisibilityResult;
export {};
