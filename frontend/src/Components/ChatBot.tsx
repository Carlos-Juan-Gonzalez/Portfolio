import { useState } from 'react'
import './ComponentsStyles/ChatBot.css'

export default function Chatbot() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Botón flotante */}
      <button className="chat-fab" onClick={() => setOpen(o => !o)}>
        {open ? '✕' : '💬'}
      </button>

      {/* Ventana del chat */}
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Asistente IA</span>
          </div>
          <div className="chat-messages">
            <p className="msg bot">¡Hola! ¿En qué puedo ayudarte?</p>
          </div>
          <div className="chat-input-row">
            <input type="text" placeholder="Escribe algo..." />
            <button>➤</button>
          </div>
        </div>
      )}
    </>
  )
}