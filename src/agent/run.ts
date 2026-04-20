import 'dotenv/config';
import { generateText, type ModelMessage } from 'ai';
import { openai } from '@ai-sdk/openai';

import { tools } from './tools/index.ts';
import { SYSTEM_PROMPT } from './system/prompt.ts';

import type { AgentCallbacks } from '../types.ts';
import { executeTool } from './executeTools.ts';

const MODEL_NAME = 'gpt-5-mini';

export async function runAgent(
  userMessage: string,
  conversationHistory: ModelMessage[],
  callbacks: AgentCallbacks,
): Promise<any> {
  // Filter and check if we need to compact the conversation history before starting
  const { text, toolCalls } = await generateText({
    model: openai(MODEL_NAME),
    prompt: userMessage,
    system: SYSTEM_PROMPT,
    tools,
  });

  console.log(text, toolCalls);

  toolCalls.forEach(async (tc) => {
    console.log(await executeTool(tc.toolName, tc.input));
  });
}

runAgent('What is the current date time?');
