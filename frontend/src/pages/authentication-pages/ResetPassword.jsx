import React from "react";


import "../../styles/ForgetPassword.scss";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import imgBG from "../../assets/bgProfilePage.jpg";

export default function ResetPassword() {
    return (
        <>
            <Navbar />
            <main className="ForgetPassword"
                style={{
                    background: `url(${imgBG}) no-repeat fixed center/cover`,
                }}>
                <div className="ForgetPassword__container">
                    <h2 className="ForgetPassword__title">Reset Password</h2>
                    <form className="ForgetPassword__form">
                        <input className="ForgetPassword__input" type="password" id="password" name="password" placeholder="Enter your new password" />
                        <input className="ForgetPassword__input" type="password" id="password" name="password" placeholder="Confirm your new password" />
                        <button className="ForgetPassword__button" type="submit">Send</button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}