import 'dotenv/config';
import { generateText, type ModelMessage } from 'ai';
import { openai } from '@ai-sdk/openai';
import { SYSTEM_PROMPT } from './system/prompt';
import type { AgentCallbacks } from '../types';

const MODEL_NAME = 'gpt-5-mini';

export const runAgent = async (
  userMessage: string,
  conversationHistory: ModelMessage[],
  callbacks: AgentCallbacks,
) => {
  const { text } = await generateText({
    prompt: userMessage,
    model: openai(MODEL_NAME),
    system: SYSTEM_PROMPT,
  });

  console.log(text);
};

runAgent('Hello can you hear me?');
