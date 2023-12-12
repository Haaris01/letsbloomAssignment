const express = require('express');
const mongoose = require('mongoose');
const books = require('./models/books'); // Make sure the path to your model is correct
const app = express();
mongoose.connect("mongodb+srv://haris_1:ahadahad@cluster0.5xo73.mongodb.net/library");

app.use(express.json());

const db = mongoose.connection;

db.on('error', err => {
    console.log(err);
});

db.once('open', () => {
    console.log("database connected".toUpperCase());
});

const router = express.Router();

const port = 3000;

app.use('/api', router); // Mount the router at /api

app.listen(port, function () {
    console.log(`SERVING ON PORT ${port}`);
});

router.get('/all', async (req, res) => {
    try {
        const allBooks = await books.find();
        console.log(allBooks);
        res.send(allBooks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/addBook', async (req, res) => {
    try {
        const { title, author } = req.body;
        console.log(title + " " + author);
        await books.create({title : title, author : author});
        res.send(title);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/updateBook', async (req, res) => {
    try {
        const {title} = req.body;
        console.log(title);

        const deletedBook = await books.findOneAndDelete({ title : title });

        if(deletedBook){
            const newBook = req.body;
            await books.create(newBook);
            res.send(title + " updated successfully");
        } else {
            res.send("Sorry that book doesnt exist");
        }
    } catch {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
