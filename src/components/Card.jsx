import StatusBadge from "./StatusBadge.jsx";
import { useState } from "react";

export default function Card({ heroi, excluirHeroi }) {
  const [xpBlocos, setXpBlocos] = useState(0);
  const [nivel, setNivel] = useState(1);
  const [selecionado, setSelecionado] = useState(false);
  const [border, setBorder] = useState(false);
  const [mensagemNivel, setMensagemNivel] = useState("");
  const [estilo, setEstilo] = useState("offline");

  function ganharXp() {
    setXpBlocos((xpAtual) => {
      if (xpAtual < 9) return xpAtual + 1;

      const novoNivel = nivel + 1;
      setNivel(novoNivel);
      if (novoNivel >= 4) setBorder(true);

      setMensagemNivel(
        `Parabéns! ${heroi.nome} subiu para o nível ${novoNivel}!`,
      );

      setTimeout(() => setMensagemNivel(""), 3000);
      return 0;
    });
  }

  function alternarStatus() {
    setEstilo((s) => (s === "offline" ? "online" : "offline"));
  }

  return (
    <div
      onMouseEnter={() => setSelecionado(true)}
      onMouseLeave={() => setSelecionado(false)}
      className={`
        w-56 p-4 m-3 rounded-2xl text-center shadow-2xl transition-all duration-300 cursor-pointer
        ${selecionado ? "scale-105 bg-[#2b3a5f]" : "bg-[#1f2a44]"}
        ${border ? "border-4 border-[#f5c542]" : "border-4 border-[#f5c542]"}
      `}
    >
      {mensagemNivel && (
        <p className="text-white absolute left-1/2 font-bold mb-2 border border-[#f5c542] bg-[#2b3a5f] p-1 rounded">
          {mensagemNivel}
        </p>
      )}

      <div className="flex justify-center mb-3">
        <StatusBadge tipo={estilo} />
      </div>

      <p className="text-white">Nível: {nivel}</p>
      <p className="text-white">XP: {xpBlocos}/10</p>

      <div className="flex justify-center gap-1 my-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`h-5 flex-1 rounded ${
              i < xpBlocos ? "bg-[#f5c542]" : "bg-gray-600"
            }`}
          />
        ))}
      </div>

      <img
        src={heroi.imagem}
        alt={`Card do herói ${heroi.nome}`}
        className="w-full rounded-lg mb-2"
      />

      <h2 className="text-[#f5c542] font-bold text-lg">{heroi.nome}</h2>
      <p className="text-white">Classe: {heroi.classe}</p>

      <button
        onClick={() => {
          alternarStatus();
          alert(`Você recrutou ${heroi.nome} para o seu time!`);
        }}
        className={`w-full mt-2 cursor-pointer  bg-emerald-600 text-white p-2 rounded-lg ${estilo === "online" ? "bg-red-700" : "bg-green-600"}`}
      >
        {estilo === "online" ? "Dispensar" : "Recrutar"}
      </button>

      <button
        onClick={() => excluirHeroi(heroi.id)}
        className="w-full mt-2 cursor-pointer bg-red-700 text-white p-2 rounded-lg"
      >
        Excluir
      </button>

      <button
        onClick={ganharXp}
        className="w-full mt-2 cursor-pointer bg-[#f5c542] text-[#1f2a44] font-bold p-2 rounded-lg"
      >
        Ganhar XP!
      </button>
    </div>
  );
}