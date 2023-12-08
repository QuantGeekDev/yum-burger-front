import styled from "styled-components";

const AddBurgerPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 10px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.neutral};

  .add-burger-page {
    &__title {
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.title};
      color: ${({ theme }) => theme.colors.neutral};
    }
  }
`;

export default AddBurgerPageStyled;
