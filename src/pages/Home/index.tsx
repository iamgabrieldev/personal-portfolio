import React from 'react'

import { Styled } from './styles'
import Header from '../../components/Header'

import IlustrationSvg from '../../assets/ilustration.svg'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Styled>
        <section className="intro">
          <div>
            <h1>
              Engenheiro de Software e Designer UI/UX com foco em produtos
              digitais
            </h1>
            <button>Entre em Contato</button>
          </div>
          <img
            src={IlustrationSvg}
            alt="ilustração de um desenvolvedor de software"
          />
        </section>
        <main>
          <section>
            <h2>Sobre</h2>
          </section>
        </main>
      </Styled>
    </>
  )
}

export default Home
