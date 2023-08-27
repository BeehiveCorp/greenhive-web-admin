export type MenuProps = {
  currentTab: 'LAST_CHAPTERS' | 'CHARACTERS' | 'HEROES' | 'DIFFICULTIES';
  onTabChange: Dispatch<SetStateAction<MENU_TABS>>;
};
