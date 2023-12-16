import React, { useState } from "react";
import axios from "axios";

export default function IntentionSection() {    
    const handleIntentionSubmit = async (typeOfpeople, intentionText) => {
        try {
            console.log("Intention text:", intentionText);
            // REQUETE POST vers l'API DJANGO
            const response = await axios.post('http://localhost:8000/intention/', {
                intention_text: intentionText,
                type_of_people: typeOfpeople,
            });

            console.log(response.data);

            // On vide le champ de texte
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
            <IntentionSectionBox title_sect="Pour les votres" content="Vous pouvez laisser vos intentions de prières ici, elles seront lues par les membres de la communauté et nous prierons pour vous." onSubmit={(text) => handleIntentionSubmit("Pour les votres", text)} />
            <IntentionSectionBox title_sect="Pour votre famille" content="Vous pouvez laisser les intentions de prières pour votre famille ici, elles seront lues par les membres de la communauté et nous prierons pour vous." onSubmit={(text) => handleIntentionSubmit("Pour votre famille", text)} />
            <IntentionSectionBox title_sect="Pour vos amis" content="Vous pouvez laisser les intentions de prières pour vos amis ici, elles seront lues par les membres de la communauté et nous prierons pour vous." onSubmit={(text) => handleIntentionSubmit("Pour vos amis", text)} />
            <IntentionSectionBox title_sect="Pour vos ennemis" content="Vous pouvez laisser les intentions de prières pour vos ennemis ici, elles seront lues par les membres de la communauté et nous prierons pour vous." onSubmit={(text) => handleIntentionSubmit("Pour vos ennemis", text)} />
        </div>
    );
}

const IntentionSectionBox = ({ title_sect, content, onSubmit}) => {
    const [boxIntentionText, setBoxIntentionText] = useState('');
    return (
        <div className="intention_section">
            <div className="intention_section_container">
                <h2 className="h2intention center">{title_sect}</h2>
                <p className="Pintention center">{content}</p>
                {/* Utilisation de l'état local pour suivre le texte de l'intention */}
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
                <button className="intention_button" onClick={() => { onSubmit(boxIntentionText)}}>
                    Envoyer
                </button>
            </div>
        </div>
    );
};
