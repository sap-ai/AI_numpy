```typescript
/**
 * TypeScript interfaces and types for AI_numpy library.
 */

/**
 * Represents an array of numbers.
 */
export type ArrayData = number[][];

/**
 * Options for configuring AI-assisted operations.
 */
export interface AINumpyOptions {
  /**
   * API key for OpenAI services.
   */
  apiKey: string;
}

/**
 * Configuration options for the AI_numpy client.
 */
export interface ClientConfig extends AINumpyOptions {}

/**
 * Response type from AI-assisted data transformation suggestions.
 */
export interface TransformationSuggestionResponse {
  /**
   * Suggested operations on the array.
   */
  suggestedOperations: string[];
  /**
   * Justification for the suggested operations.
   */
  justification: string;
}

/**
 * Error response structure.
 */
export interface ErrorResponse {
  /**
   * Error message.
   */
  error: string;
}
```