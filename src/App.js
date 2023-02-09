import { useState, useEffect } from "react";

import "./app.css";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";


function App() {

    const [books, setBooks] = useState([]);


    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3004/books');

        setBooks(response.data);
    };


    useEffect(() => {
        fetchBooks();
    },

        []

    )






    const createBook = async (title) => {




        const response = await axios.post('http://localhost:3004/books',
            {
                title,
            }
        )


        const updatedBooks = [...books, response.data
        ];
        setBooks(updatedBooks);

    };








    const deleteBook = async (id) => {

        await axios.delete(`http://localhost:3004/books/${id}`)

        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
    };


    const editBook = async (id, newTitle) => {


        const response = await axios.put(`http://localhost:3004/books/${id}`,
            {
                title: newTitle
            });





        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    return (

        <div>
            <h1>Reading List</h1>
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