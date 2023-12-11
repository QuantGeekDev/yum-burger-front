import styled from "styled-components";

const BurgerDetailPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.neutral};
  padding: 0 10px 10px 10px;
  text-align: center;

  .burger-detail {
    &__info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width: 100%;
    }
    &__name {
      padding: 10px;
    }
    &__badges {
      display: flex;
      height: 50px;
      width: 50px;
      padding: 5px;
      align-self: left;
      justify-self: left;
      padding: 5px;
      gap: 10px;
    }

    &__image {
      align-self: center;
      max-width: 500px;
      border-radius: 120px 120px 0 0;
      height: 100%;
      object-fit: fill;
    }

    &__price {
      text-align: right;
    }

    &__bottom {
      display: flex;
      flex-direction: column;
      padding: 10px 10px 10px 10px;
      justify-content: left;
      width: 100%;
      background-color: #fff;
      border-radius: 7px;
      color: ${({ theme }) => theme.colors.primary};
    }

    &__order-button {
      align-self: center;
    }
  }

  .button__text {
    font-size: 1.15rem;
  }
  .ingredients {
    &__title {
      font-size: 1.65rem;
      text-align: start;

      text-decoration: underline;
    }
    &__list {
      padding: 10px 10px 5px 10px;
      font-size: 1.5rem;
      text-align: start;
    }
  }
  .price {
    &__label {
      font-size: 1.65rem;
    }
    &__value {
      font-size: 1.625rem;
    }
  }
`;

export default BurgerDetailPageStyled;
