import { useState } from "react";

import "./app.css";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App() {

    const [books, setBooks] = useState([]);


    const createBook = (title) => {
        const updatedBooks = [...books, {
            id: Math.floor(Math.random() * 1000),
            title
        }];
        setBooks(updatedBooks);

    };


    const deleteBook = (id) => {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
    };


    const editBook = (id, title) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title };
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    return (

        <div>
            <BookList
                books={books}
                onDelete={deleteBook}
                onEdit={editBook}
            />
            <BookCreate onCreate={createBook} />
        </div>
    );
}


export default App;