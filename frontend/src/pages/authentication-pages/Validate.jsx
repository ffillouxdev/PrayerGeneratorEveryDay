import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/profile.scss";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import imgBG from "../../assets/bgProfilePage.jpg";

export default function Validate() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <main
                className="profile-page"
                style={{
                    background: `url(${imgBG}) no-repeat fixed center/cover`,
                }}
            >
                <div className="profile-section">
                    <div className="profile_valider">
                        <p className="center">Un email vous a été envoyé pour activer votre compte !</p>
                        <Link to="/Profile">Profile</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}