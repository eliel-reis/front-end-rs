import Topo from "../components/Topo";
import "./globals.css";

export const metadata = {
  title: "Oficina Mecânica Ricardo Sevirino",
  description: "Oficina Mecânica Ricardo Sevirino",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
      </body>
    </html>
  );
}
