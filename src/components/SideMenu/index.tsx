import {
  BiAlignLeft,
  BiLogOutCircle,
  BiSolidDashboard,
  BiSolidNavigation,
  BiSolidPencil,
} from 'react-icons/bi';

import { Greenhive } from '@/components/Greenhive';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Button } from '@/components/Button';
import { Avatar } from '@/components/Avatar';

import { useTheme } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';

// eslint-disable-next-line react-refresh/only-export-components
export enum SIDE_MENU_TABS {
  HOME = 'HOME',
  BLOG = 'BLOG',
  RPG = 'RPG',
}

import { SideMenuProps } from './types';

import './styles.scss';

const SideMenu: React.FC<SideMenuProps> = ({ currentTab, onTabChange }) => {
  const { user, logout } = useUser();
  const { palette } = useTheme();

  return (
    <div className="side-menu">
      <div className="side-menu__logo">
        <Greenhive.Icon color={palette.title} size={40} />
      </div>

      <div className="side-menu__tabs">
        <ul>
          <li
            onClick={() => onTabChange(SIDE_MENU_TABS.HOME)}
            className={`${currentTab === SIDE_MENU_TABS.HOME ? 'active' : ''}`}
          >
            <BiSolidDashboard size={20} />
            <p>Home</p>
          </li>

          <li
            onClick={() => onTabChange(SIDE_MENU_TABS.BLOG)}
            className={`${currentTab === SIDE_MENU_TABS.BLOG ? 'active' : ''}`}
          >
            <BiAlignLeft size={20} />
            <p>Blog</p>
          </li>

          <li
            onClick={() => onTabChange(SIDE_MENU_TABS.RPG)}
            className={`${currentTab === SIDE_MENU_TABS.RPG ? 'active' : ''}`}
          >
            <BiSolidNavigation size={20} />
            <p>RPG</p>
          </li>
        </ul>
      </div>

      <div className="side-menu__profile">
        <Avatar
          style={{ backgroundColor: palette.background, marginBottom: '16px' }}
          size={80}
        />

        <p className="side-menu__profile__name">{user?.name}</p>
        <p className="side-menu__profile__company">Ambipar Group</p>

        <div className="side-menu__profile__actions">
          <Button
            variant="outline"
            primary
            style={{ width: '48px', borderRadius: '50%', padding: 0 }}
            RightIcon={() => <BiLogOutCircle size={20} color={palette.primary} />}
            onClick={logout}
          />

          <Button
            variant="outline"
            primary
            style={{ width: '48px', borderRadius: '50%', padding: 0 }}
            RightIcon={() => <BiSolidPencil size={24} color={palette.primary} />}
          />
        </div>
      </div>

      <div className="side-menu__theme-switcher">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export { SideMenu };
