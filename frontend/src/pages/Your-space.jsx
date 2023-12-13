// Importing the components
import Head from '../components/head'; // Path: frontend/src/components/head.js 
import Navbar from '../components/navbar'; // Path: frontend/src/components/navbar.js
import Footer from '../components/footer'; // Path: frontend/src/components/footer.js

import '../styles/Your-space.scss'; // Path: frontend/src/styles/Your-space.scss
import React from 'react';

import Intention_section from '../components/Intention_section'; // Path: frontend/src/components/Intention_section.jsx

// faire une maps des intentions de prières et les afficher dans la partie communauté


export default function Your_space() {
    return (
        <>
            <Head />
            <Navbar />
            <main>
                <div className="yourSpace">
                    <h1 className='h1 center'>Ici vous pourrez laisser des intentions de prières</h1>
                    <Intention_section />
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