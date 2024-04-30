FROM node:18.20.2

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package.json .
COPY index.js .

RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]
