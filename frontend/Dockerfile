FROM node:18.16-alpine
WORKDIR /react
COPY package.json .
RUN npm i
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]