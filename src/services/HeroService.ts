import { AxiosError } from 'axios';
import { api } from './api';

export interface CreatePayload {
  name: string;
  description: string;
  lore: string;
}

export type THero = {
  id?: string;
  name: string;
  description: string;
  lore: string;
  avatar_url: string;
  created_at: Date;
  updated_at: Date;
};

class HeroService {
  static create = async (payload: FormData) => {
    try {
      const { data } = await api.post('/hero/create', payload, {
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

  static getAll = async (): Promise<{ error?: string; data?: THero[] }> => {
    try {
      const { data } = await api.get('/hero/all');
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };
}

export { HeroService };
