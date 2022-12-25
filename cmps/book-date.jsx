export function BookDate({ publishedDate }) {
    const todayDate = new Date()
    const timeAgo = todayDate.getFullYear() - publishedDate

    let dateTitle = null
    if (timeAgo > 10) {
        dateTitle = '(Vintage)'
    } else if (timeAgo <= 1) {
        dateTitle = '(New)'
    } else {
        dateTitle = ''
    }

    return <p>Published at: {publishedDate} {dateTitle}</p>
}