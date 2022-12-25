export function BookPrice({listPrice}) {
    const { amount, currencyCode, isOnSale } = listPrice

    let color = null
    if(amount > 150) {
        color = 'red'
    } else if (amount < 20) {
        color = 'green'
    }

    return <section className="book-price">
        <p className={color}>Price: {amount} {currencyCode}
         {isOnSale && <span>On Sale!</span>}
        </p>
    </section>
}