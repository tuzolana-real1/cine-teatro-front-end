import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function NavBar () {
    return (
        <nav>
            <BrowserRouter>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/inicio"></Link>
                    <Link to=""></Link>
                    <Link to=""></Link>
                </ul>
            </BrowserRouter>
        </nav>
    )
}

export default NavBar