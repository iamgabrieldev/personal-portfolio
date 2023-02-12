import styled from 'styled-components'

export const Styled = styled.header`
  padding: 1rem 0rem 2rem 2rem;
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
`
