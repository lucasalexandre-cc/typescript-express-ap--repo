FROM node:14.15-slim

RUN npm -g i npm

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

CMD npm run dev
