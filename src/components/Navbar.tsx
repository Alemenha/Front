"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Importa o hook para pegar a rota atual
import "./navbar.css";

export default function Navbar() {
  const pathname = usePathname(); // Obtém o caminho atual

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Rotina</h1>
        <div className="menu">
          <Link href="/inicio" className="item-menu">
            Início
          </Link>
          <a className="item-menu">Sobre</a>
          <Link
            href="https://github.com/Alemenha?tab=repositories"
            className="item-menu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projetos
          </Link>
          <a className="item-menu">Suporte</a>
        </div>
        {/* Usando `visibility` para esconder o botão mantendo o layout */}
        <Link
          href="/login"
          className="navbotao-login"
          style={{ visibility: pathname === "/inicio" ? "visible" : "hidden" }}
        >
          Entrar
        </Link>
      </div>
    </nav>
  );
}
