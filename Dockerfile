FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install express fs-extra

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]