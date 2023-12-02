// Dans le fichier frontend/src/components/index.js
import Head from '../components/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Content from '../components/Content';

import '../styles/home.scss';
import React from 'react';

import jesusGifUrl from '../assets/jesus.gif';
import crossImgUrl from '../assets/cross1.png';
import bibleImgUrl from '../assets/holyBible.png';
import leftButton from '../assets/left.png';
import pauseButton from '../assets/pause.png';
import rightButton from '../assets/right.png';


export default function Home() {
    return (
        <>
            <Head />
            <Navbar />
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
                    <div className="text box1">
                        <img src={crossImgUrl} alt="christian cross" />
                        <a href="#nos_chants"><h3>Nos chants</h3></a>
                        <p>Sample text. Click to select the text box.</p>
                    </div>
                    <div className="text box2">
                        <img src={bibleImgUrl} alt="holy bible" />
                        <a href="#prayers"><h3>BIBLE</h3></a>
                        <p>Sample text. Click to select the text box.</p>
                    </div>
                </div>
            </div>
            <div className="third-section"></div>
            <div id="nos_chants" className="fourth-section">
                <p></p>
                <div className="music-div">
                    <button id="left"><img src={leftButton} alt="LEFTbutton" /></button>
                    <button id="pause"><img src={pauseButton} alt="PAUSEbutton" /></button>
                    <button id="right"><img src={rightButton} alt="RIGHTbutton" /></button>
                </div>
            </div>
            <Footer />
        </>
    )
}

