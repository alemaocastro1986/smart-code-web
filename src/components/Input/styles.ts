import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 16px;
  }

  label {
    color: var(--secondary);
    font-weight: 400;
    padding-bottom: 4px;
  }

  input {
    border-radius: 8px;
    border: 2px solid var(--primary);
    background-color: var(--back-input);
    padding: 0 16px;
    color: var(--secondary);

    transition: border-color 0.2s;

    &::placeholder {
      color: var(--placeholder);
    }

    &:focus {
      border: 2px solid var(--secondary);
    }
  }
`;
