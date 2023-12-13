import styled from "styled-components";

const ModifyBurgerPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.neutral};

  .modify-burger-page {
    &__title {
      text-align: center;
      padding: 5px 0 15px 0;
    }
  }
`;

export default ModifyBurgerPageStyled;
