const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { AppHeader } from "./cmps/app-header.jsx"
import { BookDetails } from "./views/book-details.jsx"
import { BookEdit } from "./views/book-edit.jsx"
import { About } from "./views/about.jsx"
import { BookIndex } from "./views/book-index.jsx"
import { Home } from "./views/home.jsx"
import { UserMsg } from './cmps/user-msg.jsx'

export function App() {

    return <Router>
        <section className="app">
            <AppHeader />

            <main>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<About />} path="/about" />

                    <Route element={<BookIndex />} path="/book" />
                    <Route element={<BookEdit />} path="/book/edit" />
                    <Route element={<BookEdit />} path="/book/edit/:bookId" />
                    <Route element={<BookDetails />} path="/book/:bookId" />
                </Routes>
            </main>

            <UserMsg />
        </section>
    </Router>
}