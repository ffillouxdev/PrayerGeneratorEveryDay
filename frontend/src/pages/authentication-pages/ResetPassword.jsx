import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../features/auth/authSlice";

import "../../styles/ForgetPassword.scss";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import imgBG from "../../assets/bgProfilePage.jpg";

export default function ResetPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isError, isSuccess } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: email,
        };
        dispatch(resetPassword(userData));
        setIsSubmitted(true);
    };

    useEffect(() => {
        if (isError && isSubmitted) {
            setError("Email non valide");
        }

        if (isSuccess) {
            setError("");
            navigate("/reset-password/validate");
        }
    }, [isError, isSubmitted, isSuccess]);

    const terminaisons = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@outlook.com", "@yahoo.fr", "@hotmail.fr", "@outlook.fr", "@etu.univ-lyon1.fr"];
    const isValidEmail = terminaisons.some((terminaison) => email.trim().endsWith(terminaison));

    return (
        <>
            <Navbar />
            <main
                className="ForgetPassword"
                style={{
                    background: `url(${imgBG}) no-repeat fixed center/cover`,
                }}
            >
                <div className="ForgetPassword__container">
                    <h2 className="ForgetPassword__title">Reset Password</h2>
                    {isSubmitted && isError && (
                        <p className="ForgetPassword__error" style={{ color: "red", fontSize: "1.2rem", fontWeight: "bold", textAlign: "center", marginTop: "1rem" }}>
                            {error}
                        </p>
                    )}
                    <form className="ForgetPassword__form" onSubmit={handleSubmit}>
                        <input
                            className="ForgetPassword__input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleChange}
                        />
                        <button className="ForgetPassword__button" type="submit" disabled={!isValidEmail}>
                            Envoyer
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}
