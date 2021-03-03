import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  max-width: 600px;

  img {
    margin-bottom: 24px;
  }

  form {
    label {
      color: white;
    }
    button {
      height: 54px;
      border: 2px solid var(--primary);

      border-radius: 8px;
      margin-top: 24px;

      width: 100%;

      background-color: var(--secondary);
      color: var(--primary);
      transition: background-color 0.2s;

      &:hover {
        background-color: var(--secondary-hover);
        color: white;
      }
    }
  }
`;
