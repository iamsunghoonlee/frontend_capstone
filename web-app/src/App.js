import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage'
import Bookings from './components/pages/Bookings/Bookings';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import Main from './Main';
import AboutMe from './AboutMe'
import Menu from './Menu'

function Nav() {
  return (
      
      <div>
        <nav className="nav">
          <img src="./logo_lm512.png" className="app-logo"/>
          <Link to="/" className="nav-item">Homepage</Link>
          <Link to="/main" className="nav-item">Main</Link>
          <Link to="/bookings" className="nav-item">Bookings</Link>
          {/* <Link to="/confirm" className="nav-item">ConfirmedBooking</Link> */}
          <Link to="/about-me" className="nav-item">AboutMe</Link>
          <Link to="/menu" className="nav-item">Menu</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/main" element={<Main />}/>
          <Route path="/bookings" element={<Bookings />}/>
          <Route path="/confirm" element={<ConfirmedBooking />}/>
          <Route path="/about-me" element={<AboutMe />}/>
          <Route path="/menu" element={<Menu />}/>
        </Routes>
      </div>
  );
}

function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
};

export default App;
