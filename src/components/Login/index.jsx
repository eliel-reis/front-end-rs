"use client";
import { useState, FormEvent } from "react";

export default function Login() {
  const [usuario, set_usuario] = useState("");
  const [senha, set_senha] = useState("");
  const [status, set_status] = useState("");

  const handle_submit = async (e) => {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append("usuario", usuario);
    form_data.append("senha", senha);

    const resposta = await fetch("https://back-end-rs.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usuario, senha }),
    });

    const resultado = await resposta.json();

    if (resultado) {
      set_status("true");
    } else {
      set_status("false");
    }
  };

  return (
    <main
      className=" top-0 bg-blue-500 h-screen w-screen  absolute flex flex-col justify-center items-center "
      style={{
        display: status == "true" ? "none" : "flex",
      }}
    >
      <h1 className="text-3xl font-bold text-white mb-3  ">
        Ofina Mecânica RS {status}
      </h1>
      <form
        onSubmit={handle_submit}
        className="  border-2 border-red-600 rounded-[8px] px-4  md:w-[30%] sm:w-[60%] md:h-[43%] sm:h-[50%] flex flex-col justify-start items-center gap-8  relative"
      >
        <section className="input_login">
          <label>Usuário:</label>
          <input
            type="text"
            name="usuario"
            placeholder="Nome de usuário..."
            value={usuario}
            onChange={(e) => set_usuario(e.target.value)}
          />
        </section>
        <section className="input_login">
          <label>Senha:</label>
          <input
            type="text"
            name="senha"
            placeholder="Senha de usuário..."
            value={senha}
            onChange={(e) => set_senha(e.target.value)}
          />
        </section>

        <button
          className="bg-white px-4 py-2  text-[18px] font-semibold rounded-md hover:bg-black hover:text-blue-500 duration-1000 absolute bottom-[-20px]"
          type="submit"
        >
          Login
        </button>
      </form>
    </main>
  );
}
