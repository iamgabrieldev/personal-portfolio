import styled from 'styled-components'

export const Styled = styled.main`
  padding: 0rem 2rem 1rem;

  main {
    h2 {
      @media (max-width: 720px) {
        margin: 0 auto 0 0;
      }
      display: block;
      width: 90px;
      font-size: 2rem;
      padding: 0rem 0rem 0.5rem 0rem;
      margin: 2rem auto 0rem;
      margin-left: 16vw;
      border-bottom: 4px solid #573ffd;
    }
    section {
      .card {
        h2 {
          @media (max-width: 1080px) {
            margin: 0;
          }
          margin: 2rem 0rem 0rem 18%;
        }

        .card-info {
          @media (max-width: 1080px) {
            flex-direction: column-reverse;
            img {
              width: 180px;
            }
          }

          padding: 4rem 0rem;
          width: 60vw;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4rem;

          .card-text {
            @media (max-width: 1080px) {
              margin: 0px;
            }

            background: linear-gradient(
              133.56deg,
              #302529 15.66%,
              rgba(39, 20, 27, 0.477839) 53.87%,
              rgba(36, 10, 19, 0) 88.84%
            );
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            gap: 4rem;
            max-width: 420px;
            min-width: 300px;
            padding: 1rem 1rem 4rem;
            p {
              margin-bottom: -48px;
              min-width: 320px;
              font-size: 0.875rem;
              line-height: 180%;
            }
          }
        }
      }
    }
  }

  .intro {
    padding: 0rem 0rem 4rem 0rem;
    margin: 0rem 16rem;
    border-bottom: 2px solid #fff;
    justify-content: center;
    width: 60vw;
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 1080px) {
      flex-direction: column-reverse;
      width: 100%;
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
        margin: 2.5rem 0rem 0rem;
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
        margin: 2rem 0rem 0rem;

        @media (max-width: 720px) {
          font-size: 1rem;
          margin: 1.5rem auto;
          display: block;
          width: 100%;
        }
      }
    }
  }
`
