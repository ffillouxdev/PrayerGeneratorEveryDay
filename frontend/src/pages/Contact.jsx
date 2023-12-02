import '../styles/contact.css';


// Importing the components
import Head from '../components/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// Import des images
import phoneIcon from '../assets/phone.png';
import emailIcon from '../assets/email.png';
import locationIcon from '../assets/location.png';


import React from 'react';

export default function Contact() {
    return (
        <>
            <Head />
            <Navbar />

            <div className="contact-section">
                <h1>Besoin d’aide ?</h1>
                <p>Vous rencontrez un problème, vous pouvez nous contacter avec les informations ci-dessous.</p>
            </div>

            <div className="infos-strip">
                <div className="info phone">
                    <img src={phoneIcon} alt="phone icon" />
                    <h3>Numéro de téléphone</h3>
                    <p>+33 9 99 99 99</p>
                </div>
                <div className="info email">
                    <img src={emailIcon} alt="email icon" id="email-icon" />
                    <h3>Email</h3>
                    <p>deplacementdoux@email.fr</p>
                </div>
                <div className="info location">
                    <img src={locationIcon} alt="location icon" />
                    <h3>Localisation</h3>
                    <p>1 Rue de la Technologie, 69100 Villeurbanne</p>
                </div>
            </div>

            <div className="contact-form-section">
                <div className="infos-form">
                    <h2>Envoyez-nous un message !</h2>
                    <p>Vous avez rencontré un problème, vous avez besoin d’aide, une idée à nous proposer ou juste un avis sur notre site ? Vous pouvez nous envoyer un message en remplissant le formulaire ci-dessous.</p>
                </div>
                <div className="form-contact">
                    <div className="top-form">
                        <label htmlFor="name">Nom</label>
                        <input type="text" name="name" id="name" className="form-input" required />

                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" className="form-input" required />
                    </div>

                    <div className="bottom-form">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="textMessage" className="form-textarea" cols="30" rows="10" required></textarea>

                        <button type="submit" className="form-button">Envoyer</button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
