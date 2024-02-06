import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/Nos_chants.scss";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import imgAudioUrlBg from '../assets/bgNosChants.jpg';

export default function Nos_chants() {
    const apiBaseUrl = 'http://localhost:8000';
    const [chants, setChants] = useState([]);
    const { chantName } = useParams();
    const [chantDetails, setChantDetails] = useState(null);

    useEffect(() => {
        axios.get(`${apiBaseUrl}/audio/`)
            .then(res => {
                setChants(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    useEffect(() => {
        if (chantName) {
            const matchedChant = chants.find(chant => chant.audioName === decodeURIComponent(chantName));
            if (matchedChant) {
                setChantDetails(matchedChant);
                console.log(matchedChant);
            }
        }
    }, [chants, chantName]);

    return (
        <>
            <Navbar />
            <main className="Nos_chants" style={{
                background: `url(${imgAudioUrlBg}) no-repeat center center fixed`,
            }}>
                <div className="first-section-chant">
                    <h1 className="first-section-chant-title center">On te raconte l'histoire de ces musiques en 1 clic 😊</h1>
                    <section>
                        <ul className="first_section-chants-ul">
                            {chants.map((chant, index) => {
                                return (
                                    <li key={index} className="Li_audioname"
                                        style={{
                                            background: `url(${apiBaseUrl}${chant.imgAudioUrl}) no-repeat center center`,
                                            backgroundSize: 'cover',
                                        }}
                                    >
                                        <Link to={`/Nos-chants/${encodeURIComponent(chant.audioName)}`}>
                                            {chant.audioName}
                                        </Link>
                                        <section id="extraText">
                                            <p>+ d'infos</p>
                                            <hr />
                                        </section>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
