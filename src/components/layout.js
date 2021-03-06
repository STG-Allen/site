import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import Footer from "./footer"
import Navbar from "./navbar"
import theme from '../styles/theme';
import '../styles/global.css';

const Container = styled.main`
  margin-top: 60px;
`

const UnderConstruction = styled.div`
  color: white;
  background: red;
  padding: 1rem;
`

export default function Layout({ children }) {
  return (
    <>
      <Global styles={css`
        body {
          background: ${theme.colors.background};
          color: ${theme.colors.foreground};
        }
        
        a, a:visited {
          color: ${theme.colors.primary};
          text-decoration: none;
        }
      `} />
      <Navbar />
      {/* page contents */}
      <Container>
        {children}
      </Container>
      {/* footer */}
      <Footer />
    </>
  )
}