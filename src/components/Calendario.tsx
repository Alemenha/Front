"use client"

import React, { useState } from "react";
import "./calendario.css";

interface Note {
  date: string;
  note: string;
}

const SimpleCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [notes, setNotes] = useState<Note[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [noteText, setNoteText] = useState<string>("");
  //Armazena o mes, as notas, a data selecionada e etc

  const getDaysInMonth = (date: Date) => {
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const daysInMonth = [];
  // Obtem todos os dias do mês atual

    for (let day = 1; day <= endOfMonth.getDate(); day++) {
      daysInMonth.push(new Date(date.getFullYear(), date.getMonth(), day));
  // Adiciona do dia 1 até o último dia do mês
    }

    return daysInMonth;
  };

  const handleMonthChange = (direction: string) => {
    const newMonth = new Date(currentMonth);
    if (direction === "prev") {
      newMonth.setMonth(currentMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(currentMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };
  //alterar o mês exibido no calendário

  const handleDateClick = (clickedDate: Date) => {
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(clickedDate);
    //Lida com o clique em uma data no calendário

    setSelectedDate(formattedDate);
    setNoteText("");
    //Define a data selecionada e reseta o texto da nota

    const existingNote = notes.find((note) => note.date === formattedDate);
    // Verifica se já existe uma nota para a data
    if (existingNote) {
      setNoteText(existingNote.note);
    //Preenche o texto 
    } else {
      setNoteText("");
    }

    setShowModal(true);
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(e.target.value);
    // Atualiza o texto da nota enquanto digita
  };

  const handleSaveNote = () => {
   // Salva a nota na data
    if (noteText.trim()) {
      const newNotes = [...notes];
      const existingNoteIndex = newNotes.findIndex((note) => note.date === selectedDate);

      if (existingNoteIndex !== -1) {
         // Atualiza a nota existente
        newNotes.push({ date: selectedDate, note: noteText });
      } else {
        // Adiciona uma nova nota
        newNotes.push({ date: selectedDate, note: noteText });
      }

      setNotes(newNotes);
      setShowModal(false);
    }
  };

  const handleDeleteNote = () => {
     // Exclui a nota associada à data selecionada  
    const newNotes = notes.filter((note) => note.date !== selectedDate);
    setNotes(newNotes);
    setShowModal(false);
  };

  const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

  // Variável para o dia atual
  const today = new Date();
  const todayString = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(today);

  return (
    <div className="calendario-container">
      <div className="calendario-box">
        <div className="calendario-cabeçalho">
        {/*Botões para navegar pelos meses */}
          <button onClick={() => handleMonthChange("prev")}>{"<"}</button>
          <span>{currentMonth.toLocaleString("default", { month: "long" }).replace(/^./, (char) => char.toUpperCase())} {currentMonth.getFullYear()}</span>
          <button onClick={() => handleMonthChange("next")}>{">"}</button>
        </div>

        {/* mostra os dias da semana */}
        <div className="dias-semana">
          {weekDays.map((day, index) => (
            <div key={index} className="dia-semana">
              {day}
            </div>
          ))}
        </div>

        {/* Mostra os dias do mês */}
        <div className="dias-calendario">
          {getDaysInMonth(currentMonth).map((day, index) => {
            const formattedDay = new Intl.DateTimeFormat("pt-BR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            }).format(day);
            const isToday = formattedDay === todayString;

            return (
              <div
                key={index}
                className={`dia-calendario ${isToday ? "hoje" : ""}`}
                onClick={() => handleDateClick(day)}
              >
                {day.getDate()}
              </div>
            );
          })}
        </div>
        {/* Modal para adicionar/editar notas */}
        {showModal && (
          <div className="modal">
            <div className="conteudo-modal">
              <h5>Adicionar Nota para {selectedDate}</h5>
              <textarea
                placeholder="Digite sua nota"
                value={noteText}
                onChange={handleNoteChange}
              />
              <button onClick={handleSaveNote}>Salvar</button>
              {noteText && (
                <button onClick={handleDeleteNote}>Excluir Nota</button>
              )}
              <button onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
          </div>
        )}
        
        {/* Lista de notas */}
        <div className="lista-notas">
          <h3>Notas</h3>
          {notes.map((note, index) => (
            <div key={index}>
              <p>{note.date}: {note.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleCalendar;
