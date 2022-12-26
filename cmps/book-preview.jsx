
export function BookPreview({ book }) {
const {title, thumbnail, authors, listPrice} = book
    return <article className="book-preview">
        <img src={thumbnail} />
        <h2><span>{title}</span><span>{listPrice.amount} {listPrice.currencyCode}</span></h2>
        <p>{authors}</p>
    </article>
}