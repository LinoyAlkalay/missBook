const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { BookList } from '../cmps/book-list.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { bookService } from './../services/book.service.js'

export function BookIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])

    useEffect(() => {
        setIsLoading(true)
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(booksToUpdate => {
            setBooks(booksToUpdate)
            setIsLoading(false)
        })
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            setBooks(updatedBooks)
            showSuccessMsg('Book removed')
        })
        .catch((err) => {
            console.log('Had issues removing', err)
            showErrorMsg('Could not remove book, try again please!')
        })
    }

    return <section className="book-index">
        <div className="main-layout">
            <BookFilter onSetFilter={onSetFilter} />
            <div className="book-container main-layout full">
                {!isLoading && <BookList books={books} onRemoveBook={onRemoveBook} />}
                {isLoading && <div>Loading...</div>}
                {!books.length && <div>No items to show...</div>}
            </div>
        </div>
    </section>
}