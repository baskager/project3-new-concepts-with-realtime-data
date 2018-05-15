FROM node:carbon
ADD ./app /app
WORKDIR /app
RUN npm install