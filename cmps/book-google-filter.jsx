const { useState, useEffect } = React

export function BookGoogleFilter({ onSetSearch }) {
    const [SearchBy, setSearchBy] = useState('')
    const debouncedSearchTerm = useDebounce(SearchBy, 500)

    useEffect(() => {
        onSetSearch(SearchBy)
    }, [debouncedSearchTerm])

    function handleChange({ target }) {
        let { value } = target
        return setSearchBy(value)
    }

    return <section className="list-filter">
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text"
                    id="title"
                    name="txt"
                    placeholder="By title"
                    onChange={handleChange}
                />
            </div>
        </form>
    </section>
}

function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => { clearTimeout(handler) }
    }, [value, delay] // Only re-call effect if value or delay changes
    )
    return debouncedValue
}
