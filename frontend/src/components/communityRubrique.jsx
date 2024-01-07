import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function CommunityRubrique({ title_sect}) {
    const apiBaseUrl = 'http://127.0.0.1:8000';
    const reactServerUrl = 'http://localhost:3000';
    const [rubriqueData, setRubriqueData] = useState([]);

    useEffect(() => {
        // Charger les prières
        axios.get(`${apiBaseUrl}/intention/`)
            .then(res => {
                setRubriqueData(res.data);

            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const filteredData = rubriqueData.filter(item => item.type_of_people === title_sect);

    return (
        <div className="community-rubrique">
            <div className="community-rubrique-container">
                <h2 className="h2intention center">{title_sect}</h2>
                <ul>
                    {filteredData.map((item, index) => (
                        <li key={index} className="Li_intention">
                            <a href={`${reactServerUrl}/${title_sect}/${item.intention_title}`}>
                                {item.intention_title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}