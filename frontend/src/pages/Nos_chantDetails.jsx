import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../styles/Nos_chants.scss";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import imgAudioUrlBg from '../assets/bgNosChants.jpg';
import imgDownloadIcon from '../assets/downloadIcon.svg';

export default function Nos_chantDetails() {
    const { chantName } = useParams();
    const [chantDetails, setChantDetails] = useState(null);
    const [compteur, setCompteur] = useState(0);
    const [authorName, setAuthorName] = useState('');
    const [nb_elements, setNb_elements] = useState(0);

    const apiBaseUrl = 'http://127.0.0.1:8000';

    useEffect(() => {
        axios.get(`${apiBaseUrl}/audio/`)
            .then(res => {
                setNb_elements(res.data.length);
                if (res.data.length > compteur) {
                    const matchedChant = res.data.find(chant => chant.audioName === decodeURIComponent(chantName));

                    if (matchedChant) {
                        setChantDetails(matchedChant);
                        setAuthorName(matchedChant.author);
                        console.log(matchedChant);
                    }
                }
            })
            .catch(err => {
                console.error(err);
            });
    }, [compteur, chantName]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!chantDetails) {
        return (
            <>
                <Navbar />
                <main className="Nos_chants_details">
                    <h1 className="center">Chargement...</h1>
                </main>
                <Footer />
            </>
        );
    }

    const { imgAudioUrl, audioName, historyOfAudio, author } = chantDetails;
    return (
        <>
            <Navbar />
            <main className="Nos_chants_details"
                style={{
                    background: `url(${imgAudioUrlBg}) no-repeat center center fixed`,
                }}>
                <h1 className="center">{decodeURIComponent(audioName)}</h1>
                <div className="Nous_chants_details-container">
                    <div className="Nous_chants_details-left-container">
                        <p className="HistoryOfAudio">{historyOfAudio}</p>
                        <p className="author-audio">auteur : <strong>{authorName}</strong></p>
                        <div className="Nous_chants_details-downloads">
                            <p>télécharger la music (mp3) :</p>
                            <button><img src={imgDownloadIcon} alt="download-icon" /></button>
                        </div>

                    </div>
                    <img className="Nous_chants_details-right-container" src={`${apiBaseUrl}${imgAudioUrl}`} alt="image du chant" />
                </div>
            </main>
            <Footer />
        </>
    );
};
