// eslint-disable-next-line react-refresh/only-export-components
export enum MENU_TABS {
  LAST_CHAPTERS = 'LAST_CHAPTERS',
  CHARACTERS = 'CHARACTERS',
  HEROES = 'HEROES',
  DIFFICULTIES = 'DIFFICULTIES',
}

import { MenuProps } from './types';

import './styles.scss';

const RpgMenu: React.FC<MenuProps> = ({ currentTab, onTabChange }) => {
  return (
    <div className="menu">
      <ul>
        <li
          onClick={() => onTabChange(MENU_TABS.LAST_CHAPTERS)}
          className={`${currentTab === MENU_TABS.LAST_CHAPTERS ? 'active' : ''}`}
        >
          <p>Últimos capítulos</p>
          {currentTab == MENU_TABS.LAST_CHAPTERS && <div className="detail" />}
        </li>

        <li
          onClick={() => onTabChange(MENU_TABS.CHARACTERS)}
          className={`${currentTab === MENU_TABS.CHARACTERS ? 'active' : ''}`}
        >
          <p>Personagens</p>
          {currentTab == MENU_TABS.CHARACTERS && <div className="detail" />}
        </li>

        <li
          onClick={() => onTabChange(MENU_TABS.HEROES)}
          className={`${currentTab === MENU_TABS.HEROES ? 'active' : ''}`}
        >
          <p>Heróis</p>
          {currentTab == MENU_TABS.HEROES && <div className="detail" />}
        </li>

        <li
          onClick={() => onTabChange(MENU_TABS.DIFFICULTIES)}
          className={`${currentTab === MENU_TABS.DIFFICULTIES ? 'active' : ''}`}
        >
          <p>Dificuldades</p>
          {currentTab == MENU_TABS.DIFFICULTIES && <div className="detail" />}
        </li>
      </ul>
    </div>
  );
};

export { RpgMenu };
