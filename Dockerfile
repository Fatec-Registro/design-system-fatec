# Usa Node.js 22.18.0 ou superior
FROM node:22.18.0-alpine

# Define o diretório de trabalho
WORKDIR /app

# Instala dependências para melhor performance
RUN apk add --no-cache git

# Copia os arquivos de package
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Expõe as portas para o servidor Vite e Storybook
EXPOSE 5173 6006

# Comando padrão (pode ser sobrescrito no docker-compose)
CMD ["npm", "run", "dev"]
