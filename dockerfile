# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the entire React project to the container
COPY . .

# Specify the port the React app will run on (e.g., 3000)
EXPOSE 3000/tcp
EXPOSE 3000/udp
EXPOSE 80/tcp
EXPOSE 80/udp

# Start the React development server
CMD ["npm", "start"]
