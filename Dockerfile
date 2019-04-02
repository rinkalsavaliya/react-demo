FROM node:dubnium

WORKDIR /react-demo

COPY package.json /react-demo
RUN npm install
COPY . /react-demo
RUN npm run build
RUN npm install http-server -g
WORKDIR /react-demo/build

EXPOSE 8080

CMD ["http-server"]
