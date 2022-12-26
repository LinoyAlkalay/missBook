import { LongTxt } from "../assets/style/cmps/long-txt.jsx"
import { BookDate } from "./book-date.jsx"
import { BookPrice } from "./book-price.jsx"
import { PageCountReading } from "./page-count.jsx"

export function BookDetails({ book, onGoBack }) {
    const { title, subtitle, authors, publishedDate, description, pageCount, categories, thumbnail, language, listPrice } = book

    return <section className="book-details">
        <img src={thumbnail} />
        <div className="book-content">
            <h1>{title}</h1>
            <h5>{subtitle}</h5>
            <h6>By {authors}</h6>
            <LongTxt txt={description} length={length = 100}>
                <p>{description}</p>
            </LongTxt>
            <BookPrice listPrice={listPrice} />
            <p>Language: {language}</p>
            <BookDate publishedDate={publishedDate} />
            <PageCountReading pageCount={pageCount} />
            <p>Categories:
                {categories.map(categorie => <span key={categorie}> {categorie} </span>)}
            </p>
            <button onClick={onGoBack}>Go Back</button>
        </div>
    </section>
}