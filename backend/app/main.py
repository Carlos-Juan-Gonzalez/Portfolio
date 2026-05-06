from urllib import response

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.services.claude import get_message
from app.routers import chat

app = FastAPI()

# Mensajes de prueba
app.include_router(chat.router)

# CORS provisional
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "ok",
            "message": "Hola Mundo"
            }

@app.get("/message")
def message():
    response = get_message("Esta alguien viendo esto en github? contratame por favor")
    text = next(block.text for block in response.content if block.type == "text")
    return text