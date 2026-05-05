import os
from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv()

client = Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])


def get_message(user_message):
    response = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=1024,
        system="Eres el asistente del portfolio de un desarrollador Full Stack...",
        messages=[{"role": "user", "content": user_message}]
    )
    return response