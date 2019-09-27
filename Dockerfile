FROM node

COPY package.json .
RUN npm install
COPY . .

RUN npm run build

CMD PORT=$PORT npm run start:prod