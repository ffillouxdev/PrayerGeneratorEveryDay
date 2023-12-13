import React, { useState, useEffect } from "react";
import axios from 'axios';

import defaultImg from '../assets/jerusalem.png';

function Content() {
  const [details, setDetails] = useState([]);
  const [randomIndex, setRandomIndex] = useState(null);


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/prayer/')
      .then(res => {
        // stocker les informations dans un tableau
        setDetails(res.data);

        // Génére un index aléatoire
        const randomIndex = Math.floor(Math.random() * res.data.length);
        setRandomIndex(randomIndex);
      })
      .catch(err => {
        console.error(err);
      });
  },[]);
    return (
      
      // afficher qu'une seule prière du tableau
      <main className="content">
        {randomIndex !== null && (
            <div key={randomIndex}>
              {details[randomIndex].img_url == null ? (
                <img src={defaultImg} id="defaultImg" alt='default image'/>
              ) : (
                <img src={details[randomIndex].img_url} alt={`Prayer Image ${randomIndex}`} />
              )}
              <p>{details[randomIndex].prayer_text}</p>
            </div>
        )}
      </main>
    );
}

export default Content;

