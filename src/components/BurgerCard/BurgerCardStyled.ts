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
      text-shadow: 2px 2px 4px #000c;
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
      bottom: 10px;
      left: 10px;
      font-family: ${({ theme }) => theme.fonts.title};
      font-size: 1rem;
      font-weight: 800;
      background-color: #0005;
      padding: 5px;
      border-radius: 10px;
    }

    &__modify-button {
      position: absolute;
      cursor: pointer;
      bottom: 10px;
      right: 10px;
      font-family: ${({ theme }) => theme.fonts.title};
      font-size: 1rem;
      font-weight: 800;
      background-color: #0005;
      padding: 5px;
      border-radius: 10px;
    }
  }

  .button__text {
    text-shadow: #000f 2px 2px;
  }
`;

export default BurgerCardStyled;
