# Specify base image
FROM node:alpine AS base
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# RUN npm run build

# Configure web server
FROM nginx
COPY --from=0 /app/client/build /usr/share/nginx/html

# Test

# Release
# FROM base
# EXPOSE 5000
# CMD npm start