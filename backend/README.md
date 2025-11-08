# Vibe E-commerce Backend

A Node.js backend server for the Vibe E-commerce platform built with Express.js and MongoDB.

## Features

- User authentication (Register/Login)
- Product management
- Shopping cart functionality
- Secure checkout process
- JWT authentication

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- bcryptjs for password hashing

## Prerequisites

- Node.js v16 or higher
- MongoDB installed locally or MongoDB Atlas account
- npm or yarn package manager

## Installation

1. Clone the repository
2. Navigate to backend directory:

```bash
cd backend
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory with:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/vibe-ecom
JWT_SECRET=your_jwt_secret
```

5. Seed the database (optional):

```bash
node scripts/seed.js
```

## Running the Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

## API Endpoints

### Auth Routes

- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Product Routes

- GET `/api/products` - Get all products
- GET `/api/products/refresh` - Refresh products from external API

### Cart Routes

- GET `/api/cart` - Get user's cart
- POST `/api/cart` - Add item to cart
- PUT `/api/cart/:id` - Update cart item
- DELETE `/api/cart/:id` - Remove item from cart

### Checkout Routes

- POST `/api/checkout` - Process checkout

## Environment Variables

- `PORT`: Server port (default: 5000)
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT
