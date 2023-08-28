import { useEffect, useState } from 'react';

import { BiSearch, BiSolidCheckCircle, BiLaugh } from 'react-icons/bi';

import { DataList } from '@/components/DataList';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { Dropzone } from '@/components/Dropzone';

import { useTheme } from '@/contexts/ThemeContext';

import {
  CharacterService,
  TCharacter,
  CreatePayload,
} from '@/services/CharacterService';

import { getRelativeUri } from '@/utils';

import './styles.scss';

const Characters: React.FC = () => {
  const { palette } = useTheme();

  const [characters, setCharacters] = useState<TCharacter[]>([]);

  const [search, setSearch] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);

  const cleanModalFields = () => {
    setName('');
    setDescription('');
    setAvatar(null);
  };

  const onSaveNewCharacter = async () => {
    const formData = new FormData();

    const data: CreatePayload = { name, description };

    formData.append('data', JSON.stringify(data));
    if (avatar) formData.append('file', avatar);

    const { error } = await CharacterService.create(formData);

    if (error) {
      alert(error);
    }

    getCharacters();
    setIsModalVisible(false);
    cleanModalFields();
  };

  const getCharacters = async () => {
    const { data, error } = await CharacterService.getAll();

    if (error) {
      alert(error);
      return;
    }

    setCharacters(data ?? []);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const filteredCharacters = characters.filter((hero) => {
    const name = hero.name.trim().toLowerCase();
    const query = search.trim().toLowerCase();

    return name.includes(query);
  });

  const serializedHeroes = filteredCharacters.map((character) => ({
    name: (
      <>
        <img
          style={{ width: '24px', height: '24px', borderRadius: '50%' }}
          src={getRelativeUri(character.avatar_url)}
          alt="Avatar do personagem"
        />
        <p>{character.name}</p>
      </>
    ),
    description: character.description,
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
          text="Novo personagem"
          style={{ color: palette.primary, width: 'fit-content' }}
          primary
          RightIcon={() => <BiLaugh color={palette.primary} size={24} />}
          onClick={() => setIsModalVisible((prev) => !prev)}
        />
      </div>

      <div className="heroes-tab__content">
        <DataList
          header={[
            { key: 'name', label: 'Nome' },
            { key: 'description', label: 'Descrição' },
          ]}
          data={serializedHeroes}
          columnWidths={['30%', '70%']}
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
            <Dropzone selectedFile={avatar} onUpload={setAvatar} />
          </div>

          <div className="new-hero__row" style={{ justifyContent: 'flex-end' }}>
            <Button
              variant="solid"
              text="Salvar"
              style={{ color: palette.primary }}
              primary
              RightIcon={() => (
                <BiSolidCheckCircle color={palette.primary} size={24} />
              )}
              onClick={onSaveNewCharacter}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export { Characters };
