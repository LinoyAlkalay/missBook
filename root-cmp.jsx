const { useState } = React

import { About } from "./views/about.jsx";
import { BookIndex } from "./views/book-index.jsx";
import { Home } from "./views/home.jsx";

export function App() {
    const [page, setPage] = useState('book')

    return <section className="app">
        <header className="app-header full main-layout">
            <nav className="app-nav">
                <h1>Book App</h1>
                <ul className="clean-list">
                    <li><a href="#" onClick={() => setPage('home')}>Home</a></li>
                    <li><a href="#" onClick={() => setPage('about')}>About</a></li>
                    <li><a href="#" onClick={() => setPage('book')}>Books</a></li>
                </ul>
            </nav>
        </header>

        <main>
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'book' && <BookIndex />}
        </main>
    </section>
}