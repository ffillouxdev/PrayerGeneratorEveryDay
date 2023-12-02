import React from "react";

// Fonction pour creer le composant navbar
function Navbar() {
    return (
        <header>
          <nav>
              <div class="container">
                  <h1>PrayerGeneratorEverDay</h1>
                  <div class="navbarNav">
                      <ul>
                          <li class="nav-item 1">
                              <a class="nav-link" href="/">Accueil</a>
                          </li>
                          <li class="nav-item 2">
                              <a class="nav-link" href="/about">A propos</a>
                          </li>
                          <li class="nav-item 3">
                              <a class="nav-link" href="/contact">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
        </header>
    );
}

export default Navbar;