import React from 'react'

import { Icon } from '@iconify/react'

import { Styled } from './styles'
import LogoImg from '../../assets/logo.svg'

const Header: React.FC = () => {
  return (
    <Styled>
      <div className="logo">
        <img src={LogoImg} alt="" />
        <div className="logo-info">
          <span>Gabriel.</span>
          <strong>tsx</strong>
        </div>
      </div>
      <div className="menu">
        <Icon icon="ic:baseline-menu" />
      </div>
    </Styled>
  )
}

export default Header
