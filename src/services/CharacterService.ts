import { AxiosError } from 'axios';
import { api } from './api';

export interface CreatePayload {
  name: string;
  description: string;
}

export type TCharacter = {
  id?: string;
  name: string;
  description: string;
  avatar_url: string;
  created_at: Date;
  updated_at: Date;
};

class CharacterService {
  static create = async (payload: FormData) => {
    try {
      const { data } = await api.post('/character/create', payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };

  static getAll = async (): Promise<{ error?: string; data?: TCharacter[] }> => {
    try {
      const { data } = await api.get('/character/all');
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };
}

export { CharacterService };
