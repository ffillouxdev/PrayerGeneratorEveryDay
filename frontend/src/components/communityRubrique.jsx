import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Timeline } from 'gsap/gsap-core';
import { SplitText } from 'gsap-trial/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Power3 } from 'gsap';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger, Power3, SplitText);
gsap.config({ trialWarn: false });

/* si la personne n'est pas connecté, ou n'est pas inscrite, elle n'aura pas le droit d'envoyer des intentions, on lui en 
sugerera un popup et la requete POST se fairas pas*/

// mettre un compteur de popup pour qu'il n'y est pas de spam dans la base de données pour DDOS
export default function CommunityRubrique({ title_sect, id }) {
    const apiBaseUrl = 'http://127.0.0.1:8000';
    const reactServerUrl = 'http://localhost:3000/Your-space';
    const [rubriqueData, setRubriqueData] = useState([]);
    const splitRef = useRef(null);

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
                    start: 'top 80%',
                }
            }
        );
    };

    useEffect(() => {
        axios.get(`${apiBaseUrl}/intention/`)
            .then(res => {
                setRubriqueData(res.data);
            })
            .catch(err => {
                console.error(err);
            });
        if (splitRef.current) {
            const splitText = new SplitText(splitRef.current, {
                type: 'chars, words',
            });

            const chars = splitText.chars;

            const tl = new Timeline({
                onComplete: () => {
                    splitText.revert();
                },
            });

            tl.from(
                chars,
                {
                    duration: 1,
                    y: 10,
                    opacity: 0,
                    stagger: 0.02,
                    ease: 'circ.out',
                },
                0.1
            );

            return () => {
                tl.kill();
                splitText.revert();
            };
        }

        const sections = document.querySelectorAll('.flex-community-rubrique > div:nth-child(1), .flex-community-rubrique > div:nth-child(2), .flex-community-rubrique > div:nth-child(3), .flex-community-rubrique > div:nth-child(4)');
        sections.forEach((section, index) => {
            const triggerElem = index === 0 ? section : section.parentElement;
            const start = index === 0 ? 'top 80%' : 'top 50%';

            ScrollTrigger.create({
                trigger: triggerElem,
                start: start,
                onEnter: () => {
                    if (index === 0) {
                        slideBottomToTop(section, 0.9, 2.5);
                    } else if (index === 1) {
                        slideBottomToTop(section, 0.6, 2);
                    } else if (index === 2) {
                        slideBottomToTop(section, 0.5, 1.5);
                    } else if (index === 3) {
                        slideBottomToTop(section, 0.4, 1);
                    }

                }
            });
        });
    }, [splitRef.current]);

    const filteredData = rubriqueData.filter(item => item.type_of_people === title_sect);

    return (
        <div className={`community-rubrique ${id}`} style={{ opacity: 0 }}>
            <div className="community-rubrique-container">
                <h2 className="h2intention center">{title_sect}</h2>
                <ul>
                    {filteredData.map((item, index) => (
                        <li key={index} className="Li_intention">
                            <a href={`${reactServerUrl}/${title_sect}/${item.intention_title}`}>
                            </a>
                            <Link to={`/Your-space/${encodeURIComponent(title_sect)}/${encodeURIComponent(item.intention_title)}`}>
                                {item.intention_title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}    