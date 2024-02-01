import { createContext, useContext } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { User } from '../types';

type ContextType = {
  removeUser: () => void;
  setLoginedUser: (user: User) => void;
  user: User | null;
};

const UserContext = createContext<ContextType>({} as ContextType);

type Props = {
  children: React.ReactNode;
};

export const ProvideUser = ({ children }: Props) => {
  const user = useProvideUser();
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};

const useProvideUser = () => {
  const [user, setUser] = useLocalStorage<User | null>('user', {} as User);

  const setLoginedUser = (userData: User) => {
    setUser(userData);
  };

  const removeUser = () => {
    setUser(null);
  };

  return {
    setLoginedUser,
    user,
    removeUser
  };
};
