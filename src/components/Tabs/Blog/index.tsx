import { useEffect, useState } from 'react';
import { BiPlusCircle, BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { ArticleService, TArticle } from '@/services';

import { Button, Input } from '@/components';
import { Article } from './components';

import { useTheme } from '@/contexts/ThemeContext';

import './styles.scss';

const Blog: React.FC = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();

  const [articles, setArticles] = useState<TArticle[]>([]);

  const [search, setSearch] = useState('');

  const getArticles = async () => {
    const { data, error } = await ArticleService.getAll();

    if (error) {
      alert(error);
      return;
    }

    setArticles(data ?? []);
  };

  useEffect(() => {
    getArticles();
  }, []);

  const filteredArticles = articles.filter((article) => {
    const name = article.title.trim().toLowerCase();
    const query = search.trim().toLowerCase();

    return name.includes(query);
  });

  return (
    <div className="blog-tab">
      <h3 className="blog-tab__title">Blog</h3>

      <div className="blog-tab__content">
        <div className="blog-tab__filter">
          <Input
            placeholder="Buscar por nome"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            RightIcon={() => <BiSearch color={palette.primary} size={24} />}
          />

          <Button
            variant="solid"
            text="Novo artigo"
            style={{ color: palette.primary, width: 'fit-content' }}
            primary
            RightIcon={() => <BiPlusCircle color={palette.primary} size={24} />}
            onClick={() => navigate('/new-article')}
          />
        </div>

        <div className="blog-tab__content__articles">
          {filteredArticles.map((article) => (
            <Article
              key={article.id}
              author={article.author}
              title={article.title}
              views={article.views}
              createdAt={article.created_at}
              thumbnail={article.thumbnail_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Blog };
