FROM node:20-alpine
RUN apk add --no-cache openssl curl
RUN curl -sL https://github.com/jwilder/dockerize/releases/download/v0.7.0/dockerize-alpine-linux-amd64-v0.7.0.tar.gz | tar -C /usr/local/bin -xz
WORKDIR /home/docker/app_new
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
