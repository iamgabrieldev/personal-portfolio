import styled from 'styled-components'

export const Styled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12rem;
  margin-bottom: 4rem;
  padding: 2rem 0rem 0rem 0rem;

  @media (max-width: 720px) {
    gap: 0rem;
  }

  .logo {
    padding: 0rem 0rem 0rem 0rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      min-width: 24px;
    }

    span,
    strong {
      font-size: 2rem;
      font-weight: bold;
    }

    strong {
      color: ${({ theme }) => theme.primary};
    }
  }

  .menu {
    svg {
      width: 3rem;
      height: 3rem;
      color: ${({ theme }) => theme.primary};
      cursor: pointer;
    }
  }
`
