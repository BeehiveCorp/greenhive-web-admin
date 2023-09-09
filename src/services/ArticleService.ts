import { AxiosError } from 'axios';

import { api } from './api';
import { TUser } from '.';

export interface CreateArticlePayload {
  title: string;
  content: string;
  xp_reward: number;
  ambicoins_reward: number;
  views: number;
  author_id: string;
}

export type TArticle = {
  id?: string;
  reader_id: string;
  article_id: string;
  title: string;
  thumbnail_url: string;
  xp_reward: number;
  ambicoins_reward: number;
  views: number;
  author: TUser;
  created_at: string;
  updated_at: string;
};

class ArticleService {
  static create = async (payload: FormData) => {
    try {
      const { data } = await api.post('/article/create', payload, {
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

  static getAll = async (): Promise<{ error?: string; data?: TArticle[] }> => {
    try {
      const { data } = await api.get('/article/all');
      return { data };
    } catch (error) {
      const exception = error as AxiosError<{ message?: string; error?: string }>;

      return {
        error: exception.response?.data?.message || exception.response?.data?.error,
      };
    }
  };
}

export { ArticleService };
