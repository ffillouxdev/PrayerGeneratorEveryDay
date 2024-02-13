import Navbar from "../components/navbar";
import Footer from '../components/footer'; // Path: frontend/src/components/footer.jsx
import IntentionSection from '../components/Intention_section'; // Path: frontend/src/components/Intention_section.jsx
import CommunityRubrique from '../components/communityRubrique';
import PopupToLogin from '../components/PopupToLogin';

import '../styles/Your-space.scss'; // Path: frontend/src/styles/Your-space.scss
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { Timeline } from 'gsap/gsap-core';
import { SplitText } from 'gsap-trial/SplitText';
import { gsap } from 'gsap';

import imgYourSpaceBg from '../assets/church1.jpg';

gsap.registerPlugin(SplitText);
gsap.config({ trialWarn: false });

// Va permettre d'envoyer les données des intentions de prières dans la base de données DJANGO
export default function Your_space() {
    const splitRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthentication = async () => {
            const user = localStorage.getItem('user');
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        };

        checkAuthentication();

        const hash = location.hash;

        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    useEffect(() => {
        if (splitRef.current) {
            const splitText = new SplitText(splitRef.current, {
                type: 'chars, words',
            });

            const chars = splitText.chars;

            const tl = new Timeline({
                onComplete: () => {
                    splitText.revert();
                },
            });

            tl.from(
                chars,
                {
                    duration: 1,
                    y: 10,
                    opacity: 0,
                    stagger: 0.02,
                    ease: 'circ.out',
                },
                0.1
            );

            return () => {
                tl.kill();
                splitText.revert();
            };
        }
    }, [splitRef.current]);

    return (
        <>
            <Navbar />
            <main className={`${!isLoggedIn ? 'blurte' : ''}`}>
                <div className="yourSpace" style={{
                    background: `url(${imgYourSpaceBg}) no-repeat center center fixed`,
                    backgroundSize: 'cover',
                }}>
                    <h1 ref={splitRef} className='h1_ center split'>Ici vous pourrez laisser des intentions de prières</h1>
                    <IntentionSection />
                </div>
                <div className="community-section" id="Community">
                    <h2 className='H2 center'>Notre communauté</h2>
                    <p className='P center'>Nous sommes une communauté de prière, nous prions pour vous et vos intentions.</p>
                    <div className="flex-community-rubrique">
                        <CommunityRubrique title_sect="Pour les votres" id="1" />
                        <CommunityRubrique title_sect="Pour votre famille" id="2" />
                        <CommunityRubrique title_sect="Pour vos amis" id="3" />
                        <CommunityRubrique title_sect="Pour vos ennemis" id="4" />
                    </div>
                </div>
            </main>
            {!isLoggedIn && <PopupToLogin />}
            <Footer />
        </>
    )
}