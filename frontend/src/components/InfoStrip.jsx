import React from 'react';
import phoneIcon from '../assets/phone.webp';
import emailIcon from  '../assets/email.webp';
import locationIcon from '../assets/location.webp';

const InfosStrip = () => {
  return (
    <div className="infos-strip">
      <InfoBox icon={phoneIcon} title="Numéro de téléphone" content="+33 9 99 99 99" />
      <InfoBox icon={emailIcon} title="Email" content="deplacementdoux@email.fr" />
      <InfoBox icon={locationIcon} title="Localisation" content="1 Rue de la Technologie, 69100 Villeurbanne" />
    </div>
  );
};

const InfoBox = ({ icon, title, content }) => {
  return (
    <div className={`info ${title.toLowerCase()}`}>
      <img src={icon} alt={`${title} icon`} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default InfosStrip;
