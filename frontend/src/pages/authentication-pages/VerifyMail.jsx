import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../../styles/profile.scss";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import imgBG from "../../assets/bgProfilePage.jpg";
import sendIcon from '../../assets/send-button.webp';


export default function VerifyMail() {
    const location = useLocation();
    const message = location.state && location.state.message;
    const [otpValue, setOptValue] = useState("");
    const navigate = useNavigate();

    const verifyMail = () => {
        let url = "http://localhost:8000/api/auth/verify-email/"; // url de l'api

        axios.post(url, {
            otp: otpValue,
        })
            .then((res) => {
                console.log(res.data);
                toast.success("Votre email a bien été verifié !");
                navigate("/Profile/Verify-Mail");
            })
            .catch((err) => {
                console.log(err.response);
                toast.error("Une erreur est survenue !");
            });
    }

    return (
        <>
            <Navbar />
            <main className="profile-page"
                style={{
                    background: `url(${imgBG}) no-repeat fixed center/cover`,
                }}>
                <div className="verif-email">
                    <h1 className="H& center">Vérification de votre adresse mail !</h1>
                    {message ? (
                        <p className="center">{message}</p>
                    ) : (
                        <p className="center">Un email de vérification vous a été envoyé. Merci de cliquer sur le lien contenu dans ce mail pour valider votre compte.</p>
                    )}
                    <form className="code-send">
                        <input type="text" placeholder="Code reçu par email" className="OPT-input-verifier" maxLength={6} value={otpValue} onChange={(e) => setOptValue(e.target.value)} />
                        <button onClick={verifyMail}><img src={sendIcon} alt="sendIcon" id="send_Icon" /></button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}
