import React, { useEffect } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "../styles/Terms.scss";

import background from '../assets/privacy-policy.jpg';


export default function Terms() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <main className="Terms"
                style={{
                    background: `url(${background}) no-repeat fixed center/cover`,
                }}>
                <div className="Terms__container">
                    <h2>Termes et conditions</h2>
                    <ol>
                        <li>
                            <strong>Acceptation des Conditions</strong>
                            <p>En accédant à et en utilisant le service "PrayerGeneratorEverDay" (ci-après dénommé le "Service"), vous acceptez d'être lié par les présentes Conditions d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Service.</p>
                        </li>

                        <li>
                            <strong>Modifications des Conditions</strong>
                            <p>Nous nous réservons le droit de modifier ces Conditions d'Utilisation à tout moment. Les modifications seront effectives dès leur publication sur le site. Il vous incombe de consulter régulièrement les Conditions d'Utilisation pour rester informé des éventuelles modifications.</p>
                        </li>

                        <li>
                            <strong>Utilisation du Service</strong>
                            <p>Vous acceptez de n'utiliser le Service que conformément à toutes les lois et réglementations applicables. Vous vous engagez à ne pas utiliser le Service à des fins illégales ou interdites.</p>
                        </li>

                        <li>
                            <strong>Intention de prière</strong>
                            <p>Vous n'avez en aucun droit d'insulter, de diffamer, de harceler, de menacer dans la section "Intention de prière", car nous pouvons vous blacklister et vous ne pourrez plus utiliser le service.</p>
                        </li>

                        <li>
                            <strong>Confidentialité</strong>
                            <p>Nous respectons votre vie privée. Veuillez consulter notre Politique de Confidentialité pour comprendre comment nous recueillons, utilisons et protégeons vos informations personnelles.</p>
                        </li>
                    </ol>
                </div>
            </main>
            <Footer />
        </>
    );

}