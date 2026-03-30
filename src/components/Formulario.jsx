import { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");
  const [classe, setClasse] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Nome: ${nome} | Classe: ${classe}`);

    setNome("");
    setClasse("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#101829]">
      <form 
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2x1 shadow-x1 w-96 space-y-5"
      >

        <h1 className="text-2xl font-bold text-center text-[#101829]">
            Crie seu Herói!
        </h1>

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
            className="w-full p-3 border border-[#101829] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5c542]"
        />

        <input
          type="text"
          placeholder="Classe"
          value={classe}
          onChange={(e) => setClasse(e.target.value)}
          className="w-full p-3 border border-[#101829] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5c542]"
        />

        <button
          type="submit"
          className="w-full bg-[#f5c542] text-black p-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Enviar
        </button>

        <div className="pt-4 border-t border-[#e0c2ff]">
          <h2 className="text-[#101829]">Nome: {nome}</h2>
          <h2 className="text-[#101829]">Classe: {classe}</h2>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
