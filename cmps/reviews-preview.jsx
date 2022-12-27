import { StarRating } from "../cmps/star-rating.jsx"

export function ReviewsPreview({ book }) {

    return <ul className="reviews-preview clean-list">
        {book.reviews && book.reviews.map(review =>
            <li key={review.fullname}>
                Reviewer name: {review.fullname}, Rating: {review.rate}, Read at: {review.readAt} 
                {/* <StarRating /> */}
            </li>)}
    </ul>
}