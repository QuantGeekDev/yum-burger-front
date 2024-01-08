import styled from "styled-components";

const NotFoundPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  // TODO: Fix this when we make footer component
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.primary};
  gap: 15px;
  .notFound {
    &__message,
    &__title,
    &__sub-title {
      color: ${({ theme }) => theme.colors.neutral};
      text-shadow: 0px 4px 4px #000c;
    }
    &__title,
    &__sub-title {
      font-size: 2.1rem;
    }

    &__image {
      margin: 10px 0;
    }

    &__message {
      font-size: 1.87rem;
      text-align: center;
    }
  }
`;

export default NotFoundPageStyled;
