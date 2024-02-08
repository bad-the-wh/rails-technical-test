# Dockerfile for Vue.js frontend

FROM node:14

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN yarn install

# Copy the application code into the container
COPY . .

# Build the application
RUN yarn build

# Expose port 8080
EXPOSE 8080

CMD ["yarn", "serve"]
