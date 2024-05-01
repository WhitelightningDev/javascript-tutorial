import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import HomePage from './HomePage';
import VariablesPage from './Variables';
import LoopsPage from './Loops';
import FunctionsPage from './Functions';
import ObjectsPage from './Objects';
import ArraysPage from './Arrays';
import MapsClass from './MapsClass';
import Events from './Events';
import JQueryClass from './JQueryClass';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" activeClassName="active" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/variables" activeClassName="active">Variables</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/loops" activeClassName="active">Loops</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/functions" activeClassName="active">Functions</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/objects" activeClassName="active">Objects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/arrays" activeClassName="active">Arrays</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/maps" activeClassName="active">Maps</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/events" activeClassName="active">Events</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/jQueryClass" activeClassName="active">JQuery</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/variables" element={<VariablesPage />} />
            <Route path="/loops" element={<LoopsPage />} />
            <Route path="/functions" element={<FunctionsPage />} />
            <Route path="/objects" element={<ObjectsPage />} />
            <Route path="/arrays" element={<ArraysPage />} />
            <Route path="/maps" element={<MapsClass />} />
            <Route path="/events" element={<Events />} />
            <Route path="/jQueryClass" element={<JQueryClass />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
