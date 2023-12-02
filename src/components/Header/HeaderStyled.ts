import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  height: 71px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  align-items: center;
  padding: 0 15px;

  .header {
    &__logo {
      height: 18vw;
      width: 18vw;
    }

    &__title {
      color: ${({ theme }) => theme.colors.primary};
      text-shadow: 0px 2px 4px #0003;
      font-weight: 800;
      font-size: 2rem;
      line-height: normal;
    }
  }
`;

export default HeaderStyled;
