import React, { useState, useEffect } from "react";
import axios from 'axios';

import defaultImg from '../assets/berger.webp';

function Content() {
  const [prayers, setPrayers] = useState([]);
  const [randomImages, setRandomImages] = useState([]);
  const [randomIndex, setRandomIndex] = useState(null);

  const apiBaseUrl = 'http://127.0.0.1:8000';
  useEffect(() => {
    // Charger les prières
    axios.get(`${apiBaseUrl}/prayer/`)
      .then(res => {
        setPrayers(res.data);
        // Générer un index aléatoire pour les prières
        const randomIndex = Math.floor(Math.random() * res.data.length);
        setRandomIndex(randomIndex);
        setPrayers(res.data);
      })
      .catch(err => {
        console.error(err);
      });

    // Charger les images aléatoires
    axios.get(`${apiBaseUrl}/random/`)
      .then(res => {
        // selection des images aléatoires
        const randomImage = Math.floor(Math.random() * res.data.length);
        setRandomImages(randomImage);
        setRandomImages(res.data);

      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  //console.log("randomImages :", randomImages, "img_url :", randomImages[randomIndex].img_url);
  return (
    <div key={randomIndex}>
      {randomIndex !== null && prayers[randomIndex] && randomImages[randomIndex] && (
        <>
          <div
            className="first-section"
            style={{
              backgroundImage: `url(${randomImages[randomIndex].img_url !== null ? `${apiBaseUrl}${randomImages[randomIndex].img_url}` : defaultImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2>Recevez votre prière <br /> quotidienne 🙏</h2>
            {prayers[randomIndex].prayer_text && (
              <>
                <p id="PriereAl">{prayers[randomIndex].prayer_text}</p>
              </>

            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Content;


 {/* Afficher les informations aléatoires dans la console 
  randomIndex,
  randomPrayer: prayers[randomIndex],
  randomImage: randomImages[randomIndex],
})}*/}