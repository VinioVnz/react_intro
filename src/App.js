import { Component } from "react";
import FormularioCadastro from "./components/formulario_cadastro";
import ListaNotas from "./components/lista_notas";

class App extends Component{
  render() {
    return (
      <section>
        <FormularioCadastro/>
        <ListaNotas/>      
      </section>
    );
  }
}

export default App;
