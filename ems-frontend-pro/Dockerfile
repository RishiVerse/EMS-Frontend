FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT - 8909

EXPOSE 8909

CMD ["npm","start"]