import '../styles/contact.scss';

// Importing the components
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InfosStrip from '../components/InfoStrip';

// Import des images


import React from 'react';

export default function Contact() {
    return (
        <>
            <Head />
            <Navbar />
            <main>
                <div className="contact-section">
                    <h1>Besoin d’aide ?</h1>
                    <p>Vous rencontrez un problème, vous pouvez nous contacter avec les informations ci-dessous.</p>
                </div>
                <InfosStrip />
                <div className="contact-form-section">
                    <div className="infos-form">
                        <h2 className='h2 center'>Envoyez-nous un message !</h2>
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
                            <textarea name="message" id="textMessage" className="form-textarea" required></textarea>

                            <button type="submit" className="form-button">Envoyer</button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
