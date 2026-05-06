import { useState, useEffect, useRef} from 'react'
import { sendMessage } from './Services/api'
import './ComponentsStyles/ChatBot.css'

interface Message {
  role: 'user' | 'bot'
  text: string
}

export default function Chatbot() {
  const [open, setOpen]       = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: '¡Hola! ¿En qué puedo ayudarte?' }
  ])
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef             = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function handleSend() {
    const text = input.trim()
    if (!text || loading) return

    setInput('')
    setMessages(prev => [...prev, { role: 'user', text }])
    setLoading(true)

    try {
      const reply = await sendMessage(text)
      setMessages(prev => [...prev, { role: 'bot', text: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: 'Error al conectar con el servidor.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button className="chat-fab" onClick={() => setOpen(o => !o)}>
        {open ? '✕' : '💬'}
      </button>

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Asistente IA</span>
          </div>

          <div className="chat-messages">
            {messages.map((m, i) => (
              <p key={i} className={`msg ${m.role}`}>{m.text}</p>
            ))}
            {loading && <p className="msg bot typing">Escribiendo...</p>}
            <div ref={bottomRef} />
          </div>

          <div className="chat-input-row">
            <input
              type="text"
              value={input}
              placeholder="Escribe algo..."
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} disabled={loading}>➤</button>
          </div>
        </div>
      )}
    </>
  )
}