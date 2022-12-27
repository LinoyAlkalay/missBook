const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { showSuccessMsg } from "../services/event-bus.service.js"

export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()
    const { bookId } = useParams()
    console.log('bookToEdit:', bookToEdit)

    useEffect(() => {
        if (!bookId) return
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(bookId)
            .then((book) => setBookToEdit(book))
            .catch((err) => {
                console.log('Had issues in book details', err)
                navigate('/book')
            })
    }

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setBookToEdit((prevBook) => ({ ...prevBook, [field]: value }))
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit)
            .then((book) => {
                showSuccessMsg('book saved!')
                navigate('/book')
            })
    }

    return <section className="book-edit">
        <h2>{bookToEdit.id ? 'Edit this book' : 'Add a new book'}</h2>

        <form onSubmit={onSaveBook}>
            <label htmlFor="title">title: </label>
            <input type="text"
                name="title"
                id="title"
                placeholder="Enter title..."
                value={bookToEdit.title}
                onChange={handleChange}
            />
            <label htmlFor="price">Price: </label>
            <input type="number"
                name="price"
                id="price"
                placeholder="Enter price..."
                value={bookToEdit.listPrice.amount}
                onChange={handleChange}
            />

            <div>
                <button>{bookToEdit.id ? 'Save' : 'Add'}</button>
                <Link to="/book">Cancel</Link>
            </div>
        </form>
    </section>
}