# 📚 Book Management System

A **Full-Stack CRUD Web Application** for managing books, built using **Node.js**, **Express**, and **MongoDB**, with a responsive **Bootstrap 5** UI for a seamless and intuitive user experience.

---

## 🚀 Features

- ✅ **CRUD Operations** – Create, Read, Update, and Delete books  
- 📱 **Responsive Design** – Optimized for desktop and mobile devices  
- 🔄 **Real-Time Data Sync** – Updates reflect instantly using MongoDB  
- 🎨 **Modern UI** – Clean and intuitive design with Bootstrap 5  
- 🔐 **Input Validation** – Robust form and server-side validation  
- 🔔 **Toast Notifications** – Instant feedback on user actions  
- ✏️ **Modal Dialogs** – Edit books without leaving the page  

---

## 🛠️ Tech Stack

| Category     | Technologies                           |
|--------------|----------------------------------------|
| Frontend     | HTML5, CSS3, JavaScript, Bootstrap 5   |
| Backend      | Node.js, Express.js                    |
| Database     | MongoDB                                |
| Tools & Libs | Font Awesome, dotenv                   |

---

## 📦 Prerequisites

Ensure the following are installed on your system:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (v4 or higher)

---

## 📥 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/Book-Management-System.git
cd Book-Management-System

# 2. Install dependencies
npm install
```

### 🔐 Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=<your_port_number>
MONGODB_URI=<your_mongodb_connection_string>
```

### 🧠 Start MongoDB Service

Make sure your MongoDB service is running:

```bash
mongod
```

### ▶️ Run the Application

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```
Book-Management-System/
├── public/
│   ├── index.html         # Frontend HTML
│   └── script.js          # Frontend JavaScript logic
├── server.js              # Main Express server file
├── .env                   # Environment configuration
├── package.json           # Project metadata and scripts
├── README.md              # Project documentation
```

---

## 📡 API Endpoints

| Method | Endpoint      | Description              |
|--------|---------------|--------------------------|
| GET    | `/books`      | Fetch all books          |
| GET    | `/books/:id`  | Fetch a single book by ID|
| POST   | `/books`      | Create a new book        |
| PUT    | `/books/:id`  | Update an existing book  |
| DELETE | `/books/:id`  | Delete a book by ID      |

---

## 💡 How It Works

1. 📘 Users interact with the frontend to add, view, edit, or delete book entries.
2. 🔁 The frontend communicates with the backend via RESTful APIs.
3. 📃 The backend uses **Express.js** to handle HTTP requests and **MongoDB** to store and manage book data.
4. 🧹 The interface updates in real-time and provides responsive feedback using modals and toast notifications.

---

## 🌱 Future Enhancements

- 🔍 Add search and filter functionality  
- 🔐 Implement user authentication and role-based access  
- 🎨 Enhance UI with advanced Bootstrap components  
- 🌍 Deploy the app to a cloud platform (e.g., Render, Vercel)

---

## 🤝 Contribution Guidelines

Contributions are welcome! You can help by:

- 🐛 Reporting bugs  
- 🌟 Suggesting features  
- 📄 Submitting pull requests  

Please follow conventional commit standards and submit clear PR descriptions.

---

## 📬 Contact

For any questions, feedback, or collaboration:

- 📧 Email: [smanikanta1239@gmail.com](mailto:smanikanta1239@gmail.com)  
- 💻 GitHub: [Manikanta1239](https://github.com/Manikanta1239)

---

> *Built with ❤️ by Manikanta*

