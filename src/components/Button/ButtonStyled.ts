import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 80px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;

  &.button {
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
