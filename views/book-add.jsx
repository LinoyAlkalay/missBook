const { useNavigate, Link } = ReactRouterDOM
const { useState, useEffect } = React

import { BookGoogleList } from "../cmps/book-google-List.jsx"
import { BookGoogleFilter } from "../cmps/book-google-filter.jsx"
import { googleBookService } from "../services/google-book.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

export function BookAdd() {

    // const [isLoading, setIsLoading] = useState(false)
    // const [bookToAdd, setBookToAdd] = useState(null)
    const [searchBy, setSearchBy] = useState(null)
    const [books, setBooks] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        // setIsLoading(true)
        loadBooks()
    }, [searchBy])

    function loadBooks() {
        googleBookService.query(searchBy)
            .then(setBooks)
        // setIsLoading(false)
    }

    function onSetSearch(searchByFromForm) {
        setSearchBy(searchByFromForm)
    }

    function onAddGoogleBook(googleBookId) {
        googleBookService.get(googleBookId)
            .then(book => {
                // setBookToAdd(book)
                saveGoogleBook(book)
            })
    }

    function saveGoogleBook(book) {
        googleBookService.addGoogleBook(book)
            .then(() => {
                showSuccessMsg('book added!')
                navigate('/book')
            })
            .catch(() => {
                showErrorMsg('you already add this book!')
            })
    }

    return <section className="book-add">
        <BookGoogleFilter onSetSearch={onSetSearch} />
        <BookGoogleList books={books} onAddGoogleBook={onAddGoogleBook} />
        {!books.length && <div>No items to show..</div>}
    </section>

}


// cmp booksearch => return txt value to daddy
// cmp bookgooglelist preview=> get books.titles and add button from daddy and preview it
