from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import Session

DATABASE_URL = "postgresql://username:password@localhost/server_monitoring"

# Create the SQLAlchemy engine
engine = create_engine(DATABASE_URL)

# Create the session maker
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create a base class for models
Base = declarative_base()

# Dependency function to get the database session for FastAPI routes
def get_db():
    db = SessionLocal()  # Create a new session
    try:
        yield db  # Yield the session to be used in the routes
    finally:
        db.close()  # Close the session after use
