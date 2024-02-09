import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/profile.scss";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import imgBG from "../../assets/bgProfilePage.jpg";

export default function ResetPasswordValidate() {
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
                <div className="profile-section-password">
                    <div className="profile_valider-password">
                        <p className="center">Un email vous a été envoyé pour changer votre mot de passe !</p>
                        <Link to="/Profile">Profile</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}