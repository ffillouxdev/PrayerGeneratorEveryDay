// Importing the components
import Head from '../components/Head'; // Path: frontend/src/components/head.js 
import Navbar from '../components/Navbar'; // Path: frontend/src/components/navbar.js
import Footer from '../components/Footer'; // Path: frontend/src/components/footer.js
import IntentionSection from '../components/Intention_section'; // Path: frontend/src/components/Intention_section.jsx

import '../styles/Your-space.scss'; // Path: frontend/src/styles/Your-space.scss
import React from 'react';


// Va permettre d'envoyer les données des intentions de prières dans la base de données DJANGO
export default function Your_space() {
    return (
        <>
            <Head />
            <Navbar />
            <main>
                <div className="yourSpace">
                    <h1 className='h1 center'>Ici vous pourrez laisser des intentions de prières</h1>
                    <IntentionSection />
                </div>
                <div className="community-section" id="Community">
                    <h2 className='H2 center'>Notre communauté</h2>
                    <p className='P center'>Nous sommes une communauté de prière, nous prions pour vous et vos intentions.</p>
                    <p className='sfs center bold'>FAIRE UN ESPACE DISCUSSION</p>
                </div>
            </main>
            <Footer />
        </>
    )
}