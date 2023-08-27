import { useState } from 'react';
import { MENU_TABS, RpgMenu } from './components';

import { RpgTabs } from './components/RpgTabs';

import './styles.scss';

const Rpg: React.FC = () => {
  const [tab, setTab] = useState(MENU_TABS.LAST_CHAPTERS);

  const CurrentTab = () => {
    switch (tab) {
      case MENU_TABS.LAST_CHAPTERS:
        return <RpgTabs.LastChapters />;
      case MENU_TABS.CHARACTERS:
        return <RpgTabs.Characters />;
      case MENU_TABS.HEROES:
        return <RpgTabs.Heroes />;
      case MENU_TABS.DIFFICULTIES:
        return <RpgTabs.Difficulties />;
    }
  };

  return (
    <div className="rpg-tab">
      <h3 className="rpg-tab__title">RPG</h3>

      <div className="rpg-tab__tabs">
        <RpgMenu currentTab={tab} onTabChange={setTab} />
      </div>

      <div className="rpg-tab__separator" />

      <div className="rpg-tab__content">
        <CurrentTab />
      </div>
    </div>
  );
};

export { Rpg };
