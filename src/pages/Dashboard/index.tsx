import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '@/contexts/UserContext';
import { SIDE_MENU_TABS, SideMenu } from '@/components/SideMenu';
import { Tabs } from '@/components/Tabs';

import './styles.scss';

export function Dashboard() {
  const { user } = useUser();
  const navigate = useNavigate();

  const [tab, setTab] = useState(SIDE_MENU_TABS.HOME);

  useEffect(() => {
    if (!user?.id) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  const CurrentTab = () => {
    switch (tab) {
      case SIDE_MENU_TABS.HOME:
        return <Tabs.Home />;
      case SIDE_MENU_TABS.BLOG:
        return <Tabs.Blog />;
      case SIDE_MENU_TABS.RPG:
        return <Tabs.Rpg />;
    }
  };

  return (
    <section className="container dashboard-page">
      <SideMenu currentTab={tab} onTabChange={setTab} />
      <CurrentTab />
    </section>
  );
}
