export declare function isElementNode(node: Node): node is Element;
export declare function isTextNode(node: Node): node is Text;
/**
 * Extended visibility result interface to also capture the reason for non-visibility.
 */
interface VisibilityResult {
    visible: boolean;
    reason: string;
}
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
export declare function processElements(chunk: number, scrollToChunk?: boolean, indexOffset?: number, debug?: boolean): Promise<{
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
