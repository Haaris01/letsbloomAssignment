# Library Management System API

This API provides basic functionality for managing a library system, including retrieving all books, adding new books, and updating book details.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Database Seeding](#database-seeding)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
  - [1. Retrieve All Books](#1-retrieve-all-books)
  - [2. Add a New Book](#2-add-a-new-book)
  - [3. Update Book Details](#3-update-book-details)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node.js package manager)
- [MongoDB](https://www.mongodb.com/try/download/community) (Make sure the MongoDB server is running)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>

2. **Navigate to the project directory:**

   ```bash
   cd library-management-system

3. **Install the dependencies:**

   ```bash
   npm i
   
### Environment configuration:

Create a .env file in the root directory with the following content:
`DB_URL=<your-mongodb-connection-string>`
Replace `<your-mongodb-connection-string>` with the actual connection string for your MongoDB database.

## Database seeding
To seed the database with mock data, run:
  `cd seeds`
  `node index.js`

## Running the application
go back to root directory
  `cd ../`
run the main application
  `node app.js`

## API Documentation

### 1. Retrieve All Books

**Endpoint:** `GET /api/allBooks`

- **Description:** Retrieves a list of all books in the library.
- **Request Method:** GET
- **Response Format:** JSON
- **Response Example:**

  ```json
  [
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald"
    },
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee"
    },
    // ... other books
  ]
<img width="2040" alt="image" src="https://github.com/Haaris01/letsbloomAssignment/assets/70129000/cc0952ec-b82f-4459-b545-a1ea1152bfe7">


### 2. Add a New Book
**Endpoint:** `POST /api/addBook`

- **Description:** Creates a book by using input from form body i.e `req.body`
- **Request Method:** POST
- **Request Body Format:** JSON
- **Request Body Example:**
  ```json
  {
    "title": "New Book Title",
    "author": "New Book Author"
  }
- **Response Format:** JSON
- **Response Example:**
  ```json
  "New Book Title added successfully"
<img width="1086" alt="image" src="https://github.com/Haaris01/letsbloomAssignment/assets/70129000/559d508a-b7af-45d6-a186-07baecbb339c">

### 3. Update Book Details

**Endpoint:** `PUT /api/updateBook`

- **Description:** Takes the title from the form req.body finds and deletes that title and then adds new book with the same title and updated details.
- **Request Method:** PUT
- **Request Body Format:** JSON
- **Request Body Example:**
  ```json
  {
    "title": "Book to be updated Title",
    "author": "updated Book Author"
  }
- **Response Format:** JSON
- **Response Example:**
  ```json
  "Updated Book Title successfully"

<img width="1086" alt="image" src="https://github.com/Haaris01/letsbloomAssignment/assets/70129000/6730690a-9f91-46c3-a7e2-e7f8c94f1582">

