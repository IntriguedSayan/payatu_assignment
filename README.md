# Payatu Assignment

A Node.js API project for router interrogation and actions.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/IntriguedSayan/payatu_assignment.git
cd payatu_assignment
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

To start the server:
```bash
node server.js
```

The server will start running on `http://localhost:5000`

## API Routes

### Base URL
All API endpoints are prefixed with `/api`

### Available Endpoints

1. **Welcome Endpoint**
   - `GET /api`
   - Returns a welcome message
   - Response: `{ "message": "WELCOME" }`

2. **Router Interrogation**
   - `POST /api/router/interrogate`
   - Endpoint for router interrogation
   - Requires request body (check controller for specific requirements)

3. **Router Action**
   - `POST /api/router/action`
   - Endpoint for performing router actions
   - Requires request body (check controller for specific requirements)

## Dependencies

- express: ^5.1.0
- cors: ^2.8.5
- axios: ^1.9.0

## Project Structure

```
payatu_assignment/
├── controllers/     # Route controllers
├── routes/         # API route definitions
├── services/       # Business logic
├── server.js       # Main application file
└── package.json    # Project dependencies
```