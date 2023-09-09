import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiLeftArrowAlt, BiSolidCheckCircle } from 'react-icons/bi';
import ReactQuill from 'react-quill';

import { useUser } from '@/contexts/UserContext';
import { useTheme } from '@/contexts/ThemeContext';

import { ArticleService, CreateArticlePayload } from '@/services';

import { Button, Dropzone, Input, Modal, ThemeSwitcher } from '@/components';
import { Toolbar, formats, modules } from './components';

import 'react-quill/dist/quill.snow.css';
import './styles.scss';

export function NewArticle() {
  const { user } = useUser();
  const { palette } = useTheme();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [content, setContent] = useState('');

  const [ambicoinsReward, setAmbicoinsReward] = useState('');
  const [xpReward, setXpReward] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (!user?.id) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  const onSaveArticle = async () => {
    const formData = new FormData();

    if (!user?.id) return;

    const data: CreateArticlePayload = {
      ambicoins_reward: Number(ambicoinsReward),
      xp_reward: Number(xpReward),
      title,
      content,
      views: 0,
      author_id: user.id,
    };

    formData.append('data', JSON.stringify(data));

    if (thumbnail) formData.append('file', thumbnail);

    const { error } = await ArticleService.create(formData);

    if (error) {
      alert(error);
    }

    setIsModalVisible(false);
    navigate('/dashboard');
  };

  return (
    <section className="container new-article-page">
      <div className="new-article-page__header">
        <Link to="/dashboard">
          <BiLeftArrowAlt size={40} color={palette.title} />
        </Link>

        <ThemeSwitcher />
      </div>

      <div className="new-article-page__subheader">
        <h2>Novo artigo</h2>
        <p>Defina o título, thumbnail e escreva seu artigo.</p>
      </div>

      <div className="new-article-page__editor">
        <Toolbar onPublish={() => setIsModalVisible(true)} />

        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ color: palette.title, fontSize: '2rem' }}
          containerStyle={{
            background: 'transparent',
            outlineColor: 'transparent',
            marginTop: '32px',
            padding: 0,
          }}
          placeholder="Escreva o título aqui"
        />

        <div className="new-article-page__editor__dropzone">
          <Dropzone onUpload={setThumbnail} selectedFile={thumbnail} />
        </div>

        <ReactQuill
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          placeholder="Comece seu artigo aqui..."
          style={{
            color: palette.title,
            caretColor: palette.primary,
          }}
        />
      </div>

      <Modal
        title="Publicar artigo"
        description="Preencha os campos abaixo para publicar este artigo"
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        height="60vh"
      >
        <div className="new-article">
          {thumbnail && (
            <div className="new-article__row">
              <img
                className="dropzone__preview"
                src={URL.createObjectURL(thumbnail)}
                alt="Preview do dropzone"
              />
            </div>
          )}

          <div className="new-article__row">
            <Input
              label="Ambicoins"
              placeholder="Recompensa em Ambicoins"
              value={ambicoinsReward}
              onChange={(e) => setAmbicoinsReward(e.target.value)}
            />

            <Input
              label="XP"
              placeholder="Recompensa em XP"
              value={xpReward}
              onChange={(e) => setXpReward(e.target.value)}
            />
          </div>

          <div className="new-article__row" style={{ justifyContent: 'flex-end' }}>
            <Button
              variant="solid"
              text="Publicar"
              style={{ color: palette.primary }}
              primary
              RightIcon={() => (
                <BiSolidCheckCircle color={palette.primary} size={24} />
              )}
              onClick={onSaveArticle}
            />
          </div>
        </div>
      </Modal>
    </section>
  );
}
