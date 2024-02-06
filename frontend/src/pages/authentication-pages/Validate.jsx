import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../../styles/profile.scss";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import imgBG from "../../assets/bgProfilePage.jpg";
import { useCookies } from 'react-cookie';

export default function Validate() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cookies] = useCookies(['access_token']); // useCookies hook
    const [user, setUser] = useState(null);

    const extractName = (chaine) => {
        let name = "";
        let i = 4;
        let trouve = 0;
        while (i < chaine.length) {
            if (chaine[i] == " ") {
                trouve++;
            }
            if (trouve == 2) {
                break;
            }
            name = name + chaine[i]
            i++;
        }
        return name;

    }

    useEffect(() => {
        const checkAuthentication = async () => {
            const accessToken = cookies.access_token;
            if (!accessToken) {
                navigate("/Profile");
                return;
            }
            try {
                const response = await axios.get('http://localhost:8000/api/auth/profile/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                setUser(response.data.message);
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
                navigate("/Profile");
            }
        };

        checkAuthentication();
    }, [cookies, navigate]);


    return (
        <>
            <Navbar />
            <main
                className="profile-page"
                style={{
                    background: `url(${imgBG}) no-repeat fixed center/cover`,
                }}
            >
                <div className="profile-section">
                    {isAuthenticated ? (
                        <>
                            <div className="profile_valider">
                                <p>Vous êtes bien connecté !</p>
                                <p>"{extractName(JSON.stringify(user))}"</p>
                                <Link to="/Profile">Accèdez à mon Profile</Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="profile_valider">
                                <p>Redirection en cours...</p>
                                <Link to="/Profile">Accèdez à mon Profile</Link>
                            </div>
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

//