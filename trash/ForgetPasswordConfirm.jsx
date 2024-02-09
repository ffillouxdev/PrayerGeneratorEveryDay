import { Link } from "react-router-dom";
import React from "react";

// import "../../styles/ForgetPassword.scss";

import Navbar from "../frontend/src/components/navbar";
import Footer from "../frontend/src/components/footer";

import imgBG from "../../assets/bgProfilePage.jpg";

export default function ForgetPasswordConfirm() {
    return (
        <>
            <Navbar />
            <main className="ForgetPassword"
                style={{
                    background: `url(${imgBG}) no-repeat fixed center/cover`,
                }}>
                <div className="ForgetPassword__container">
                    <h2 className="ForgetPassword__title">Password Change !</h2>
                    <Link className="links" to={'/Profile/'}>Retourner se connecter</Link>
                </div>
            </main>
            <Footer />
        </>
    );
}