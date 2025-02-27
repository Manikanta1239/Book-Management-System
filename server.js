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
.then(() => console.log('Successfully connected to MongoDB'))
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
        const books = await Book.find();
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

        const newBook = new Book({ title, author, genre });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        console.error('Error adding book:', err);
        res.status(500).json({ error: 'Error adding book' });
    }
});

app.put('/books/:id', async (req, res) => {
    try {
        const { title, author, genre } = req.body;
        
        if (!title || !author || !genre) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { title, author, genre },
            { new: true, runValidators: true }
        );
        
        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        
        res.json(updatedBook);
    } catch (err) {
        console.error('Error updating book:', err);
        res.status(500).json({ error: 'Error updating book' });
    }
});

app.delete('/books/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        
        if (!deletedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        
        res.json({ message: 'Book deleted successfully' });
    } catch (err) {
        console.error('Error deleting book:', err);
        res.status(500).json({ error: 'Error deleting book' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});