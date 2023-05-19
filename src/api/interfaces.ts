export enum OpenAIModels {
  GPT_35_TURBO = 'gpt-3.5-turbo',
  GPT_4 = 'gpt-4',
  WHISPER_1 = 'whisper-1'
}

export enum MessageRole {
  User = 'user',
  System = 'system',
  Assistant = 'assistant'
}

export interface OpenAIRequestMessage {
  role: MessageRole;
  content: string;
}

export interface OpenAICompletionApiRequest {
  model: string;
  temperature: number;
  messages: OpenAIRequestMessage[];
}

export interface OpenAIImageApiRequest {
  prompt: string;
  n: number;
  size: '256x256' | '512x512' | '1024x1024';
}