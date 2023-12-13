import styled from "styled-components";

const BurgerCardStyled = styled.article`
  position: relative;

  .burger {
    &__title {
      position: absolute;
      top: 12px;
      left: 12px;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.neutral};
      font-family: ${({ theme }) => theme.fonts.title};
      font-size: 1.65rem;
      font-weight: 700;
      line-height: normal;
      text-shadow: 0px 2px 4px #000c;
    }

    &__image {
      height: 250px;
      width: 250px;
      border-radius: 15px;
      object-fit: cover;
    }

    &__delete-button {
      position: absolute;
      cursor: pointer;
      right: 5px;
      top: 5px;
      font-family: ${({ theme }) => theme.fonts.title};
      font-size: 1rem;
      font-weight: 800;
    }
  }
`;

export default BurgerCardStyled;
