import React, { useState, useEffect } from "react";
import User from "../assets/user1.webp";


/*Si la personne n'a pas de compte ou n'est pas connecté lui suggerer de le faire */

// Fonction pour creer le composant navbar
function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={scrolled ? "scrolled" : ""}>
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
                        <li className="nav-item 4">
                            <a className="Profile" href="/Profile"><img src={User} alt="User-icon" id="profileUser" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;