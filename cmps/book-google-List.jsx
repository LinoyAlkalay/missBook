

export function BookGoogleList({ books, onAddGoogleBook }) {
    return <ul>
        {books.map(book =>
            <li key={book.id}>{book.title}
                <button onClick={() => onAddGoogleBook(book.id)}>Add</button>
            </li>)}
    </ul>
}