const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

export async function sendMessage(message: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  })

  if (!res.ok) throw new Error(`Error ${res.status}`)

  const data = await res.json()
  return data.reply
}