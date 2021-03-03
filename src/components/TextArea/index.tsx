import React, { TextareaHTMLAttributes, useCallback } from 'react';

import { Container } from './styles';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errorMessage?: string;
}

const TextArea: React.FC<InputProps> = ({
  label,
  errorMessage,
  value,
  ...rest
}) => {
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
      <textarea value={value} onInvalid={handleValidate} {...rest} />
    </Container>
  );
};

export default TextArea;
