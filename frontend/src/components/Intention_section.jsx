import React, { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function IntentionSection() {
    const [cookies] = useCookies(["access_token"]);
    const handleIntentionSubmit = async (typeOfpeople, intentionText, intentionTitle) => {
        try {
            console.log("Intention title : ", intentionTitle, "Intention text:", intentionText, "Type of people:", typeOfpeople);

            const accessToken = cookies.access_token;
            if (!accessToken) {
                return;
            }

            const response = await axios.post('http://localhost:8000/intention/', {
                intention_title: intentionTitle,
                intention_text: intentionText,
                type_of_people: typeOfpeople,
            });

            window.location.reload();
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'intention de prière : ", error);

            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Error during request setup:", error.message);
            }
        }
    };

    return (
        <div className="My_Personnal_prayer_intention" id="intensionPart">
            <IntentionSectionBox title_sect="Pour les votres" content="Vous pouvez laisser vos intentions de prières ici, elles seront lues par les membres de la communauté et nous prierons pour vous." onSubmit={(text, title) => handleIntentionSubmit("Pour les votres", text, title)} />
            <IntentionSectionBox title_sect="Pour votre famille" content="Vous pouvez laisser les intentions de prières pour votre famille ici, elles seront lues par les membres de la communauté et nous prierons pour vous." onSubmit={(text, title) => handleIntentionSubmit("Pour votre famille", text, title)} />
            <IntentionSectionBox title_sect="Pour vos amis" content="Vous pouvez laisser les intentions de prières pour vos amis ici, elles seront lues par les membres de la communauté et nous prierons pour vous." onSubmit={(text, title) => handleIntentionSubmit("Pour vos amis", text, title)} />
            <IntentionSectionBox title_sect="Pour vos ennemis" content="Vous pouvez laisser les intentions de prières pour vos ennemis ici, elles seront lues par les membres de la communauté et nous prierons pour vous." onSubmit={(text, title) => handleIntentionSubmit("Pour vos ennemis", text, title)} />
        </div>
    );
}

const IntentionSectionBox = ({ title_sect, content, onSubmit }) => {
    const [boxIntentionText, setBoxIntentionText] = useState('');
    const [intentionTitle, setIntentionTitle] = useState('');
    return (
        <div className="intention_section">
            <div className="intention_section_container">
                <h2 className="h2intention center">{title_sect}</h2>
                <p className="Pintention center">{content}</p>
                {/* Utilisation de l'état local pour suivre le texte de l'intention */}
                <input className="inputTitle" type="text" placeholder="Titre" maxLength={50} value={intentionTitle} onChange={(e) => setIntentionTitle(e.target.value)} />
                <textarea
                    name="texta"
                    id="intention_textarea"
                    cols="30"
                    rows="10"
                    placeholder="Votre intention"
                    value={boxIntentionText}
                    onChange={(e) => setBoxIntentionText(e.target.value)}
                ></textarea>
                {/*console.log("Intention text:", boxIntentionText)*/}
                <button className="intention_button" onClick={() => { onSubmit(boxIntentionText, intentionTitle); setBoxIntentionText(''); setIntentionTitle(''); }}>
                    Envoyer
                </button>
            </div>
        </div>
    );
};
