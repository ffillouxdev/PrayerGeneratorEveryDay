// Importing the components
import Head from '../components/Head'; // Path: frontend/src/components/head.js 
import Navbar from '../components/Navbar'; // Path: frontend/src/components/navbar.js
import Footer from '../components/Footer'; // Path: frontend/src/components/footer.js

import React from 'react';
import '../styles/PrivacyPolicy.scss';

export default function PrivacyPolicy() {
    return (
        <>
            <Head />
            <Navbar />
            <main>
                <div className="privacy-policy">
                    <h1 className='h1 center'>Politique de confidentialité</h1>
                    <hr />
                    <p>
                        Bienvenue sur notre politique de confidentialité. Chez [Nom de votre entreprise], nous accordons une grande importance à la protection de vos données personnelles. Cette politique vise à vous informer sur la manière dont nous collectons, utilisons et protégeons vos informations.

                        1. **Collecte d'informations :**

                        [Nom de votre entreprise] peut collecter des informations personnelles identifiables, telles que votre nom, votre adresse e-mail, votre numéro de téléphone, etc., lorsque vous utilisez notre site web ou nos services. Nous collectons ces informations de manière équitable et légale, avec votre consentement.

                        2. **Utilisation des informations :**

                        Les informations que nous collectons peuvent être utilisées pour personnaliser votre expérience, traiter vos transactions, améliorer notre site web, et bien plus encore. Nous ne partagerons pas vos informations avec des tiers sans votre consentement, sauf si requis par la loi.

                        3. **Protection des informations :**

                        Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, altération, divulgation ou destruction.

                        4. **Cookies :**

                        Notre site web utilise des cookies pour améliorer votre expérience. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou vous avertir lorsqu'un cookie est envoyé.

                        5. **Liens vers des sites tiers :**

                        Notre site web peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites et vous encourageons à consulter leurs politiques de confidentialité.

                        6. **Modifications de la politique de confidentialité :**

                        Nous nous réservons le droit de mettre à jour notre politique de confidentialité à tout moment. Les modifications seront publiées sur cette page.

                        En utilisant notre site web, vous consentez à notre politique de confidentialité.

                        Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, veuillez nous contacter à [votre adresse e-mail].

                        Dernière mise à jour : [Date de la dernière mise à jour]

                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}