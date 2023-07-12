# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Run the Jasmine tests
CMD ["npm", "test"]