import ListaNotas from "./components/lista_notas";

function App() {
  return (
    <section>
      <form>
        <input type='text' placeholder="Título" />
        <textarea placeholder="Escreva sua nota" />
        <button>Criar nota</button>
      </form>
      <ListaNotas/>
    </section>
  );
}

export default App;
