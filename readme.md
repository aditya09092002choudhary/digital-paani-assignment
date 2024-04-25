# Book Management API

This is a simple book management API built using Node.js, Express, and MongoDB. It provides functionalities for user authentication, CRUD operations on book entries, and filtering books by author or publication year.

## Getting Started

Follow the instructions below to set up and run the API locally.

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (either locally or using a cloud service like MongoDB Atlas)

### Installation

#### Clone this repository:

git clone https://github.com/your-username/book-management-api.git
cd book-management-api

#### Install dependencies:

npm install

#### Set up environment variables:

Create a .env file in the root directory with the following content:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=your-secret-key

Replace your-secret-key with your own secret key for JWT token generation.

#### Start the server:

npm start

The API will be accessible at http://localhost:3000.

## API Endpoints

### User Authentication:

- POST /api/users/register: Register a new user.
- POST /api/users/login: Log in an existing user.

### Book Management:

- GET /api/books: Get all books.
- POST /api/books: Create a new book.
- PUT /api/books/:id: Update a book by ID.
- DELETE /api/books/:id: Delete a book by ID.

## Security Measures

- Input validation is implemented to prevent malicious data.
- User passwords are hashed before storing them in the database.
