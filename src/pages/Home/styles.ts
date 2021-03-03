import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  main {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  max-width: 320px;
  width: 100%;
  height: auto;

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
`;
