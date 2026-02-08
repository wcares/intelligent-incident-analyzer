from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Intelligent Incident Report Analyzer"
    debug: bool = True
    database_url: str = "postgresql://user:password@localhost:5432/incident_analyzer"
    secret_key: str = "change-me-in-production"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    class Config:
        env_file = ".env"


settings = Settings()
