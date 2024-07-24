# Use the official Node.js image.
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install dependencies.
COPY package*.json ./
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the TypeScript code.
RUN npm run build

# Expose the port and start the application.
EXPOSE 3000
CMD [ "node", "dist/app.js" ]
