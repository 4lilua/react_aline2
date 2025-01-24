import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const SFooter = styled.footer`
  /* Rodapé */
  background-color: ${colors.secondary};
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: left;
  a{
    justify-content: space-between;
    padding-left: 1rem;
  }
`
