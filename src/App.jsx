import Card from "./components/Card.jsx";
import Formulario from "./components/Formulario.jsx";
import StatusBadge from "./components/StatusBadge.jsx";
import { useState } from "react";

import Arqueiro from "./assets/avatar/arqueira.png";
import Guerreiro from "./assets/avatar/guerreiro.png";
import Mago from "./assets/avatar/mage.png";

function App() {
  const [herois, setHerois] = useState([
    { id: 1, nome: "Grog1", classe: "Guerreiro", imagem: Guerreiro },
    { id: 2, nome: "Arthemis1", classe: "Arqueiro", imagem: Arqueiro },
    { id: 3, nome: "Elora1", classe: "Mago", imagem: Mago },
    { id: 4, nome: "Grog2", classe: "Guerreiro", imagem: Guerreiro },
    { id: 5, nome: "Arthemis2", classe: "Arqueiro", imagem: Arqueiro },
    { id: 6, nome: "Elora2", classe: "Mago", imagem: Mago },
  ]);

  const [lista, setLista] = useState(herois);
  const [mensagemNivel, setMensagemNivel] = useState("");

  function excluirHeroi(id) {
    const novoArray = herois.filter((heroi) => heroi.id != id);
    setHerois(novoArray);
    setLista(novoArray);
    alert("Herói removido");
  }

  function filtrarMago() {
    setLista(herois.filter((h) => h.classe == "Mago"));
  }

  function filtrarGuerreiro() {
    setLista(herois.filter((h) => h.classe == "Guerreiro"));
  }

  function filtrarArqueiro() {
    setLista(herois.filter((h) => h.classe == "Arqueira"));
  }

  function mostrarTodos() {
    setLista(herois);
  }

  return (
    <div className="bg-[#0f1a2b] min-h-screen pb-10">
      <div
        className="h-32 w-full
        border-b-4 border-[#f5c542]
        flex flex-col items-center fixed z-2 top-0 bg-[#1f2a44] justify-center text-white text-center"
      >
        <h1 className="text-4xl font-bold drop-shadow-lg">
          Seleção de Personagem
        </h1>
        <h2 className="text-xl font-semibold drop-shadow">Recrute seu time!</h2>

        {mensagemNivel && (
          <p className="text-white w-80 p-1.5 absolute font-bold mt-20 border border-[#f5c542] bg-[#2b3a5f] rounded">
            {mensagemNivel}
          </p>
        )}
      </div>

      <div className="pt-36 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto my-8 px-4">
        <button
          onClick={filtrarArqueiro}
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

      <div className="flex flex-wrap justify-center gap-4 px-4">
        {lista.map((heroi) => (
          <Card
            key={heroi.id}
            heroi={heroi}
            excluirHeroi={excluirHeroi}
            setMensagemNivel={setMensagemNivel}
          />
        ))}
      </div>

      <div className="mt-12">
        <Formulario herois={herois} setHerois={setHerois} setLista={setLista} />
      </div>
    </div>
  );
}

export default App;
