FROM nginx:1.27.0

WORKDIR /root/networth-client


COPY . .
RUN apt update
RUN apt install npm -y
RUN npm install
RUN npm run build:prod
RUN mv ./dist/* /usr/share/nginx/html