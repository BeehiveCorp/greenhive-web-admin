import { TUser } from '@/services';

export type ArticleProps = {
  author: TUser;
  title: string;
  views: number;
  thumbnail: string;
  createdAt: string;
};
