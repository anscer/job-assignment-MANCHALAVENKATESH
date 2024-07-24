# **Robotic State Management System**

This project provides a state management system. It allows authenticated users to create, read, update, and delete states, which represent different conditions.

## **Features**

- **User Authentication and Authorization**: Secure login system using Passport.js.
- **CRUD Operations**: API endpoints for managing states.
- **Data Validation**: Ensures valid data entry.
- **Docker Support**: Containerization for easy deployment.
- **API Documentation**: Postman collection for testing.

## **Technologies Used**

- **Node.js & Express.js**: Backend server and API.
- **MongoDB**: Database for storing states.
- **TypeScript**: Type safety and development efficiency.
- **Passport.js**: User authentication.
- **Docker**: Containerization of the application.

## **Getting Started**

### **Prerequisites**

- **Node.js**
- **MongoDB**
- **Docker** 

### **Installation**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/robotic-state-management.git
   cd robotic-state-management

2. **Install dependencies:**

    ```bash
    npm install

3. **Run the server:**
    ```bash
    npm start


### **Running with Docker**

1. **Build and start the Docker containers:** 

    ```bash
    docker-compose up --build

2. **Stop the Docker containers:** 

    ```bash
    docker-compose down


## **API Endpoints**

### **User Authentication**

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Login a user.
- **POST /auth/logout**: Logout a user.

### **State Management**

- **POST /api/states**: Create a new state (authenticated users only).
- **GET /api/states**: Get all states.
- **GET /api/states/:id**: Get a state by ID.
- **PUT /api/states/:id**: Update a state by ID (authenticated users only).
- **DELETE /api/states/:id**: Delete a state by ID (authenticated users only).

## **Testing the API with Postman**

1. **Login and Get Auth Token**: Use the `/auth/login` endpoint to obtain a session token.
   
   Example request to obtain a token:
   ```http
   POST /auth/login
   Content-Type: application/json

   {
     "username": "your-username",
     "password": "your-password"
   }







   
