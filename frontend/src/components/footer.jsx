import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="first-div">
                    <h2>PrayerGeneratorEverDay</h2>
                    <p>"Que chaque jour soit une bénédiction, rempli de paix, d'amour et de grâce divine. Puissiez-vous trouver réconfort dans la prière et être guidé par la lumière intérieure qui vous mène sur le chemin sacré de la vie."</p>
                </div>
                <div className="page-div">
                    <span onClick={() => handleLinkClick("/")}>
                        <Link to="/">Accueil</Link>
                    </span>
                    <span onClick={() => handleLinkClick("/Your-space")}>
                        <Link to="/Your-space">Votre espace</Link>
                    </span>
                    <span onClick={() => handleLinkClick("/Your-space#Community")}>
                        <Link to="/Your-space#Community">Communauté</Link>
                    </span>
                    <span onClick={() => handleLinkClick("/Contact")}>
                        <Link to="/Contact">Contact</Link>
                    </span>
                </div>
                <div className="politics-div">
                    <Link to="/Privacy-policy">Politque de confidentialité</Link>
                    <Link to="/Terms">Termes & Conditions</Link>
                </div>
            </div>
            <hr />
            <div className="copyrights-div">
                <p>&copy; 2023 PrayerGeneratorEverDay - Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;
