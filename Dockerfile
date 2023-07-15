# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the rest of the application files to the container
COPY . .

# Run npm init
RUN npm init -y

# Install the dependencies
RUN npm install


# Run the Jasmine tests
CMD ["npm", "test"]