export type SideMenuProps = {
  currentTab: 'HOME' | 'BLOG' | 'RPG';
  onTabChange: Dispatch<SetStateAction<SIDE_MENU_TABS>>;
};
