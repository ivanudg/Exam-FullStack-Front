FROM node:alpine as builder
WORKDIR '/app'
RUN npm install -g @angular/cli@8.0.1
COPY package.json .
RUN npm install
COPY . .
RUN ng build

FROM nginx
COPY --from=builder /app/dist/UsersManagement /usr/share/nginx/html
EXPOSE 80