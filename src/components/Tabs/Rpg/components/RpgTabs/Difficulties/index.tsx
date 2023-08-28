import { useEffect, useState } from 'react';

import { BiJoystick, BiPalette, BiSearch, BiSolidCheckCircle } from 'react-icons/bi';

import { DataList } from '@/components/DataList';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';

import { useTheme } from '@/contexts/ThemeContext';

import { DifficultyService, TDifficulty } from '@/services';

import './styles.scss';

const Difficulties: React.FC = () => {
  const { palette } = useTheme();

  const [difficulties, setDifficulties] = useState<TDifficulty[]>([]);

  const [search, setSearch] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [name, setName] = useState('');
  const [hexColor, setHexColor] = useState(palette.primary);
  const [xpReward, setXpReward] = useState('');
  const [ambicoinsReward, setAmbicoinsReward] = useState('');

  const cleanModalFields = () => {
    setName('');
    setHexColor('');
    setXpReward('');
    setAmbicoinsReward('');
  };

  const onSaveNewDifficulty = async () => {
    const { error } = await DifficultyService.create({
      ambicoins_reward: Number(ambicoinsReward),
      xp_reward: Number(xpReward),
      hex_code: hexColor,
      name,
    });

    if (error) {
      alert(error);
    }

    getDifficulties();
    setIsModalVisible(false);
    cleanModalFields();
  };

  const getDifficulties = async () => {
    const { data, error } = await DifficultyService.getAll();

    if (error) {
      alert(error);
      return;
    }

    setDifficulties(data ?? []);
  };

  useEffect(() => {
    getDifficulties();
  }, []);

  const filteredDifficulties = difficulties.filter((difficulty) => {
    const name = difficulty.name.trim().toLowerCase();
    const query = search.trim().toLowerCase();

    return name.includes(query);
  });

  const serializedDifficulties = filteredDifficulties.map((difficulty) => ({
    name: difficulty.name,
    ambicoins_reward: difficulty.ambicoins_reward,
    xp_reward: difficulty.xp_reward,
    hex_code: (
      <>
        <div
          style={{
            background: difficulty.hex_code,
            height: '12px',
            width: '12px',
            borderRadius: '50%',
          }}
        />
        <p>{difficulty.hex_code}</p>
      </>
    ),
  }));

  return (
    <div className="difficulties-tab">
      <div className="difficulties-tab__filter">
        <Input
          placeholder="Buscar por nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          RightIcon={() => <BiSearch color={palette.primary} size={24} />}
        />

        <Button
          variant="solid"
          text="Nova dificuldade"
          style={{ color: palette.primary, width: 'fit-content' }}
          primary
          RightIcon={() => <BiJoystick color={palette.primary} size={24} />}
          onClick={() => setIsModalVisible((prev) => !prev)}
        />
      </div>

      <div className="difficulties-tab__content">
        <DataList
          header={[
            { key: 'name', label: 'Nome' },
            { key: 'ambicoins_reward', label: 'Recompensa em Ambicoins' },
            { key: 'xp_reward', label: 'Recompensa em XP' },
            { key: 'hex_code', label: 'Cor' },
          ]}
          data={serializedDifficulties}
          columnWidths={['20%', '30%', '30%', '20%']}
        />
      </div>

      <Modal
        title="Nova dificuldade"
        description="Preencha os campos abaixo para criar um novo nível de dificuldade"
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <div className="new-difficulty">
          <div className="new-difficulty__row">
            <Input
              label="Nome"
              placeholder="Nome da dificuldade"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Cor"
              placeholder="Cor da dificuldade"
              value={hexColor}
              onChange={(e) => setHexColor(e.target.value)}
              onColorPick={({ hex }) => setHexColor(hex)}
              RightIcon={() => (
                <BiPalette color={hexColor ?? palette.primary} size={24} />
              )}
            />
          </div>

          <div className="new-difficulty__row">
            <Input
              label="Recompensa em XP"
              placeholder="Recompensa em XP"
              value={xpReward}
              onChange={(e) => setXpReward(e.target.value)}
            />

            <Input
              label="Recompensa em Ambicoins"
              placeholder="Recompensa em Ambicoins"
              value={ambicoinsReward}
              onChange={(e) => setAmbicoinsReward(e.target.value)}
            />
          </div>

          <div
            className="new-difficulty__row"
            style={{ justifyContent: 'flex-end' }}
          >
            <Button
              variant="solid"
              text="Salvar"
              style={{ color: palette.primary }}
              primary
              RightIcon={() => (
                <BiSolidCheckCircle color={palette.primary} size={24} />
              )}
              onClick={onSaveNewDifficulty}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export { Difficulties };
