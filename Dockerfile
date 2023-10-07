# Base image
FROM node:latest

RUN mkdir -p /usr/app/

# Setting working directory in the container
WORKDIR /usr/app

# Copy entire project to the working directory
COPY ./ ./

# Install dependencies
RUN npm install

# Build the NextJS project
RUN npm run build

# Expose the container port
EXPOSE 3000

# Start NextJS server
CMD [ "npm" ,  "start" ]