"use client";
import { useState } from "react";

export default function Deletar_Clientes() {
  const [nome, set_nome] = useState("");

  const handle_submit = async (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("nome", nome);

    const response = await fetch(
      "https://back-end-rs.onrender.com/deletar_clientes",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome }),
      }
    );

    if (response.ok) {
      alert("Cliente deletado com sucesso!");
    } else {
      alert("Erro ao deletar o cliente.");
    }
  };

  return (
    <form
      className="border-2 border-[#3b82f5] rounded-md mx-auto sm:mx-10  md:w-[1080px] mt-10 p-7"
      onSubmit={handle_submit}
    >
      <section className="secao_inputs">
        <label>Nome:</label>
        <input
          className="inputs"
          type="text"
          name="nome"
          placeholder="Nome do produto..."
          value={nome}
          onChange={(e) => set_nome(e.target.value)}
          required
        />
      </section>

      <button className="button" type="submit">
        Deletar Cliente
      </button>
    </form>
  );
}
