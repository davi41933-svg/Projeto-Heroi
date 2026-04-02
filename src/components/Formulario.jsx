import { useState } from "react";
import { z } from "zod";

const heroiSchema = z.object({
  nome: z.string().min(3, "Mínimo 3 caracteres"),
  classe: z.string(),
});

export default function Formulario({ herois, setHerois, setLista }) {
  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    classe: "",
    imagem: "",
    status: "",
  });
  const [erros, setErros] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const result = heroiSchema.safeParse(formData);
    if (!result.success) {
      setErros(result.error.format());
    } else {
      setErros({});

      const novoHeroi = {
        ...formData,
        id: herois.length + 1,
      };

      setHerois([...herois, novoHeroi]);
      setLista(herois);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#101829]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2x1 shadow-x1 w-96 rounded space-y-5"
      >
        <h1 className="text-2xl font-bold text-center text-[#101829]">
          Crie seu Herói!
        </h1>

        <input
          type="text"
          name="nome"
          placeholder="Nome"
          onChange={handleChange}
          className="w-full p-3 border border-[#101829] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5c542]"
        />
        {erros.classe && (
          <p className="text-red-500>">{erros.classe._errors}</p>
        )}

        
        <select
          name="classe"
          onChange={handleChange}
          className="border p-3 rounded-lg w-full "
        >
          <option value="Guerreiro">Guerreiro</option>
          <option value="Arqueiro">Arqueiro</option>
          <option value="Mago">Mago</option>
        </select>

        <input
          type="file"
          name="imagem"
          onChange={handleChange}
          className="w-full p-3 border border-[#101829] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5c542]"
        />

        <button className="w-full bg-[#f5c542] text-black p-3 rounded-lg font-semibold hover:opacity-90 transition">
          Criar Herói
        </button>
      </form>
    </div>
  );
}
