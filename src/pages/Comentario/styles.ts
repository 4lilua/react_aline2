import styled from 'styled-components'

export const Section = styled.section`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 1rem;
  @media (max-width: 1000px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`
