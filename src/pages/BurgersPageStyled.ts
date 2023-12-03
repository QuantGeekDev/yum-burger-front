import styled from "styled-components";

const BurgersPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};

  .burgers-page {
    &__title {
      text-align: center;
      color: ${({ theme }) => theme.colors.neutral};
    }
  }
`;

export default BurgersPageStyled;
