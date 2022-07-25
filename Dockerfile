FROM node:alpine3.11

RUN mkdir -p /app

WORKDIR /app

COPY autoscriber-backend/package*.json ./

RUN npm install

COPY autoscriber-backend/ .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
