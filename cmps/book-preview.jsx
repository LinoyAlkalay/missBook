
export function BookPreview({ book }) {
const {title, thumbnail, description, listPrice} = book
    return <article className="car-preview">
        <img src={thumbnail} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: {listPrice.amount} {listPrice.currencyCode}</p>
    </article>
}