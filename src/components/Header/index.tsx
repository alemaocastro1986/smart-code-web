import React, { useCallback } from 'react';

import { useAuth } from '../../hooks/Auth';

import { Container } from './styles';
import logo from '../../assets/smart_code.png';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <img src={logo} alt="Smart Code logo" />
      <button type="button" onClick={handleSignOut}>
        Sair
      </button>
    </Container>
  );
};

export default Header;
