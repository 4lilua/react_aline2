import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function Comentario() {
  return (
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          cliente={item.cliente}
          produto={item.produto}
          valor={item.valor}
          img={item.img}
        />
      ))}
    </S.Section>
  )
}
