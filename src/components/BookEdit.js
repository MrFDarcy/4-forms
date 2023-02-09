import { useState } from "react";


function BookEdit({ book, onSubmit }) {


    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
    };


    return (
        <form className="book-edit">
            <label>
                Title
            </label>
            <input
                type="text"
                value={title}
                onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>Edit</button>
        </form>
    );
}

export default BookEdit;