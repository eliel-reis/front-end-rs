"use client";
import { useState, useEffect } from "react";

export default function exibir_clientes() {
  const [clientes, set_clientes] = useState([]);

  useEffect(() => {
    const fetch_data = async () => {
      const resposta = await fetch(
        "https://back-end-rs.onrender.com/exibir_clientes"
      );
      const data = await resposta.json();
      set_clientes(data);
    };

    fetch_data();
  }, []);

  return (
    <main className="my-10 px-10 flex  md:w-[1080px] md:mx-auto flex-wrap border-2 border-blue-600  rounded-md sm:mx-10   ">
      {clientes.map((cliente, index) => (
        <section key={index} className="card">
          <p>Nome: {cliente.nome}</p>
          <p>Email: {cliente.email}</p>
          <p>Telefone: {cliente.telefone}</p>
          <p>Data: {cliente.data}</p>
        </section>
      ))}
    </main>
  );
}
