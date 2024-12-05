"use client";

import { useState } from "react";
import "./login.css";
import Navbar from '@/components/Navbar';
import { FormEvent } from "react"; 
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPage() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //pra armazenar o email a senha e o erro

  
  const handleSubmit = (e: FormEvent) => {  
    e.preventDefault(); 
    // pra que a página recarregue
    
    if (email === "henrique@gmail.com" && password === "123") {
      // Simulando a autenticação 
      //redirecionando para a homepage
      window.location.href = "/homepage";
    } else {
      
      setError("Credenciais inválidas, tente novamente.");
      //exibindo msg de erro
    }
  };

  return (
    <main>
      <div className="fundo">
        <Navbar />
        <form onSubmit={handleSubmit} className="login-box">
          {/* para comparar se as credenciais estão certas */}
          <h2 className="login-titulo">Faça seu login</h2>
          
          <div className="template-box">
          <FaEnvelope className="icone" />
          {/* coloca os icones dentro do template de mail */}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            //pegando o login
            className="box-es"
          />

          </div>
         

          <div className="template-box">
          <FaLock className="icone" />
          {/* icone da senha */}

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            //pegando a senha
            className="box-es"
          />

          </div>
          
          <button type="submit" className="botao-login">
            Login
          </button>

          <div className="ajuda-login">
            <p>
              Não tem uma conta? <a href="#!">Registre-se.</a>
            </p>
          </div>
          {/* registro que não redireciona */}

          
          <div className="ajuda-login">
            <a href="#!">Esqueceu a senha?</a>
          </div>
            {/* Esqueceu a senha que não redireciona */}
          
          {error && <div className="msg-erro">{error}</div>}
        </form>
      </div>
    </main>
  );
}
