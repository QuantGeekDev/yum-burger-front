import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;

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
