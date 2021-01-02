FROM node:15.5.0-alpine3.12 AS build

WORKDIR /app

COPY . .

ENV BACKEND_PROTOCOL=http
ENV BACKEND_ADDRESS=localhost
ENV BACKEND_PORT=8080

RUN npm install && npm run build

################

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]