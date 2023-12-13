import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  &.button {
    &__icon {
      fill: #fff;
    }
    &--transparent {
      border: none;
      color: ${({ theme }) => theme.colors.neutral};

      & :active {
        text-decoration: underline;
      }
    }
  }
`;

export default ButtonStyled;
