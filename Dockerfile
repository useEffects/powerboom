# Use an official Node.js LTS (Long Term Support) image
FROM node:18-bullseye

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json  ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application for production
RUN npm run build

# Expose the port Next.js is running on
EXPOSE 3000

# Run the Next.js application in production mode
CMD ["npm", "start"]
