import React from 'react'

import { Styled } from './styles'

import LogoImg from '../../assets/logo.svg'

const Header: React.FC = () => {
  return (
    <Styled>
      <img src={LogoImg} alt="" />
      <div className="logo-info">
        <span>Gabriel.</span>
        <strong>tsx</strong>
      </div>
    </Styled>
  )
}

export default Header
