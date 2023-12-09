import styled from "styled-components";

const FormStyled = styled.form`
  background-color: #0008;
  padding-top: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 40px;

  .form-controls {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 10px;

    &__submit {
      font-size: 1.35rem;
      border: #fff solid 1px;
      padding: 10px;
      border-radius: 15px;
      margin: 40px 0 0 0;
      width: 170px;
    }

    &__name,
    &__ingredients,
    &__image-url,
    &__price,
    &__calories {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__hasGluten,
    &__isVegan {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    &__price {
      position: relative;
    }

    &__calories {
      position: relative;
    }
  }
  .currency {
    &__value {
      position: absolute;
      bottom: 12px;
      right: 40px;
      font-size: 1.4rem;
      padding: 5px;
    }
  }

  .calories {
    &__value {
      position: absolute;
      bottom: 12px;
      right: 40px;
      font-size: 1.4rem;
      padding: 5px;
    }
  }

  input {
    border-radius: 15px;
    font-size: 1.175rem;
    background-color: transparent;
    font-weight: 400;
    align-self: stretch;
    border: 1px solid #fff;
    padding: 15px;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.neutral};
  }

  label {
    font-family: ${({ theme }) => theme.fonts.content};
    font-size: 1.5rem;
  }
`;

export default FormStyled;
