// importa o card e o statusbadge
import Card from "./components/Card.jsx";
import StatusBadge from "./components/StatusBadge.jsx";
import { useState } from "react";

import Arqueira from "./assets/avatar/arqueira.png";
import Guerreiro from "./assets/avatar/guerreiro.png";
import Maga from "./assets/avatar/mage.png";

function App() {
  // Cada objeto é um heroi com nome, classe, imagem e status
  const [herois, setHerois] = useState([
    {
      id: 1,
      nome: "Grog1",
      classe: "Guerreiro",
      imagem: Guerreiro,
      status: "online",
    },

    {
      id: 2,
      nome: "Arthemis1",
      classe: "Arqueira",
      imagem: Arqueira,
      status: "ausente",
    },

    {
      id: 3,
      nome: "Elora1",
      classe: "Maga",
      imagem: Maga,
      status: "offline",
    },

    {
      id: 4,
      nome: "Grog2",
      classe: "Guerreiro",
      imagem: Guerreiro,
      status: "online",
    },

    {
      id: 5,
      nome: "Arthemis2",
      classe: "Arqueira",
      imagem: Arqueira,
      status: "ausente",
    },

    {
      id: 6,
      nome: "Elora2",
      classe: "Maga",
      imagem: Maga,
      status: "offline",
    },
  ]);

  function excluirHeroi(id) {
    const novoArray = herois.filter((heroi) => heroi.id != id);
    setHerois(novoArray);
    setLista(novoArray);
    alert("Herói removido");
  }

  const [lista, setLista] = useState(herois);

  //Funções de cada personagem
  function filtrarMago() {
    const mago = herois.filter((heroi) => heroi.classe == "Maga");
    setLista(mago);
  }

  function filtrarGuerreiro() {
    const guerreiro = herois.filter((heroi) => heroi.classe == "Guerreiro");
    setLista(guerreiro);
  }

  function filtrarArqueira() {
    const arqueira = herois.filter((heroi) => heroi.classe == "Arqueira");
    setLista(arqueira);
  }

  function mostrarTodos() {
    setLista(herois);
  }

  // Estilo do container
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    fontFamily: "sans-serif",
  };

  const filtrosStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "10px",
    justifyContent: "center",
    maxWidth: "400px",
    margin: "0 auto",
  };

  const btnFilter = {
    color: "white",
    backgroundColor: "#404040",
    borderRadius: "15px",
    padding: "8px 15px",
    cursor: "pointer",
    border: "none",
    margin: "30px 0"
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "35px",
    fontFamily: "arial"
  };

  return (
    // JSX do App, Mostra titulos e mapeia a lista de herois,
    // mostrando um cartão para cada um.
    <>
      <h1 style={titleStyle}>Seleção de Personagem</h1>

      <h2 style={titleStyle}>Recrute seu time!</h2>
      <div style={filtrosStyle}>
        <button style={btnFilter} onClick={filtrarArqueira}>
          Arqueira
        </button>
        <button style={btnFilter} onClick={filtrarGuerreiro}>
          Guerreiro
        </button>
        <button style={btnFilter} onClick={filtrarMago}>
          Mago
        </button>
        <button style={btnFilter} onClick={mostrarTodos}>
          Todos
        </button>
      </div>

      <div style={containerStyle}>
        {lista.map((heroi) => (
          <Card key={heroi.id} heroi={heroi} excluirHeroi={excluirHeroi} />
        ))}
      </div>
    </>
  );
}

export default App;
