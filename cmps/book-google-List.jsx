

export function BookGoogleList({ books, onAddGoogleBook }) {
    return <ul className="google-list">
        {books.map(book =>
            <li key={book.id}>{book.title}
                <button onClick={() => onAddGoogleBook(book.id)}>+</button>
            </li>)}
    </ul>
}