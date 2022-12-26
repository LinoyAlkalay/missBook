const { useState } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { showSuccessMsg } from "../services/event-bus.service.js"

export function BookReview() {
    const [reveiw, setReveiw] = useState(null)
    const navigate = useNavigate()
    const { bookId } = useParams()

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'range' ? +value : value
        setReveiw(prevReview => ({ ...prevReview, [field]: value }))
    }
    
    function onAddReview(ev) {
        ev.preventDefault()
        bookService.addReview(bookId, reveiw).then(() => {
            showSuccessMsg('book reviewed!')
            navigate('/book')
        })
    }

    return <section className="book-review">
        <h2>Review this book!</h2>

        <form onSubmit={onAddReview}>
            <label htmlFor="fullname">Fullname: </label>
            <input type="text"
                name="fullname"
                id="fullname"
                placeholder="Enter your fullname"
                onChange={handleChange}
            />
            <label htmlFor="rating">Rating: </label>
            <input type="range"
                name="rate"
                id="rating"
                min="1"
                max="5"
                onChange={handleChange}
            />
            <label htmlFor="read-at">Read at: </label>
            <input type="date"
                name="readAt"
                id="read-at"
                onChange={handleChange}
            />

            <div>
                <button>Save</button>
                <Link to="/book">Cancel</Link>
            </div>
        </form>
    </section>
}