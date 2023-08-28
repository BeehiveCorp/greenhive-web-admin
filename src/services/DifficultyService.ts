import { AxiosError } from 'axios';
import { api } from './api';

interface CreatePayload {
  hex_code: string;
  name: string;
  xp_reward: number;
  ambicoins_reward: number;
}

export type TDifficulty = {
  id?: string;
  name: string;
  hex_code: string;
  xp_reward: number;
  ambicoins_reward: number;
  created_at: Date;
  updated_at: Date;
};

class DifficultyService {
  static create = async (payload: CreatePayload) => {
    try {
      const { data } = await api.post('/difficulty/create', payload);
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };

  static getAll = async (): Promise<{ error?: string; data?: TDifficulty[] }> => {
    try {
      const { data } = await api.get('/difficulty/all');
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };
}

export { DifficultyService };
