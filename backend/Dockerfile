# Stage 1: Construcción
FROM node:18-alpine AS build

WORKDIR /app

# Copiamos los archivos del proyecto
COPY . .

# Instalamos las dependencias
RUN npm install

# Stage 2: Producción
FROM node:18-alpine

WORKDIR /app

# Copiamos solo lo necesario desde el build stage
COPY --from=build /app ./

# Render requiere que la app escuche el puerto de la variable PORT
EXPOSE 3000

# Iniciamos el servidor
CMD ["node", "server.js"]
