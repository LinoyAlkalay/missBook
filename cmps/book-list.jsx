const { Link } = ReactRouterDOM

import { BookPreview } from "./book-preview.jsx"

export function BookList({ books, onRemoveBook }) {
    return <section>
        <Link to="/book/edit">Add Book!</Link>
        <ul className="book-list clean-list">
            {books.map(book => <li key={book.id}>
                <BookPreview book={book} />
                <div>
                    <button onClick={() => onRemoveBook(book.id)}>Remove book!</button>
                    <Link to={`/book/${book.id}`}>Select book!</Link>
                </div>
            </li>)}
        </ul>
    </section>
}