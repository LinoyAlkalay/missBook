const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"


export function BookFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    return <section className="book-filter">
        <form onSubmit={onSubmitFilter}>
            <input type="text"
                name="title"
                placeholder="Book title"
                value={filterByToEdit.title}
                onChange={handleChange}
            />

            <input type="number"
                name="price"
                placeholder="Book price"
                value={filterByToEdit.price}
                onChange={handleChange}
            />

            <button>Filter books!</button>
        </form>
        <img src="assets/img/1.jpg" alt="reading" />
    </section>
}