export function PageCountReading({ pageCount }) {

    let reading = null
    if (pageCount > 500) {
        reading = ' Serious Reading'
    } else if (pageCount > 200) {
        reading = ' Descent Reading'
    } else if (pageCount < 100) {
        reading = ' Light Reading'
    }

    return <p>Number of pages: {pageCount}
        <span>{reading}</span>
    </p>
}