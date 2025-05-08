# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy app files
COPY . .

# Build your React app
RUN npm run build

# Expose app port
EXPOSE 4500

# Start app directly (without PM2)
CMD ["npm", "run", "start", "--", "-p", "4500"]

