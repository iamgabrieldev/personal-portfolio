import React from 'react'

import { Styled } from './styles'
import Header from '../../components/Header'

import IlustrationSvg from '../../assets/ilustration.svg'
import PerfilImg from '../../assets/perfil.png'

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
            <div className="card">
              <h2>Sobre</h2>
              <div className="card-info">
                <img
                  src={PerfilImg}
                  alt="imagem de perfil do gabriel oliveira"
                />
                <div className="card-text">
                  <p>
                    Apaixonado por engenharia de software comecei minha jornada
                    com apenas 15 anos programando sites com{' '}
                    <strong>HTML5</strong>, <strong>CSS3</strong> e{' '}
                    <strong>JS</strong> em 2015, depois fiz uma pausa na
                    carreira para estudar pro vestibular. Fui aprovado em
                    Engenharia de Software pela Universidade Tecnológica Federal
                    do Paraná campus Cornélio Procópio.
                  </p>
                  <p>
                    Comecei a minha jornada profissional dentro do movimento
                    empresa júnior (MEJ) na Unectjr empresa júnior da UTFPR-CP,
                    no final de 2020, comecei minha carreira com{' '}
                    <strong>Javascript</strong>, <strong>Typescript</strong>,{' '}
                    <strong>React</strong>, <strong>Next.js</strong>{' '}
                    posteriormente aprendi outras tecnologias.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Styled>
    </>
  )
}

export default Home
