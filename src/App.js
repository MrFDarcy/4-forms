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

    return (

        <div>
            <BookList
                books={books} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}


export default App;