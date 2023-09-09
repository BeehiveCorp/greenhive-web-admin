import { Avatar } from '@/components';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { ArticleProps } from './types';

import { useTheme } from '@/contexts/ThemeContext';

import { getRelativeUri } from '@/utils';

import './styles.scss';

const Article: React.FC<ArticleProps> = ({
  author,
  thumbnail,
  title,
  views,
  createdAt,
}) => {
  const { palette } = useTheme();

  return (
    <div className="article">
      <div className="article__header">
        <Avatar
          uri={author.avatar_url}
          name={author.name}
          containerStyle={{ backgroundColor: palette.background }}
          initialsStyle={{ fontSize: '1.125rem' }}
          size={32}
        />

        <div>
          <p className="article__header__author single-line">{author?.name}</p>

          <p className="article__header__created">
            {format(parseISO(createdAt), 'dd MMM yyyy', { locale: ptBR })}
          </p>
        </div>
      </div>

      <div className="article__thumbnail">
        <img src={getRelativeUri(thumbnail)} />
      </div>

      <div className="article__footer">
        <p className="article__footer__title single-line">{title}</p>
        <p className="article__footer__views">{views} views</p>
      </div>
    </div>
  );
};

export { Article };
