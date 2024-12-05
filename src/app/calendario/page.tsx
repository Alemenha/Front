import './calendariopage.css';
import Calendar from "@/components/Calendario";
import Navbar from '@/components/Navbar';



export default function HomePage() {
  return (
    <div className="inicio-fundo">
      <Navbar />
    <Calendar />
    </div>
  );
}
