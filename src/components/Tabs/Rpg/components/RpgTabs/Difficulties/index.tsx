import { DataList } from '@/components/DataList';

import './styles.scss';

const Difficulties: React.FC = () => {
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

  const columnWidths = ['10%', '60%', '30%']; // Largura das colunas em porcentagem

  return (
    <div className="difficulties-tab">
      <DataList header={headers} data={data} columnWidths={columnWidths} />
    </div>
  );
};

export { Difficulties };
