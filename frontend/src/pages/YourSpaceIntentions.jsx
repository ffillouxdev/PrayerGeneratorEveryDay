import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "../styles/Your-space.scss";
import imgYourSpaceBg from '../assets/church1.jpg';

export default function YourSpaceIntentions() {
    const { title_sect, spaceName } = useParams();
    const [rubriqueData, setRubriqueData] = useState([]);
    const apiBaseUrl = 'http://127.0.0.1:8000';
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        axios.get(`${apiBaseUrl}/intention/`)
            .then(res => {
                setRubriqueData(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const user = localStorage.getItem("user");

    if (!user) {
        navigate('/Your-space');
        return null;
    }

    const intention = rubriqueData.find(item => item.type_of_people === title_sect && item.intention_title === spaceName);

    return (
        <>
            <Navbar />
            <main>
                <div className="yourSpaceIntentions" style={{
                    background: `url(${imgYourSpaceBg}) no-repeat center center fixed`,
                    backgroundSize: 'cover',
                }}>
                    <div className="intention-section">
                        <h1 className="center">{title_sect}</h1>
                        <p>Titre : {spaceName}</p>
                        <p id="contenu-intention">Intention : {intention ? intention.intention_text : "Intention not found"}</p>
                        <p id="pray">Priez pour cette personne 🙏</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
