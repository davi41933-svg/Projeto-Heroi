// Importa o badge (peça menor) que vai dentro do cartão
import StatusBadge from "../StatusBadge/index.jsx";
import { useState } from "react";


// Define que o cartão recebe um objeto heroi
function Card({ heroi, excluirHeroi }) {
  const [xpBlocos, setXpBlocos] = useState(0); // subir a barra
  const [nivel, setNivel] = useState(1); // aumentar lvl
  const [selecionado, setSelecionado] = useState(false);
  const [border, setBorder] = useState(false);
  const [mensagemNivel, setMensagemNivel] = useState("");

  function ganharXp() {
    setXpBlocos((xpBlocos) => {
      if (xpBlocos < 9) {
        return xpBlocos + 1;
      } else {
        setNivel(() => nivel + 1);
        if (nivel >= 4) setBorder(true);

        setMensagemNivel(
          `Parabéns! ${heroi.name} subiu para o nível ${nivel}!`,
        );

        setTimeout(() => {
          setMensagemNivel("");
        }, 3000);
        return 0;
      }
    });
  }

    // Blocos de estilo
  const cardStyle = {
    borderRadius: "12px",
    padding: "16px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "200px",
    transition: "0.3s ease all",
    transform: selecionado ? "scale(1.1)" : "scale(1)",
    backgroundColor: selecionado ? "#e0c1ff" : "#ffffff",
    border: border ? "4px solid #ce9b19" : "3px solid #aa3fbf",
    cursor: "pointer",
  };

  const btnStyle = {
    border: "1px solid #404040",
    borderRadius: "12px",
    backgroundColor: "#009c68",
    color: "white",
    padding: "6px",
    margin: "6px",
    cursor: "pointer",
  };

  const btnDeleteStyle = {
    border: "1px solid #404040",
    borderRadius: "12px",
    backgroundColor: "#c90036",
    color: "white",
    padding: "6px",
    margin: "6px",
    cursor: "pointer",
  };

  const btnXp = {
    border: "1px solid #404040",
    borderRadius: "12px",
    backgroundColor: "#aa3fbf",
    color: "white",
    padding: "6px",
    width: "100%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  };

const mensagem = {
  color: "#aa3fbf",
  fontWeight: "bold",
  margin: "6px 0",
  border: "1px solid #aa3fbf",
  backgroundColor: "#f3e6ff",
  padding: "4px",
  borderRadius: "6px",
  textAlign: "center",
};



  // Estrutura HTML (JSX)
  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setSelecionado(true)}
      onMouseLeave={() => setSelecionado(false)}
    >
      {mensagemNivel && (
        <p style={mensagem}>
          {mensagemNivel}
        </p>
      )}

      <div className="flex justify-center mb-4">
        <StatusBadge tipo={heroi.status} />
      </div>

      <p>Nível: {nivel}</p>
      <p>XP: {xpBlocos}/10</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 0",
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "20px",
              margin: "2px",
              borderRadius: "4px",
              backgroundColor: i < xpBlocos ? "#23d60f" : "#ddd",
            }}
          />
        ))}
      </div>

      <img
        src={heroi.imagem}
        alt={heroi.nome}
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <h2>{heroi.nome}</h2>
      <p>Classe: {heroi.classe}</p>

      <button
        style={btnStyle}
        onClick={() => alert(`Você recrutou ${heroi.nome} para o seu time!`)}
      >
        Recrutar!
      </button>

      <button style={btnDeleteStyle} onClick={() => excluirHeroi(heroi.id)}>
        Excluir
      </button>

      <button style={btnXp} onClick={ganharXp}>
        Ganhar XP!
      </button>
    </div>
  );
}

// Exporta o Card
export default Card;
