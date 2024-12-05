import './inicio.css';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <div className="inicio-fundo">
       <Navbar />
      {/* chamando a navbar */}
      <div className="inicio-box">
        <h1 className="inicio-titulo">Gerencie sua Rotina de Forma Eficiente</h1>
        <p className="inicio-subtitulo">Organize seus horários e maximize sua produtividade.</p>
      </div>
      <section className="inicio-sessao">
        <h2 className="inicio-sessao-titulo">Nossos Recursos:</h2>
        <ul className="inicio-lista">
          <li className="inicio-lista-item">📅 Agendamento de horários</li>
          <li className="inicio-lista-item">✅ Criação de listas de tarefas</li>
          <li className="inicio-lista-item">🔗 Integração com calendários</li>
          {/* css basico dos textos */}
        </ul>
      </section>
    </div>
  );
}
