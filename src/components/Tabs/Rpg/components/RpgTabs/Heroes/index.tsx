import { useEffect, useState } from 'react';

import { BiSearch, BiSolidCheckCircle, BiUserPin } from 'react-icons/bi';

import { DataList } from '@/components/DataList';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { Textarea } from '@/components/Textarea';
import { Dropzone } from '@/components/Dropzone';

import { useTheme } from '@/contexts/ThemeContext';

import { HeroService, THero, CreatePayload } from '@/services/HeroService';

import { getRelativeUri } from '@/utils';

import './styles.scss';

const Heroes: React.FC = () => {
  const { palette } = useTheme();

  const [heroes, setHeroes] = useState<THero[]>([]);

  const [search, setSearch] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [lore, setLore] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);

  const cleanModalFields = () => {
    setName('');
    setDescription('');
    setLore('');
    setAvatar(null);
  };

  const onSaveNewHero = async () => {
    const formData = new FormData();

    const data: CreatePayload = { name, description, lore };

    formData.append('data', JSON.stringify(data));
    if (avatar) formData.append('file', avatar);

    const { error } = await HeroService.create(formData);

    if (error) {
      alert(error);
    }

    getHeroes();
    setIsModalVisible(false);
    cleanModalFields();
  };

  const getHeroes = async () => {
    const { data, error } = await HeroService.getAll();

    if (error) {
      alert(error);
      return;
    }

    setHeroes(data ?? []);
  };

  useEffect(() => {
    getHeroes();
  }, []);

  const filteredHeroes = heroes.filter((hero) => {
    const name = hero.name.trim().toLowerCase();
    const query = search.trim().toLowerCase();

    return name.includes(query);
  });

  const serializedHeroes = filteredHeroes.map((hero) => ({
    name: (
      <>
        <img
          style={{ width: '24px', height: '24px', borderRadius: '50%' }}
          src={getRelativeUri(hero.avatar_url)}
          alt="Avatar do herói"
        />
        <p>{hero.name}</p>
      </>
    ),
    description: hero.description,
    lore: hero.lore,
  }));

  return (
    <div className="heroes-tab">
      <div className="heroes-tab__filter">
        <Input
          placeholder="Buscar por nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          RightIcon={() => <BiSearch color={palette.primary} size={24} />}
        />

        <Button
          variant="solid"
          text="Novo herói"
          style={{ color: palette.primary, width: 'fit-content' }}
          primary
          RightIcon={() => <BiUserPin color={palette.primary} size={24} />}
          onClick={() => setIsModalVisible((prev) => !prev)}
        />
      </div>

      <div className="heroes-tab__content">
        <DataList
          header={[
            { key: 'name', label: 'Nome' },
            { key: 'description', label: 'Descrição' },
            { key: 'lore', label: 'Lore' },
          ]}
          data={serializedHeroes}
          columnWidths={['20%', '30%', '50%']}
        />
      </div>

      <Modal
        title="Novo herói"
        description="Preencha os campos abaixo para criar um novo nível de dificuldade"
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        height="90vh"
      >
        <div className="new-hero">
          <div className="new-hero__row">
            <Input
              label="Nome"
              placeholder="Nome do herói"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              label="Descrição"
              placeholder="Descrição do herói"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="new-hero__row">
            <Textarea
              label="Lore"
              placeholder="Lore do herói"
              value={lore}
              onChange={(e) => setLore(e.target.value)}
            />
          </div>

          <div className="new-hero__row">
            <Dropzone selectedFile={avatar} onUpload={setAvatar} />
          </div>

          <div className="new-hero__row">
            <Button
              variant="solid"
              text="Salvar"
              style={{ color: palette.primary }}
              primary
              RightIcon={() => (
                <BiSolidCheckCircle color={palette.primary} size={24} />
              )}
              onClick={onSaveNewHero}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export { Heroes };
