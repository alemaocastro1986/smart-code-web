import { useContext } from 'react';
import { AuthContext, DataContext } from '../store/authProvider';

export const useAuth = (): DataContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};
