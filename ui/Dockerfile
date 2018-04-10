FROM node:8.9-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/package.json
RUN npm install -g yarn
RUN yarn global add @angular/cli

RUN npm install \
 && npm ls \
 && npm cache clean --force
COPY . /app

ENV PORT 80
EXPOSE 80
EXPOSE 4200

CMD ["npm", "--", "start"]

