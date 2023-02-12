import React from 'react'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { dark } from './styles/theme/dark'
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'

export const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
