import styled from 'styled-components';

export const Container = styled.nav`
  background-color: var(--back-input);
  height: 80px;
  padding: 20px 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 180px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    img {
      width: 120px;
    }
  }

  button {
    background-color: transparent;
    color: var(--secondary);
    padding: 4px 24px;

    border: 2px solid var(--secondary);
    border-radius: 8px;

    transition: background-color 0.2s;

    &:hover {
      background-color: var(--secondary);
      color: white;
    }
  }
`;
