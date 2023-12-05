import styled from "styled-components";

const LoadingStyled = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: #fffa;

  .loading {
    &__message {
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.title};
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.primary};
      text-transform: uppercase;
    }
  }

  @media (prefers-reduced-motion) {
    .loading {
      &__spinner {
        display: none;
      }
    }
  }
`;

export default LoadingStyled;
