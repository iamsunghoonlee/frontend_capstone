import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage'
import Main from './Main';
import AboutMe from './AboutMe'
import Menu from './Menu'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function Nav() {
  return (
      <div>
        
        <nav className="nav">
          <img src="./logo_lm512.png" className="app-logo"/>
          <Link to="/" className="nav-item">Homepage</Link>
          <Link to="/main" className="nav-item">Main</Link>
          <Link to="/about-me" className="nav-item">AboutMe</Link>
          <Link to="/menu" className="nav-item">Menu</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/main" element={<Main />}/>
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
