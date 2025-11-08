# Vibe E-commerce Frontend

A modern e-commerce frontend built with React, TypeScript, and Tailwind CSS.

## Features

- User authentication
- Product browsing
- Shopping cart management
- Checkout process
- Responsive design
- Dark/Light mode

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Query
- React Router
- Axios

## Prerequisites

- Node.js v16 or higher
- npm or yarn package manager

## Installation

1. Navigate to frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── api/          # API integration
├── components/   # Reusable components
├── contexts/     # React contexts
├── hooks/        # Custom hooks
├── lib/          # Utility functions
└── pages/        # Application pages
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Environment Variables

Create a `.env` file in the frontend root:

```env
VITE_API_URL=http://localhost:5000/api
```

## Features

- Protected routes with authentication
- API integration with axios
- State management with React Query
- Responsive UI with Tailwind CSS
- Form validation
- Toast notifications
- Loading states
- Error handling
