import React, { useState, useEffect } from "react";

import leftButton from '../assets/left.webp';
import rightButton from '../assets/right.webp';
import defaultMusicIcon from '../assets/jesus.webp';

import sendIcon from '../assets/send-button.webp';

import axios from 'axios';

export default function AudioContent() {
    const [imgAudioUrl, setImgAudioUrl] = useState(null);
    const [nom_chant, setNom_chant] = useState(null);
    const [audioURL, setAudioURL] = useState(null);
    const [compteur, setCompteur] = useState(0);
    const [nb_elements, setNb_elements] = useState(0);
    const [searchValue, setSearchValue] = useState('');
    const [chants, setChants] = useState([]);
    const [showOptions, setShowOptions] = useState(false);


    const apiBaseUrl = 'http://127.0.0.1:8000';

    useEffect(() => {
        axios.get(`${apiBaseUrl}/audio/`)
            .then(res => {
                setNb_elements(res.data.length);
                if (res.data.length > compteur) {
                    setImgAudioUrl(res.data[compteur].imgAudioUrl);
                    setNom_chant(res.data[compteur].audioName);
                    setAudioURL(res.data[compteur].audioUrl);
                }
            })
            .catch(err => {
                console.error(err);
            });

    }, [compteur]);

    const handleLeftClick = () => {
        setCompteur(prevCompteur => {
            const nouveauCompteur = prevCompteur - 1;
            return nouveauCompteur < 0 ? nb_elements - 1 : nouveauCompteur;
        });
    };

    const handleRightClick = () => {
        setCompteur(prevCompteur => {
            const nouveauCompteur = prevCompteur + 1;
            return nouveauCompteur >= nb_elements ? 0 : nouveauCompteur;
        });
    };


    useEffect(() => {
        axios.get('http://localhost:8000/audio/')
            .then(response => {
                setChants(response.data);
            })
            .catch(error => {
                console.error('Error fetching chants:', error);
            });
    }, []);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        setShowOptions(true);
    };

    const handleOptionClick = (audioName) => {
        setSearchValue(audioName);
        setSearchValue('');
        setShowOptions(false);
    };

    const changeMusic = (audioName) => {
        const matchedChant = chants.find(chant => chant.audioName === audioName);
        if (matchedChant) {
            setNom_chant(matchedChant.audioName);
            setImgAudioUrl(matchedChant.imgAudioUrl);
            setAudioURL(matchedChant.audioUrl);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        changeMusic(searchValue);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="searchForm">
                <input
                    type="text"
                    placeholder="Rechercher un chant !"
                    className="searchChant"
                    name='q'
                    value={searchValue}
                    onChange={handleInputChange}
                    list="optionsContainer"
                    onFocus={() => setShowOptions(true)}
                    onBlur={() => setShowOptions(false)}
                    onKeyDown={handleKeyDown}
                />
                {showOptions && (
                    <datalist id="optionsContainer">
                        {chants.map((chant, index) => (
                            <option key={index} value={chant.audioName} />
                        ))}
                    </datalist>
                )}
                <button type="submit"><img src={sendIcon} alt="icon d'envoi" id="send_Icon" /></button>
            </form>
            {nom_chant == null ? (
                <div className="img-audio-div">
                    <img src={defaultMusicIcon} id="defaultMusicIco" alt="music icon par def" />
                    <p>Chant non disponible...</p>
                </div>
            ) : (
                <div className="img-audio-div">
                    <p>{nom_chant}</p>
                    <img src={`${apiBaseUrl}${imgAudioUrl}`} id="MusicIcon" alt="image du chant" />
                    <div className="music-div">
                        <button id="left" onClick={handleLeftClick}><img src={leftButton} alt="LEFTbutton" /></button>
                        <figure>
                            <audio controls src={`${apiBaseUrl}${audioURL}`} id="audioPlayer" />
                        </figure>
                        <button id="right" onClick={handleRightClick}><img src={rightButton} alt="RIGHTbutton" /></button>
                    </div>
                </div>
            )}
        </>
    );
}

