import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  place-content: center; /* mesma coisa que justify-content: center e align-items: center */
  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    /* somente os links que estão no primeiro nível abaixo do content, não mexer nos níveis abaixo ("esqueci minha senha") */
    color: #ff9000;
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
