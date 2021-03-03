import React, {
  InputHTMLAttributes,
  useCallback,
  FormEventHandler,
} from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, errorMessage, ...rest }) => {
  const handleValidate = useCallback(
    (e) => {
      if (e.target.validity.valueMissing) {
        let message = errorMessage
          ? errorMessage
          : `O campo ${rest.name} é obrigatório.`;
        e.target.setCustomValidity(message);
      }
    },
    [errorMessage, rest.name]
  );

  return (
    <Container>
      <label htmlFor={rest.name}>{label}</label>
      <input
        {...rest}
        onInvalid={handleValidate}
        onChange={(e) => e.target.setCustomValidity('')}
      />
    </Container>
  );
};

export default Input;
