const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Book Schema
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

// Routes
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.json(books);
    } catch (err) {
        console.error('Error fetching books:', err);
        res.status(500).json({ error: 'Error fetching books' });
    }
});

app.post('/books', async (req, res) => {
    try {
        const { title, author, genre } = req.body;
        
        if (!title || !author || !genre) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const book = new Book({ title, author, genre });
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        console.error('Error adding book:', err);
        res.status(500).json({ error: 'Error adding book' });
    }
});

// Update the PUT route

app.put('/books/:id', async (req, res) => {
    try {
        const { title, author, genre } = req.body;
        
        if (!title || !author || !genre) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const book = await Book.findByIdAndUpdate(
            req.params.id,
            { title, author, genre },
            { new: true, runValidators: true }
        );

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        res.json(book);
    } catch (err) {
        console.error('Error updating book:', err);
        res.status(500).json({ error: 'Error updating book' });
    }
});

app.delete('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        res.json({ message: 'Book deleted successfully' });
    } catch (err) {
        console.error('Error deleting book:', err);
        res.status(500).json({ error: 'Error deleting book' });
    }
});

// Add this route after your other routes, before the PORT declaration
app.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        res.json(book);
    } catch (err) {
        console.error('Error fetching book:', err);
        res.status(500).json({ error: 'Error fetching book details' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});