import Link from "next/link";

export default function Topo() {
  return (
    <header className="bg-blue-500 text-white p-4 text-center">
      <h1 className="text-2xl font-bold">Oficina Mecânica RS</h1>
      <nav className="mt-2 flex space-x-4 justify-center">
        <Link className="links" href="/pagina_consultar_clientes">
          Exibir Cliente
        </Link>
        <Link className="links" href="/pagina_registrar_clientes">
          Registrar Cliente
        </Link>
        <Link className="links" href="/pagina_editar_clientes">
          Editar Cliente
        </Link>
        <Link className="links" href="/pagina_deletar_clientes">
          Deletar Cliente
        </Link>
      </nav>
    </header>
  );
}
