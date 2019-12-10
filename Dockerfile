FROM node:11

WORKDIR /usr/src/app

COPY package*.json webpack.config.js ./
COPY config ./config
COPY static ./static
COPY src ./src

RUN npm install

RUN npm run build

EXPOSE 80 80

CMD ["node", "__sapper__/build"]
