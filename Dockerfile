FROM node:11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

#  TODO(kyle): Copy less stuff because now we have a bunch more
COPY . .

RUN npm run build

EXPOSE 80 80

CMD ["node", "__sapper__/build"]
