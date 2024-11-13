"use client";
import { useState, FormEvent } from "react";

export default function Registrar_Clientes() {
  const [nome, set_nome] = useState("");
  const [telefone, set_telefone] = useState("");
  const [email, set_email] = useState("");
  const [data, set_data] = useState("");

  const handle_submit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://back-end-rs.onrender.com/cadastrar_cliente",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, telefone, data }),
      }
    );

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

  return (
    <form
      className="border-2 border-[#3b82f5] rounded-md mx-auto sm:mx-10 md:w-[1080px] mt-10 p-7"
      onSubmit={handle_submit}
    >
      <section className="secao_inputs">
        <label>Nome:</label>
        <input
          className="inputs"
          type="text"
          name="nome"
          placeholder="Nome do cliente..."
          value={nome}
          onChange={(e) => set_nome(e.target.value)}
          required
        />
      </section>

      <section className="secao_inputs">
        <label>Telefone:</label>
        <input
          className="inputs"
          type="text"
          name="telefone"
          placeholder="Telefone do cliente..."
          value={telefone}
          onChange={(e) => set_telefone(e.target.value)}
          required
        />
      </section>

      <section className="secao_inputs">
        <label>Email:</label>
        <input
          className="inputs"
          type="text"
          name="email"
          value={email}
          placeholder="Email do cliente..."
          onChange={(e) => set_email(e.target.value)}
          required
        />
      </section>

      <section className="secao_inputs">
        <label>Data:</label>
        <input
          className="inputs"
          type="date"
          name="data"
          value={data}
          onChange={(e) => set_data(e.target.value)}
          required
        />
      </section>

      <button className="button" type="submit">
        Registrar Cliente
      </button>
    </form>
  );
}
