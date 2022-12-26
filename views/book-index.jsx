const { useState, useEffect } = React

import { BookList } from '../cmps/book-list.jsx';
import { BookDetails } from '../cmps/book-details.jsx';
import { BookFilter } from '../cmps/book-filter.jsx';
import { UserMsg } from '../cmps/user-msg.jsx';

import { bookService } from './../services/book.service.js';

export function BookIndex() {
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const [userMsg, setUserMsg] = useState('')

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(booksToUpdate => {
            setBooks(booksToUpdate)
        })
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            setBooks(updatedBooks)
            flashMsg('Book removed!')
        })
    }

    function onSelectBook(bookId) {
        bookService.get(bookId).then((book) => {
            setSelectedBook(book)
        })
    }

    function flashMsg(msg) {
        setUserMsg(msg)
        setTimeout(() => {
            setUserMsg('')
        }, 3000)
    }

    return <section className="book-index">
        {userMsg && <UserMsg msg={userMsg} />}
        {!selectedBook && <div className="main-layout">
            <BookFilter onSetFilter={onSetFilter} />
            <div className="book-container main-layout full">
                <BookList books={books} onRemoveBook={onRemoveBook} onSelectBook={onSelectBook} />
            </div>
        </div>}
        {selectedBook && <div>
            <BookDetails book={selectedBook}
                onGoBack={() => setSelectedBook(null)} />
        </div>}
    </section>
}