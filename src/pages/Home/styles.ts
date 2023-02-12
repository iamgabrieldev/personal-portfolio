import styled from 'styled-components'

export const Styled = styled.main`
  padding: 0rem 2rem 1rem;

  main {
    section {
      h2 {
        font-size: 1.5rem;
        padding: 0rem 0rem 0.5rem 0rem;
        margin-right: 17rem;
        border-bottom: 4px solid #573ffd;
      }
    }
  }

  .intro {
    margin: 0rem 16rem;
    border-bottom: 1px solid #fff;
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 1080px) {
      flex-direction: column-reverse;
      margin: 0rem 0rem 1rem;
      img {
        width: 80vw;
      }
    }

    div {
      h1 {
        @media (max-width: 1080px) {
          font-size: 1.5rem;
          line-height: 2rem;
        }

        font-size: 2rem;
        min-width: 320px;
        max-width: 420px;
        line-height: 2.5rem;
        margin: 1.5rem 0rem 0rem;
      }

      button {
        padding: 1rem 3.5rem;
        border-radius: 4px;
        color: ${({ theme }) => theme.white};
        background: linear-gradient(
          90deg,
          #e761c9 2.02%,
          #be1990 27.85%,
          #aa1c82 50.15%,
          #971e7c 77.14%
        );
        font-size: 1.5rem;
        font-weight: bold;
        margin: 1rem 0rem 2rem;
      }
    }
  }
`