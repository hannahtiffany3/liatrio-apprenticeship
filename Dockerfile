FROM node:18.20.2

RUN mkdir -p /src/app
RUN npm install express-generator -g

WORKDIR /src/app

COPY package.json .

RUN npm install

EXPOSE 80

CMD [ "node index.js" ]
