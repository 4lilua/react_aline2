import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const SSection = styled.section`
  background-color: ${colors.secondary};
  padding: 0.5rem;
  border-radius: 0.5rem;

  aside {
    display: flex;
    padding: 0.2rem;
    color: ${colors.white};
    p {
      font-size: 0.8rem;
      color: ${colors.white};
      margin-left: 0.5rem;
    }
  }
`
