# Youtube Video Sharing App

## Introduction
Welcome to Youtube Video Sharing App, the innovative platform designed to revolutionize the way you share and discover YouTube videos. Our app bridges the gap between content creators and viewers, offering a unique space for sharing, discussing, and exploring video content from YouTube like never before.

## Prerequisites
Before you begin, ensure you have the following software and tools installed:
- Ruby 3.3.0, along with Rails 7.0.8.1
- Node.js v18.19.0 and npm 10.2.3
- MySQL 8.0
- Docker 25.0.3 (optional, for Docker deployment)

## Installation & Configuration
Follow these steps to get your development environment set up:

1. Clone the repository:
   ```bash
   git clone https://github.com/b21quocbao/youtube-share-app.git
   cd youtube-share-app
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   bundle install
   ```

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

4. Configure your database settings in `backend/config/database.yml` file according to your MySQL setup.

## Database Setup
To set up and initialize the database, run the following commands:

```bash
cd backend
rails db:create db:migrate db:seed
```

This will create the database, run migrations, and seed the database with any initial data.

## Running the Application
To run the application locally:

1. Start the Rails server:
   ```bash
   cd backend
   rails s -p 3001
   ```

2. In a new terminal, start the React development server:
   ```bash
   cd frontend
   npm start
   ```
   This will open the application in your default web browser.

To run the test suite:
- For Rails (backend tests):
  ```bash
  cd backend
  rails test
  ```
- For React (frontend tests):
  ```bash
  cd frontend
  npm test
  ```

## Docker Deployment
For backend developers or full-stack developers looking to deploy using Docker:

1. Build the Docker image:
   ```bash
   docker-compose build
   ```

2. Run the Docker container:
   ```bash
   docker-compose run api rails db:create db:migrate
   docker-compose up
   docker-compose run api rails test
   ```

This will serve your application at `http://localhost:3000`.

## Usage
[Provide a brief guide on how to use the application, highlighting specific features, pages, or functionality.]

## Troubleshooting
Here are some common issues you might encounter and their solutions:

- **Issue:** Dependency installation fails.
  - **Solution:** Make sure you're using the correct versions of Ruby, Node.js, and npm/Yarn as specified in the prerequisites.

- **Issue:** Database migration errors.
  - **Solution:** Ensure MySQL is running and check your `config/database.yml` for correct configuration settings.

Feel free to contribute to the Youtube Video Sharing App by submitting pull requests or opening issues.

Thank you for checking out Youtube Video Sharing App!