from fastapi import FastAPI
from starlette import status

app=FastAPI()

@app.get("/", status_code=status.HTTP_200_OK)
def health_check():
    return {"message":"server is up and running"}