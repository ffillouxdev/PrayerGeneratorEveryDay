import React, { useState, useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import InfosStrip from "../components/InfoStrip";

import "../styles/contact.scss";

gsap.registerPlugin(ScrollTrigger, Power3);

export default function Contact() {
    const splitRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);
    useEffect(() => {
        const checkAuthentication = async () => {
            const user = localStorage.getItem("user");
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        };

        checkAuthentication();
    }, []);

    useEffect(() => {
        const slideBottomToTop = (elem, delay, duration) => {
            gsap.fromTo(
                elem,
                {
                    opacity: 0,
                    y: 100,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: duration,
                    delay: delay,
                    ease: Power3.easeOut,
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 80%",
                    },
                }
            );
        };

        const slideTopToBottom = (elem, delay, duration) => {
            gsap.fromTo(
                elem,
                {
                    opacity: 0,
                    y: -100,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: duration,
                    delay: delay,
                    ease: Power3.easeOut,
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 80%",
                    },
                }
            );
        };

        const handleScrollAnimations = () => {
            const sections = document.querySelectorAll(
                ".contact-section h2, .contact-section p, .infos-form, .form-contact, .contact-section h1, .contact-section p"
            );

            sections.forEach((section, index) => {
                const triggerElem = index === 0 ? section : section.parentElement;
                const start = index === 0 ? "top 80%" : "top 50%";

                ScrollTrigger.create({
                    trigger: triggerElem,
                    start: start,
                    onEnter: () => {
                        if (index === 0) {
                            slideBottomToTop(section, 0.5, 1);
                        } else if (index === 1) {
                            slideBottomToTop(section, 0.7, 1);
                        } else if (index === 2) {
                            slideTopToBottom(section, 0.7, 1);
                        } else if (index === 3) {
                            slideBottomToTop(section, 0.7, 1);
                        }
                    },
                });
            });

            if (formSubmitted && !isLoggedIn) {
                gsap.to(
                    splitRef.current, {
                    display: "block",
                    opacity: 1,
                    duration: 0.3,
                    onComplete: () => {
                        setFormSubmitted(false);
                    },
                });
            }
        };

        handleScrollAnimations();
    }, [formSubmitted, isLoggedIn]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (isLoggedIn) {
            try {
                alert("Email sent successfully!");
            } catch (error) {
                console.error("Error sending email:", error);
            }
        } else {
            gsap.to(splitRef.current, { display: "block", opacity: 1, duration: 0.3 });
            setFormSubmitted(true);
        }
    };

    const closePopup = () => {
        gsap.to(splitRef.current, { display: "none", opacity: 0, duration: 0.3 });
    };

    return (
        <>
            <Navbar />
            <main>
                <div className="contact-section">
                    <h2>Besoin d’aide ?</h2>
                    <p>Vous rencontrez un problème, vous pouvez nous contacter avec les informations ci-dessous.</p>
                </div>
                <InfosStrip />
                <div className="contact-form-section">
                    <div className="infos-form">
                        <h2 className="h2 center">Envoyez-nous un message !</h2>
                        <p>
                            Vous avez rencontré un problème, vous avez besoin d’aide, une idée à nous proposer ou juste un avis sur notre site ? Vous pouvez nous envoyer un message en remplissant le
                            formulaire ci-dessous.
                        </p>
                    </div>
                    <form className="form-contact" onSubmit={handleFormSubmit}>
                        <div className="top-form">
                            <label htmlFor="name">Nom</label>
                            <input type="text" name="name" id="name" className="form-input" required />

                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" className="form-input" required />
                        </div>
                        <div className="bottom-form">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="textMessage" className="form-textarea" required></textarea>
                            <button type="submit" className="form-button">
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
                <div ref={splitRef} className="popup">
                    <p>Vous devez être connecté pour envoyer un email.</p>
                    <button onClick={closePopup}>Fermer</button>
                </div>
            </main>
            <Footer />
        </>
    );
}
