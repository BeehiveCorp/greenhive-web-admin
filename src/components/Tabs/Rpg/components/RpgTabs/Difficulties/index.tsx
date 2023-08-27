import { useState } from 'react';
import { BiSearch, BiSolidJoystick } from 'react-icons/bi';

import { DataList } from '@/components/DataList';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';

import { useTheme } from '@/contexts/ThemeContext';

import './styles.scss';

const Difficulties: React.FC = () => {
  const { palette } = useTheme();

  const [search, setSearch] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const headers = [
    { key: 'name', label: 'Nome' },
    { key: 'age', label: 'Idade' },
    { key: 'city', label: 'Cidade' },
  ];

  const data = [
    { name: 'João', age: 28, city: 'RJ' },
    { name: 'Isabela', age: 18, city: 'RJ' },
    { name: 'Jorge', age: 23, city: 'SP' },
  ];

  const columnWidths = ['10%', '60%', '30%'];

  const filteredData = data.filter((row) => row.name.includes(search));

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
          RightIcon={() => <BiSolidJoystick color={palette.primary} size={24} />}
          onClick={() => setIsModalVisible((prev) => !prev)}
        />
      </div>

      <div className="difficulties-tab__content">
        <DataList header={headers} data={filteredData} columnWidths={columnWidths} />
      </div>

      <Modal
        title="Nova dificuldade"
        description="Preencha os campos abaixo para criar um novo nível de dificuldade"
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <p>Content</p>
      </Modal>
    </div>
  );
};

export { Difficulties };
