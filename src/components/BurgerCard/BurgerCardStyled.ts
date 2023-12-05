import styled from "styled-components";

const BurgerCardStyled = styled.article`
  position: relative;

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
      text-shadow: 0px 2px 4px #000c;
    }

    &__image {
      height: 100%;
      width: 100%;
      border-radius: 15px;
      object-fit: cover;
      pointer-events: none;
      user-select: none;
    }
  }
`;

export default BurgerCardStyled;
