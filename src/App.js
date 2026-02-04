import { Component } from "react";
import FormularioCadastro from "./components/formulario_cadastro/";
import ListaNotas from "./components/lista_notas/";
import './assets/App.css'
class App extends Component{
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro/>
        <ListaNotas/>      
      </section>
    );
  }
}

export default App;
