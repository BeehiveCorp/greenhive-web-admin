import { ReactNode, createContext, useContext, useState } from 'react';

type User = {
  id?: string;
  name: string;
  username: string;
  email: string;
  avatar_url: string;
};

type UserContextType = {
  user?: User | null;
  login: () => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user] = useState<User | null>(null);

  const login = () => null;

  const logout = () => null;

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);

  if (!context) throw new Error('useUser must be used within a UserProvider');

  return context;
};
