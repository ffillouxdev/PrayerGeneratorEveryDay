import React from "react";

// Fonction pour creer le composant footer

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="first-div">
                    <h2>PrayerGeneratorEverDay</h2>
                    <p>"Que chaque jour soit une bénédiction, rempli de paix, d'amour et de grâce divine. Puissiez-vous trouver réconfort dans la prière et être guidé par la lumière intérieure qui vous mène sur le chemin sacré de la vie."</p>
                </div>
                <div className="page-div">
                    <a href="/">Accueil</a>
                    <a href="/Your-space">Votre espace</a>
                    <a href="/Your-space#intensionPart">Intension</a>
                    <a href="/Your-space#Community">Communauté</a>
                    <a href="/Contact">Contact</a>
                </div>
                <div className="politics-div">
                    <a href="">Privacy policy</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Partners</a>
                </div>
            </div>
            <hr/>
            <div className="copyrights-div">
                <p>&copy; 2023 PrayerGeneratorEverDay - Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;