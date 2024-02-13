{/* <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
</ul> */}
import { Routes, Route, Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/culinary-blog" className="nav-item">Culinary Blog</Link>
                <Link to="/menu" className="nav-item">Menu</Link>
                <Link to="/contact" className="nav-item">Contact Us</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage />} /> 
                <Route path="/culinary-blog" element={<CulinaryBlog />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<ContactUs />} />

                {/* <Route path="/about-me" element={<AboutMe />} /> */}
            </Routes>
        </div>
    );
}

export default Nav;