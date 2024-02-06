// Importing the components
import Navbar from '../components/navbar'; // Path: frontend/src/components/navbar.js
import Footer from '../components/footer'; // Path: frontend/src/components/footer.js

import React, { useEffect } from 'react';
import '../styles/PrivacyPolicy.scss';

import background from '../assets/privacy-policy.jpg';

export default function PrivacyPolicy() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <main className='privacy-policy-page' style={{
                background: `url(${background}) no-repeat center center fixed`,
                backgroundSize: 'cover',

            }}>
                <div className="privacy-policy">
                    <h2 className='h2 center'>Politique de confidentialité</h2>
                    <hr />

                    <section>
                        <p>
                            Bienvenue sur notre politique de confidentialité. Chez PrayerGeneratorEveryDay, nous accordons une grande importance à la protection de vos données personnelles. Cette politique vise à vous informer sur la manière dont nous collectons, utilisons et protégeons vos informations.
                        </p>
                        <h3>
                            1. Collecte d'informations :
                        </h3>
                        <p>
                            PrayerGeneratorEveryDay peut collecter des informations personnelles identifiables, telles que votre nom, votre adresse e-mail, votre numéro de téléphone, etc., lorsque vous utilisez notre site web ou nos services. Nous collectons ces informations de manière équitable et légale, avec votre consentement.
                        </p>
                        <h3>
                            2. Utilisation des informations :
                        </h3>
                        <p>
                            Les informations que nous collectons peuvent être utilisées pour personnaliser votre expérience, traiter vos transactions, améliorer notre site web, et bien plus encore. Nous ne partagerons pas vos informations avec des tiers sans votre consentement, sauf si requis par la loi.
                        </p>
                        <h3>
                            3. Protection des informations :
                        </h3>
                        <p>
                            Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, altération, divulgation ou destruction.
                        </p>
                        <h3>
                            4. Cookies :
                        </h3>
                        <p>
                            Notre site web utilise des cookies pour améliorer votre expérience. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou vous avertir lorsqu'un cookie est envoyé.
                        </p>
                        <h3>
                            5. Liens vers des sites tiers :
                        </h3>
                        <p>
                            Notre site web peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites et vous encourageons à consulter leurs politiques de confidentialité.
                        </p>
                        <h3>
                            6. Modifications de la politique de confidentialité :
                        </h3>
                        <p>
                            Nous nous réservons le droit de mettre à jour notre politique de confidentialité à tout moment. Les modifications seront publiées sur cette page.
                        </p>
                        <p>
                            En utilisant notre site web, vous consentez à notre politique de confidentialité.
                        </p>
                        <p>
                            Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, veuillez nous contacter à contact@PrayerGeneratorEveryDay.com
                        </p>
                        <p>
                            Dernière mise à jour : 28/01/2024.

                        </p>
                    </section>

                </div>
            </main >
            <Footer />
        </>
    )
}