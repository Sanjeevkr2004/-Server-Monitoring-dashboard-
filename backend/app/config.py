from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    api_port: int
    frontend_url: str

    class Config:
        env_file = "../.env"  # path to your .env file

# Create the settings instance
settings = Settings()

