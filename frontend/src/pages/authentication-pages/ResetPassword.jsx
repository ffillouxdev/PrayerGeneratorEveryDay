import React, { useState } from "react";


import "../../styles/ForgetPassword.scss";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import imgBG from "../../assets/bgProfilePage.jpg";

export default function ResetPassword() {
    const [formData, setFormData] = useState({ email: "" });

    const handleChange = (e) => {
        setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
        console.log(formData);
    };

    const { email } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Navbar />
            <main className="ForgetPassword"
                style={{
                    background: `url(${imgBG}) no-repeat fixed center/cover`,
                }}>
                <div className="ForgetPassword__container">
                    <h2 className="ForgetPassword__title">Reset Password</h2>
                    <form className="ForgetPassword__form" onSubmit={handleSubmit}>
                        <input className="ForgetPassword__input" type="email" id="email" name="email" placeholder="Enter your email" value={email} onChange={handleChange} />
                        <button className="ForgetPassword__button" type="submit">Envoyer</button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}