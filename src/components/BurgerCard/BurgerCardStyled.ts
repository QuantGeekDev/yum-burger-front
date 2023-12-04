import styled from "styled-components";

const BurgerCardStyled = styled.article`
  position: relative;
  box-shadow: 0px 4px 4px 0px #000c;

  .burger {
    &__title {
      position: absolute;
      top: -10px;
      left: 10px;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.neutral};
      font-family: ${({ theme }) => theme.fonts.title};
      font-size: 2rem;
      font-weight: 700;
      line-height: normal;
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.75);
    }

    &__image {
      height: 100%;
      width: 100%;
      border-radius: 15px;
      object-fit: cover;
      pointer-events: none;
      z-index: -1;
      -webkit-user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
  }
`;

export default BurgerCardStyled;
