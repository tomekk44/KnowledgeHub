FROM node:22 AS web-build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN rm -rf node_modules
RUN npm install
RUN npm run build

FROM nginx:stable
COPY --from=web-build /app/dist /usr/share/nginx/html
