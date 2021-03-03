import React, { createContext, useCallback, useState } from 'react';

import api from '../services/api';

interface IUser {
  id?: number;
  name?: string;
  status?: true;
  email?: string;
}

interface IUserData {
  user: IUser;
  token: string;
}

interface ICredentials {
  username?: string;
  password?: string;
}

export interface DataContext {
  signIn(credentials: ICredentials): Promise<void>;
  signOut(): void;
  user: IUser;
  token: string;
}

export const AuthContext = createContext<DataContext>({} as DataContext);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IUserData>(() => {
    const user = localStorage.getItem('@SmartCode:user');
    const token = localStorage.getItem('@SmartCode:token');

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { user: JSON.parse(user), token: token };
    }
    return {} as IUserData;
  });

  const signIn = useCallback(
    async ({ username = '', password = '' }: ICredentials) => {
      const response = await api.post<IUserData>('/session', {
        username,
        password,
      });

      const { user, token } = response.data;

      localStorage.setItem('@SmartCode:user', JSON.stringify(user));
      localStorage.setItem('@SmartCode:token', JSON.stringify(token));

      setData({ user, token });
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@SmartCode:user');
    setData({} as IUserData);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, token: data.token, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
