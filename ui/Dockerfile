FROM node:8.9-alpine

RUN mkdir -p /app
WORKDIR /app

ADD package.json /app/package.json
ADD package-lock.json /app/package-lock.json

RUN npm install
RUN npm install -g yarn
RUN yarn global add @angular/cli
ADD . /app

ENV PORT 80
EXPOSE 80

CMD ["npm", "--", "start"]

