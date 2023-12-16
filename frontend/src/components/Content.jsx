import React, { useState, useEffect } from "react";
import axios from 'axios';

import defaultImg from '../assets/berger.png';

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

  return (
    <div key={randomIndex}>
      {randomIndex !== null && prayers[randomIndex] && randomImages[randomIndex] && (
        <>
          {randomImages[randomIndex].img_url === null || randomImages[randomIndex].img_url === undefined ? (
            <img src={defaultImg} id="defaultImg" alt='default' />
          ) : (
            console.log(randomImages[randomIndex].img_url),
            <img id="randomImgGenerate" src={`${apiBaseUrl}${randomImages[randomIndex].img_url}`} alt={`Prayer Image ${randomIndex}`} />
          )}
          {prayers[randomIndex].prayer_text && (
            <p>{prayers[randomIndex].prayer_text}</p>
          )}
        </>
      )}
    </div>
  );
}

export default Content;