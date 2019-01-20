FROM node:11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

EXPOSE 80 80

CMD ["node", "__sapper__/build"]
