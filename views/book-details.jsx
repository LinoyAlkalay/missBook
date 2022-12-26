const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { LongTxt } from "../cmps/long-txt.jsx"
import { BookDate } from "../cmps/book-date.jsx"
import { BookPrice } from "../cmps/book-price.jsx"
import { PageCountReading } from "../cmps/page-count.jsx"

import { bookService } from "../services/book.service.js"

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then((book) => setBook(book))
            .catch((err) => {
                console.log('Had issues in book details', err)
                navigate('/book')
            })
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
                <button onClick={onGoBack}>Go Back</button>
                <Link to={`/book/edit/${book.id}`}>Edit me</Link>
                <Link to={`/book/${book.id}/review/`}>Review</Link>
            </div>
        </div>
        <ul className="reviews-list">
            {book.reviews && book.reviews.map(review => <li key={review.fullname}> {review.fullname} {review.rate} {review.readAt}</li>)}
        </ul>
    </section>
}