const { useState, useEffect } = React

export function BookGoogleFilter({ onSetSearch }) {

    const [SearchBy, setSearchBy] = useState('')

    function handleChange({ target }) {
        let { value} = target
            return setSearchBy(value)
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetSearch(SearchBy)
    }

    return <section className="list-filter">
        <form onSubmit={onSubmitFilter}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text"
                    id="title"
                    name="txt"
                    placeholder="By title"
                    // value={title.txt}
                    onChange={handleChange}
                />
            </div>
        </form>
    </section>
}