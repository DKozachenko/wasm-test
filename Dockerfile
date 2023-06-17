FROM node:18-alpine AS builder
COPY package.json package-lock.json ./app/
WORKDIR /app
RUN npm ci
COPY . /app
RUN npm run asbuild:release

FROM nginx
COPY --from=builder ./app /usr/share/nginx/html