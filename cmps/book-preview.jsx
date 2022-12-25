
export function BookPreview({ book }) {
const {title, thumbnail, description, listPrice} = book
    return <article className="car-preview">
        <h2>{title}</h2>
        <img src={thumbnail} />
        <p>{description}</p>
        <p>Price: {listPrice.amount} {listPrice.currencyCode}</p>
    </article>
}