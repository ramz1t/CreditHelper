FROM node:18.16-alpine AS build-stage

WORKDIR /react

# Install dependencies
COPY package.json ./
RUN npm install --legacy-peer-deps

# Copy app source
COPY . .

# Build the app
RUN npm run build
