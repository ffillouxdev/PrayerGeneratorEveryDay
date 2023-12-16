// Dans le fichier frontend/src/components/index.js
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import TextBox from '../components/TextBox';

import '../styles/home.scss';
import React from 'react';

import jesusGifUrl from '../assets/jesus.gif';
import crossImgUrl from '../assets/cross1.png';
import bibleImgUrl from '../assets/holyBible.png';
import leftButton from '../assets/left.png';
import pauseButton from '../assets/pause.png';
import rightButton from '../assets/right.png';
import defaultMusicIcon from '../assets/jesus.png';


export default function Home({ nom_chant, image_chant }) {
    return (
        <>
            <Head />
            <Navbar />
            <main>
                <div id="prayers" className="first-section">
                    <h1>Recevez votre <br /> prière quotidienne 🙏</h1>
                    <div className="central-container">
                        <div className="prayerGenerator">
                            <Content />
                        </div>
                    </div>
                </div>
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
                            linkUrl="https://www.chantonseneglise.fr/artiste/950/communaute-de-l-emmanuel"
                            altText="christian cross"
                            title="Nos chants"
                            description="Sample text. Click to select the text box."
                        />
                        <TextBox
                            imageUrl={bibleImgUrl}
                            linkUrl="http://www.bible-en-ligne.net/"
                            altText="holy bible"
                            title="BIBLE"
                            description="Sample text. Click to select the text box."
                        />
                    </div>
                </div>
                <div className="third-section"></div>
                <div id="nos_chants" className="fourth-section">
                    {nom_chant == null ? (
                        <div>
                            <img src={defaultMusicIcon} id="defaultMusicIco" alt="music icon par def" />
                            <p>Chant non disponible...</p>
                        </div>
                    ) : (
                        <div>
                            <p>{nom_chant}</p>
                            <img src={image_chant} alt={nom_chant} />
                        </div>
                    )}
                    <div className="music-div">
                        <button id="left"><img src={leftButton} alt="LEFTbutton" /></button>
                        <button id="pause"><img src={pauseButton} alt="PAUSEbutton" /></button>
                        <button id="right"><img src={rightButton} alt="RIGHTbutton" /></button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );

}

