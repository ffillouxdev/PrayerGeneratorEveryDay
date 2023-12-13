import React from "react";

export default function IntentionSection() {
    return (
        <div className="My_Personnal_prayer_intention" id="intensionPart">
            <IntentionSectionBox title_sect="Pour les votres" content="Vous pouvez laisser vos intentions de prières ici, elles seront lues par les membres de la communauté et nous prierons pour vous." />
            <IntentionSectionBox title_sect="Pour votre famille" content="Vous pouvez laisser les intentions de prières pour votre famille ici, elles seront lues par les membres de la communauté et nous prierons pour vous." />
            <IntentionSectionBox title_sect="Pour vos amis" content="Vous pouvez laisser les intentions de prières pour vos amis ici, elles seront lues par les membres de la communauté et nous prierons pour vous." />
            <IntentionSectionBox title_sect="Pour vos ennemis" content="Vous pouvez laisser les intentions de prières pour vos ennemis ici, elles seront lues par les membres de la communauté et nous prierons pour vous." />
        </div>
    );
}

const IntentionSectionBox = ({ title_sect, content }) => {
    return (
        <div className="intention_section">
            <div className="intention_section_container">
                <h2 className="h2intention center">{title_sect}</h2>
                <p className="Pintention center">{content}</p>
                <textarea name="texta" id="intention_textarea" cols="30" rows="10" placeholder="Votre intention"></textarea>
                <button className="intention_button">Envoyer</button>
            </div>
        </div>
    );
};
