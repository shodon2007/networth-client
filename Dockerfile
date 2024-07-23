FROM nginx:1.27.0

WORKDIR /usr/share/nginx/html

COPY ./dist .