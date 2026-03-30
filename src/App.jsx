import Card from "./components/Card.jsx";
import Formulario from "./components/Formulario.jsx";
import StatusBadge from "./components/StatusBadge.jsx";
import { useState } from "react";

import Arqueira from "./assets/avatar/arqueira.png";
import Guerreiro from "./assets/avatar/guerreiro.png";
import Maga from "./assets/avatar/mage.png";

function App() {
  const [herois, setHerois] = useState([
    { id: 1, nome: "Grog1", classe: "Guerreiro", imagem: Guerreiro, status: "online" },
    { id: 2, nome: "Arthemis1", classe: "Arqueira", imagem: Arqueira, status: "ausente" },
    { id: 3, nome: "Elora1", classe: "Maga", imagem: Maga, status: "offline" },
    { id: 4, nome: "Grog2", classe: "Guerreiro", imagem: Guerreiro, status: "online" },
    { id: 5, nome: "Arthemis2", classe: "Arqueira", imagem: Arqueira, status: "ausente" },
    { id: 6, nome: "Elora2", classe: "Maga", imagem: Maga, status: "offline" },
  ]);

  const [lista, setLista] = useState(herois);

  function excluirHeroi(id) {
    const novoArray = herois.filter((heroi) => heroi.id != id);
    setHerois(novoArray);
    setLista(novoArray);
    alert("Herói removido");
  }

  function filtrarMago() {
    setLista(herois.filter((h) => h.classe == "Maga"));
  }

  function filtrarGuerreiro() {
    setLista(herois.filter((h) => h.classe == "Guerreiro"));
  }

  function filtrarArqueira() {
    setLista(herois.filter((h) => h.classe == "Arqueira"));
  }

  function mostrarTodos() {
    setLista(herois);
  }

  return (
    <div className="bg-[#0f1a2b] min-h-screen pb-10">
      {/* Header madeira */}
      <div
        className="h-32 w-full
        bg-[url('/img/madeira.jpg')]
        bg-no-repeat bg-center bg-cover
        border-b-4 border-[#f5c542]
        flex flex-col items-center justify-center text-white text-center"
      >
        <h1 className="text-4xl font-bold drop-shadow-lg">
          Seleção de Personagem
        </h1>
        <h2 className="text-xl font-semibold drop-shadow">
          Recrute seu time!
        </h2>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto my-8 px-4">
        <button
          onClick={filtrarArqueira}
          className="bg-[#1f2a44] text-white py-2 rounded-xl border-2 border-[#f5c542] hover:bg-[#2b3a5f] transition"
        >
          Arqueira
        </button>

        <button
          onClick={filtrarGuerreiro}
          className="bg-[#1f2a44] text-white py-2 rounded-xl border-2 border-[#f5c542] hover:bg-[#2b3a5f] transition"
        >
          Guerreiro
        </button>

        <button
          onClick={filtrarMago}
          className="bg-[#1f2a44] text-white py-2 rounded-xl border-2 border-[#f5c542] hover:bg-[#2b3a5f] transition"
        >
          Mago
        </button>

        <button
          onClick={mostrarTodos}
          className="bg-[#1f2a44] text-white py-2 rounded-xl border-2 border-[#f5c542] hover:bg-[#2b3a5f] transition"
        >
          Todos
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {lista.map((heroi) => (
          <Card key={heroi.id} heroi={heroi} excluirHeroi={excluirHeroi} />
        ))}
      </div>

      {/* Formulário */}
      <div className="mt-12">
        <Formulario />
      </div>
    </div>
  );
}

export default App;