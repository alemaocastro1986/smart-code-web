import React, { useCallback, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '../../../hooks/Auth';

import Input from '../../../components/Input';
import logo from '../../../assets/smart_code.png';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        setLoading(true);
        const formData = new FormData(e.target as HTMLFormElement);

        const username = String(formData.get('username'));
        const password = String(formData.get('password'));

        await signIn({ username, password });
      } catch (error) {
        if (error.message === 'Request failed with status code 500') {
          toast.error('Ops! Algo deu errado verifique suas credenciais.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } finally {
        setLoading(false);
      }
    },
    [signIn]
  );
  return (
    <Container>
      <div>
        <img src={logo} alt="smart_code_logo" />
        <form onSubmit={handleSubmit}>
          <Input
            label="Usuário"
            type="text"
            placeholder="Informe seu CPF"
            name="username"
            required
            autoSave="false"
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Sua senha secreta"
            name="password"
            required
          />

          <button type="submit">{loading ? 'Aguarde...' : 'Entrar'}</button>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
