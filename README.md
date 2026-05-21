# Proyecto Final Backend

## Descripción

Proyecto backend desarrollado con Node.js y Express.
El proyecto incluye:

- API REST
- Tests funcionales
- Dockerización completa
- Imagen publicada en DockerHub

## Tecnologías utilizadas

- Node.js
- Express
- Mocha
- Chai
- Supertest
- Docker
- DockerHub

## Instalación local

### Clonar repositorio

git clone URL_DEL_REPOSITORIO

### Instalar dependencias

npm install

### Ejecutar proyecto

npm start

## Ejecutar tests

npm test

## Docker

### Construir imagen Docker

docker build --no-cache -t proyecto-final .

### Ejecutar contenedor Docker

docker run -p 8080:8080 proyecto-final

## Imagen DockerHub

https://hub.docker.com/repository/docker/lucdocker123/proyecto-final/general

## Endpoints

### Users

GET /api/users
POST /api/users
POST /api/users/login

### Adoptions

GET /api/adoptions
GET /api/adoptions/:aid
POST /api/adoptions/:uid/:pid

## Dockerfile utilizado

FROM node:20-alpine

- WORKDIR /app
- COPY package\*.json ./
- RUN npm ci --omit=dev
- COPY . .
- RUN mkdir -p src/logs/errors
- EXPOSE 8080
- ENV NODE_ENV=production
- ENV PORT=8080
- CMD [ "npm", "start" ]

## Evidencias incluidas

- Tests funcionales exitosos
- Ejecución correcta de Docker
- Imagen publicada en DockerHub
- Funcionamiento de endpoints
- Estructura del proyecto

## Autor

Lucas Auat
