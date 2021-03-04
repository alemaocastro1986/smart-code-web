import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  max-width: 600px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    img {
      margin-bottom: 24px;

      max-width: 180px;
    }

    h1 {
      color: var(--white);
      span {
        color: var(--secondary);
      }
    }

    form {
      align-self: center;
      padding: 0 20px;
      width: 100%;
      max-width: 350px;
      label {
        color: white;
        align-self: flex-start;
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
  }

  footer {
    position: absolute;
    color: var(--gray);
    font-size: 0.8rem;
    bottom: 20px;
    word-wrap: normal;
    text-align: center;
  }
`;
