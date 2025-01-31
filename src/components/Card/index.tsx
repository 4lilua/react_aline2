import { SSection } from "./styles";
export interface ICard {
  cliente: string
  produto: string
  valor: string
  img: string
}
export const Card = ({ cliente, produto, valor, img }: ICard) => {
  return (
    <SSection>
      <aside>
        <h5>Cliente:</h5>
        <p>{cliente}</p>
      </aside>
      <aside>
        <h5>Produto:</h5>
        <p>{produto}</p>
      </aside>
      <aside>
        <h5>Valor:</h5>
        <p>{valor}</p>
      </aside>
      <div>
        <aside>
          <p>{img}</p>
        </aside>
      </div>
    </SSection>
  );
};
