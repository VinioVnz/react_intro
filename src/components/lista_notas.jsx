import React, { Component } from "react";
import CardNota from "./card_nota";

class ListaNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
          return (
            <li>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaNotas;
