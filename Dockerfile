FROM node:dubnium

WORKDIR /react-demo

COPY package.json /react-demo
RUN npm install
RUN npm install http-server -g
COPY . /react-demo
RUN npm run build
WORKDIR /react-demo/build

EXPOSE 8080
# build and run with the command :
# docker build . -t react-demo
# docker run -d -p 8080:8080 --name react-demo react-demo
CMD ["http-server"]
