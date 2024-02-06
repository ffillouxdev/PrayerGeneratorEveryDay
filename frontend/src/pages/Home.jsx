import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Content from '../components/Content';
import TextBox from '../components/TextBox';
import AudioContent from '../components/AudioContent';

import '../styles/home.scss';
import React, { useEffect } from 'react';
import { gsap, Power3 } from 'gsap';


import jesusGifUrl from '../assets/jesus.gif';
import crossImgUrl from '../assets/cross1.webp';
import bibleImgUrl from '../assets/holyBible.webp';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
    useEffect(() => {
        gsap.utils.toArray('.second-section h2').forEach((section, index) => {
            gsap.fromTo(
                section,
                {
                    opacity: 0,
                    x: -100,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: Power3.easeOut,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: 1,
                    },
                }
            );
        });
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <Content />
                <div className="second-section">
                    <div className="container1">
                        <div className="div1">
                            <h2>Vous êtes tous des merveilles de Dieu</h2>
                            <p>Notre mission est de vous guider dans votre cheminement spirituel, de vous apporter
                                des prières et des enseignements inspirants, et de vous rappeler que vous êtes une création divine.
                                Chaque pas que vous faites sur ce chemin est une bénédiction, une preuve que la grâce de Dieu brille en vous.
                            </p>
                        </div>
                        <div className="div2">
                            <img src={jesusGifUrl} id="jesus-gif" alt="jesus walking with sheeps" />
                        </div>
                    </div>
                    <div className="text-box_container">
                        <TextBox
                            imageUrl={crossImgUrl}
                            linkUrl="/Nos-chants"
                            altText="christian cross"
                            title="Nos chants"
                            description="Découvrez l'histoire de nos chants."
                            target={'_self'}
                        />
                        <TextBox
                            imageUrl={bibleImgUrl}
                            linkUrl="http://www.bible-en-ligne.net/"
                            altText="holy bible"
                            title="BIBLE"
                            description="Accédez à la bible en ligne."
                            target={'_blank'}
                        />
                    </div>
                </div>
                <div id="nos_chants" className="third-section">
                    <AudioContent />
                </div>
            </main>
            <Footer />
        </>
    );
}

