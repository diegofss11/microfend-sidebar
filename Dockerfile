FROM node:10.15.0-alpine

COPY package.json .
RUN npm install
COPY . .

RUN npm run build

CMD PORT=$PORT npm run start