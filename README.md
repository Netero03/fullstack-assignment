# Help Center API & Frontend

This project is a Help Center application with a RESTful API built using Node.js, Express, and MongoDB, and a frontend built using React, Vite, and Tailwind CSS.

## Project Structure

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Vite, Tailwind CSS


### File Structure

Here’s how your project directory might look:

```bash
fullstack-assignment/
│
├── backend/
│   ├── .env
│   ├── api/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── package.json
│   └── ...
│
├── README.md
└── ...
```

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community) (you can also use MongoDB Atlas for cloud-hosted MongoDB)

## Setup Instructions

# 1. Clone the Repository

```bash
git clone https://github.com/Netero03/fullstack-assignment.git
cd fullstack-assignment
```

# 2. Setting Up the Backend
## Navigate to the Backend Directory:
```bash
cd backend
```
### Install Dependencies:
```bash
npm install
```
### Configure Environment Variables:

Create a .env file in the backend directory and add the following:

```bash
PORT=5000
MONGO_URI=mongodb+srv://jatinletsgo:w8e6CTIT0LZdJAC7@cluster0.rzr17.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```
Replace the MONGO_URI with your MongoDB connection string if you're using a remote database.

### Start the Backend Server:

```bash
npm start
```
Or 
```bash
##nodemon
npm dev 
```

The backend server will start on http://localhost:5000.

# 3. Setting Up the Frontend

### Navigate to the Frontend Directory:
```bash
cd ../frontend
```
### Install Dependencies:
```bash
npm install
```

### Start the Frontend Server:
```bash
npm run dev
```

The frontend application will start on http://localhost:5173.

# 4. Access the Application
- **Frontend**: Open your browser and go to http://localhost:5173 to access the Help Center UI.
- **Backend**: The backend API is accessible at http://localhost:5000/cards.

## API Endpoints
- Create a Card: POST /cards
- Get All Cards: GET /cards
- Get a Specific Card by Title: GET /cards/:title

### 5. Testing the Application
1. Open the frontend in your browser.
2. Search for existing help center cards using the search bar.
3. Create a new card using the "Create Card" button.
4. Verify that the card appears in the list after creation.
   
### 6. Tailwind CSS Styling
The project uses Tailwind CSS for styling. If you need to customize the styling, you can modify the Tailwind configuration in the tailwind.config.js file located in the frontend directory.

## Troubleshooting
- Ensure MongoDB is running locally or the connection string in .env is correctly configured.
- If the frontend or backend server fails to start, check for any errors in the console output and resolve any missing dependencies or configuration issues.

# Thankyou