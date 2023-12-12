const mongoose = require('mongoose');
const books = require('../models/books');

mongoose.connect("mongodb+srv://haris_1:ahadahad@cluster0.5xo73.mongodb.net/library");

const db = mongoose.connection;

db.on('error', err => {
    console.log(err);
});

db.once('open', () => {
    console.log("database connected".toUpperCase());
});

const booklist = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
];

const seedDB = async() => {
    await books.deleteMany({});
    books.insertMany(booklist)
        .then(() => {
            console.log('Database seeded with books successfully');
            mongoose.connection.close();
        })
        .catch(err => console.error(err));
} 

seedDB();

  