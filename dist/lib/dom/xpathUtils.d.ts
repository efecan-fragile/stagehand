/**
 * Escapes a string for use in an XPath expression.
 * Handles special characters, including single and double quotes.
 * @param value - The string to escape.
 * @returns The escaped string safe for XPath.
 */
export declare function escapeXPathString(value: string): string;
/**
 * Generates XPaths for a given DOM element, including iframe-aware paths if needed.
 * @param element - The target DOM element.
 * @returns An array of XPaths.
 */
export declare function generateXPathsForElement(element: ChildNode): Promise<(string | string[])[]>;
