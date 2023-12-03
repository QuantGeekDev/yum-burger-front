import styled from "styled-components";

const NavigationBarStyled = styled.nav`
  .nav {
    &__list {
      display: flex;
      justify-content: space-between;
      padding: 0px 15px;
      align-items: center;
      color: ${({ theme }) => theme.colors.tertiary};
      font-family: ${({ theme }) => theme.fonts.title};
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    &__list .active {
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;

export default NavigationBarStyled;
