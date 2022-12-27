const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { LongTxt } from "../cmps/long-txt.jsx"
import { BookDate } from "../cmps/book-date.jsx"
import { BookPrice } from "../cmps/book-price.jsx"
import { PageCountReading } from "../cmps/page-count.jsx"
import { StarRating } from "../cmps/star-rating.jsx"

import { bookService } from "../services/book.service.js"
import { showErrorMsg } from "../services/event-bus.service.js"

export function BookDetails() {
    const [book, setBook] = useState(null)
    const [nextBookId, setNextBookId] = useState(null)
    const [prevBookId, setPrevBookId] = useState(null)
    const { bookId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [bookId])

    function loadBook() {
        bookService.get(bookId)
            .then((book) => setBook(book))
            .catch(() => {
                showErrorMsg('Had issues in book details')
                navigate('/book')
            })
        bookService.getNextBookId(bookId)
            .then(setNextBookId)
        bookService.getPrevBookId(bookId)
            .then(setPrevBookId)
    }

    function onGoBack() {
        navigate('/book')
    }

    if (!book) return <div>Loading...</div>
    return <section className="book-details">
        <div className="detalis-content">
            <img src={book.thumbnail} />
            <div className="book-content">
                <h1>{book.title}</h1>
                <h5>{book.subtitle}</h5>
                <h6>By {book.authors}</h6>
                <LongTxt txt={book.description} length={length = 100}>
                    <p>{book.description}</p>
                </LongTxt>
                <BookPrice listPrice={book.listPrice} />
                <p>Language: {book.language}</p>
                <BookDate publishedDate={book.publishedDate} />
                <PageCountReading pageCount={book.pageCount} />
                <p>Categories:
                    {book.categories.map(categorie => <span key={categorie}> {categorie} </span>)}
                </p>
                <button onClick={onGoBack}>Go Back</button> {/* use link insted btn */}
                <Link to={`/book/edit/${book.id}`}>Edit me</Link>
                <Link to={`/book/${book.id}/review/`}>Review</Link>
            </div>
        </div>
        <Link to={`/book/${nextBookId}`}>Next book</Link>
        <Link to={`/book/${prevBookId}`}>Prev book</Link>
        {/* make a new cmp! */}
        <ul className="reviews-list">
            {book.reviews && book.reviews.map(review =>
                <li key={review.fullname}>
                    {review.fullname}
                    <StarRating />
                    {review.rate}
                    {review.readAt}
                </li>)}
        </ul>
    </section>
}