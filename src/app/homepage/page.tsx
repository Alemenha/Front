"use client";

import { redirect } from "next/navigation";
import "./homepage.css";
import Navbar from "@/components/Navbar";

export default function Page() {
  const handleCalendarRedirect = () => {
    redirect("/calendario"); // Redireciona para a página de calendário
  };

  const handleLogout = () => {
    redirect("/login"); // Redireciona para a página de login
  };

  const LogoutButton = ({ onClick }: { onClick: () => void }) => {
    return (
      <button className="botao-sair" onClick={onClick}>
        Sair
      </button>
    );
  };

  return (
    <div className="pagina-container">
      <Navbar />
      <div className="box">
        <h2>Olá, Obrigado pelo login. Escolha uma função.</h2>
        <button className="botao-calendario" onClick={handleCalendarRedirect}>
          Calendário
        </button>
        <LogoutButton onClick={handleLogout} />
      </div>
    </div>
  );
}
