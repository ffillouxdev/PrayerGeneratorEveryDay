import React from "react";

// Fonction pour creer le composant navbar
function Navbar() {
    return (
        <header>
          <nav>
              <div className="container">
                  <h1>PrayerGeneratorEverDay</h1>
                  <div className="navbarNav">
                      <ul>
                          <li className="nav-item 1">
                              <a className="nav-link" href="/">Accueil</a>
                          </li>
                          <li className="nav-item 2">
                              <a className="nav-link" href="/Your-space">Votre espace</a>
                          </li>
                          <li className="nav-item 3">
                              <a className="nav-link" href="/contact">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <hr />    
        </header>
    );
}

export default Navbar;