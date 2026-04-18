import { tool } from 'ai';
import z from 'zod';

export const dateTime = tool({
  description:
    'Returns current date and time. Use this tool before any time related tasks',
  inputSchema: z.object({}),
  execute: () => new Date().toISOString(),
});
