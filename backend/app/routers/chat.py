from fastapi import APIRouter
from pydantic import BaseModel
from app.services.claude import client

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

@router.post("/api/chat")
def chat(req: ChatRequest):
    response = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=1024,
        messages=[{"role": "user", "content": req.message}]
    )
    text = next(block.text for block in response.content if block.type == "text")
    return {"reply": text}