```typescript
/**
 * Main entry point for the AI_numpy library.
 * Exports all components and initializes the main client class.
 */
import { AINumpyClient } from './client';

export const aiNumpy = new AINumpyClient();

export * from './types';
```