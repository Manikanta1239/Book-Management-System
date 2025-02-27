# Book Management System

## Project Overview
This project is a **full-stack CRUD application** for managing books. It is built using **Node.js, Express, and MongoDB** with a **Bootstrap-based UI** for an enhanced user experience.


## Features

- Create, Read, Update, and Delete books
- Responsive design that works on desktop and mobile
- Real-time updates using MongoDB
- Clean and modern UI with Bootstrap 5
- Input validation and error handling
- Toast notifications for user feedback
- Modal dialogs for editing

## Tech Stack

- **Frontend:** HTML5, CSS3 (with **Bootstrap 5** for responsive design), JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other Tools:** Font Awesome, dotenv

## Prerequisites

Before running this project, make sure you have installed:

- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- npm (Node Package Manager)

## Steps to Install
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/Book-Management-System.git
   cd Book-Management-System
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add:
   ```env
   PORT=<your_port_number>
   MONGODB_URI=<your_mongodb_connection_string>
   ```
4. Start MongoDB service
   ```bash
   mongod
   ```
5. Run the application
   ```bash
   npm start
   ```
6. The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure
```
Book-Management-System/
├── public/
│   ├── index.html
│   ├── script.js
├── server.js
├── .env
├── package.json
├── README.md
```

## API Endpoints
| Method | Endpoint      | Description          |
|--------|-------------|----------------------|
| GET    | /books       | Get all books        |
| GET    | /books/:id   | Get a single book    |
| POST   | /books       | Create a new book    |
| PUT    | /books/:id   | Update a book        |
| DELETE | /books/:id   | Delete a book        |

## Environment Variables
Ensure you have the following environment variables in your `.env` file:

```
PORT=<your_port_number>
MONGODB_URI=<your_mongodb_connection_string>
```

## How It Works
1. Users can add, edit, or delete book records using the web interface.
2. The data is stored in **MongoDB** and updated in real-time.
3. The **Express.js** backend handles API requests and database operations.
4. The **Bootstrap-based UI** ensures a seamless user experience.

## Future Enhancements
- Implement search and filter functionality.
- Add user authentication and authorization.
- Improve UI with advanced Bootstrap components.

## Contribution Guidelines
Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests

## Contact
For any questions or suggestions, feel free to contact me:
- **Email**: smanikanta1239@gmail.com
- **GitHub**: [Manikanta1239](https://github.com/Manikanta1239/)
