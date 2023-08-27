import { UserService } from '@/services';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

type User = {
  id?: string;
  name: string;
  username: string;
  email: string;
  avatar_url: string;
};

type UserContextType = {
  user?: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const { data, error } = await UserService.login(email, password);

    if (error) {
      alert(error);
      return;
    }

    setUser(data?.user);
    localStorage.setItem('@token', data?.token);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('@user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('@user', JSON.stringify(user));
    } else {
      localStorage.removeItem('@user');
    }
  }, [user]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('@token');
    localStorage.removeItem('@user');
  };

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
