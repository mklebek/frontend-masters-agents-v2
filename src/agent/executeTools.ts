import { tools } from './tools';

type ToolName = keyof typeof tools;

export const executeTools = async (name: string, args: any) => {
  const tool = tools[name as ToolName];

  if (!tool) {
    return 'No tool with that name was found. Provide different name';
  }

  const execute = tool.execute;

  if (!execute) {
    return 'No function to execute for this tool';
  }
};
