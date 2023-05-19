import axios from 'axios';
import {
  MessageRole,
  type OpenAICompletionApiRequest,
  type OpenAIImageApiRequest
} from './interfaces';
import { OpenAIModels } from './interfaces';
import * as credentials from '../../openapi.json';

const API_BASE_URL = 'https://api.openai.com/v1';

function buildRequestHeaders(contentType: string = 'application/json') {
  return {
    headers: {
      Authorization: `Bearer ${credentials.openAiApiKey}`,
      ['Content-Type']: contentType
    },
  };
}

export async function requestCompletion(prompt: string): Promise<string> {
  const apiUrl = `${API_BASE_URL}/chat/completions`;

  const request: OpenAICompletionApiRequest = {
    model: OpenAIModels.GPT_4,
    temperature: 0.3,
    messages: [
      {
        role: MessageRole.User,
        content: prompt,
      },
    ],
  };

  const {
    data: { choices },
  } = await axios.post(apiUrl, request, buildRequestHeaders());
  return choices[0].message.content;
}

export async function requestImage(prompt: string): Promise<string> {
  const apiUrl = `${API_BASE_URL}/images/generations`;

  const request: OpenAIImageApiRequest = {
    prompt,
    n: 1,
    size: '512x512',
  };

  const {
    data: { data },
  } = await axios.post(apiUrl, request, buildRequestHeaders());
  return data[0].url;
}

export async function requestTranscription(formData: FormData): Promise<string> {
  const apiUrl = `${API_BASE_URL}/audio/transcriptions`;

  formData.append('model', OpenAIModels.WHISPER_1)
  formData.append('language', 'pl')

  const {data: {text}} = await axios.post(apiUrl, formData, buildRequestHeaders('multipart/form-data'))
  return text;
}
