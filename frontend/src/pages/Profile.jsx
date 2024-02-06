import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { toast } from "react-toastify";
import AxiosInstance from "../utils/axiosInstance";


import Navbar from "../components/navbar";
import Footer from "../components/footer";

import imgBG from "../assets/bgProfilePage.jpg";
import googleIcon from "../assets/googleIcon.jpg";
import axiosInstance from "../utils/axiosInstance";

const API_BASE_URL = 'http://localhost:8000/api';
const PROFILE_URL = `${API_BASE_URL}/auth/profile/`;
const LOGIN_URL = `${API_BASE_URL}/auth/login/`;
const LOGOUT_URL = `${API_BASE_URL}/auth/logout/`;



export default function Profile() {
    const navigate = useNavigate();
    const [showCreateAccount, setShowCreateAccount] = useState(false);
    const [showAlreadyAccount, setShowAlreadyAccount] = useState(false);
    const [userData, setUserData] = useState(null);
    const [cookies, , removeCookie] = useCookies(['access_token']);

    const handleCreateAccountClick = (e) => {
        e.preventDefault();
        setShowCreateAccount(true);
        setShowAlreadyAccount(false);
    };

    const handleAlreadyAccountClick = (e) => {
        e.preventDefault();
        setShowCreateAccount(false);
        setShowAlreadyAccount(true);
    };

    const handleLogout = async () => {
        const refresh_token = cookies.refresh_token;

        removeCookie('access_token');
        removeCookie('refresh_token');
        setUserData(null);

        try {
            await axios.post(
                LOGOUT_URL,
                { refresh_token: refresh_token },
                {
                    headers: {
                        Authorization: `Bearer ${refresh_token}`,
                    },
                }
            );

            navigate("/Profile");
            toast.success("Vous êtes déconnecté!");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            const accessToken = cookies.access_token;
            if (!accessToken) {
                return;
            }

            try {
                const response = await axios.get("http://localhost:8000/api/auth/profile/", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        checkAuthentication();
    }, [cookies]);


    return (
        <>
            <Navbar />
            <main className="profile-page"
                style={{
                    background: `url(${imgBG}) no-repeat fixed center/cover`,
                }}>
                <div className="profile-section">
                    {userData ? (
                        <ConnectedProfile userData={userData} onLogout={handleLogout} />
                    ) : (
                        <div className="profile-section-choice">
                            <button onClick={handleCreateAccountClick}>M'inscrire</button>
                            <button onClick={handleAlreadyAccountClick}>Me connecter</button>
                        </div>
                    )}
                    {showCreateAccount && <CreateAccountWithSocial />}
                    {showAlreadyAccount && <AlreadyAccount />}
                </div>
            </main>
            <Footer />
        </>
    );
}

const AlreadyAccount = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [, setCookie] = useCookies(['access_token']);

    const loginDonnees = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const emailValue = document.getElementById("Email").value;
        const passwordValue = document.getElementById("password").value;

        let url = "http://localhost:8000/api/auth";

        try {
            const response = await AxiosInstance.post(`${url}/login/`, {
                email: emailValue,
                password: passwordValue,
            });

            if (!response.data.is_authenticated) {
                navigate("/Profile/Verify-Mail", { state: { message: response.data.message } });
                return;
            } else {
                setCookie('access_token', response.data.data.access_token, { path: '/' });
                setCookie('refresh_token', response.data.data.refresh_token, { path: '/' });

                navigate("/Profile/Validate");
            }
        } catch (error) {
            console.log("Error during login:", error.response.data);
            setError("Email or password incorrect");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Already-a-Account">
            <hr className="line" />
            <h2 className="center yellow">Me connecter</h2>
            <form action="" onSubmit={loginDonnees}>
                <p className="center" style={{
                    color: "red",
                    padding: "1px",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                }}>{error ? error : ""}</p>
                <label htmlFor="Email">Email <span className="required">*</span></label>
                <input type="email" name="Email" id="Email" />
                <label htmlFor="password">Mot de passe <span className="required">*</span></label>
                <input type="password" name="password" id="password" />
                <div className="remember-me">
                    <div className="se-souvenir">
                        <input type="checkbox" name="remember-me" id="remember-me" />
                        <label htmlFor="remember-me">Se souvenir de moi</label>
                    </div>
                    <Link to="/Profile/forget-password">Mot de passe oublié ?</Link>
                </div>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    )
}



const CreateAccountWithSocial = () => {
    const [showCreateAccountWithoutSocial, setShowCreateAccountWithoutSocial] = useState(false);
    const [showSocialButtons, setShowSocialButtons] = useState(true);
    const navigate = useNavigate();

    const handleCreateAccountWithEmailClick = () => {
        setShowCreateAccountWithoutSocial(true);
        setShowSocialButtons(false);
    };

    return (
        <>
            {showSocialButtons && (
                <div className="with-a-Account-And-Social">
                    <hr className="line" />
                    <h2 className="center yellow">S'inscrire avec</h2>
                    <div className="social-medias">
                        <button onClick={handleCreateAccountWithEmailClick}>
                            <img src={googleIcon} id="googleIcon" alt="icon google" />
                            Google
                        </button>
                    </div>

                    <div className="sans-social">
                        <hr />
                        <p onClick={handleCreateAccountWithEmailClick} className="onClicked-show-without-a-Account-And-Social">S'inscrire avec un email</p>
                        <hr />
                    </div>
                </div>
            )}
            {showCreateAccountWithoutSocial && <CreateAccountWithoutSocial navigate={navigate} />}
        </>
    );
};


const CreateAccountWithoutSocial = ({ navigate }) => {
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password2: "",
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const terminaisons = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@outlook.com", "@yahoo.fr", "@hotmail.fr", "@outlook.fr"]

    const { email, first_name, last_name, password, password2 } = formData;

    const registerDonnees = (e) => {
        e.preventDefault();

        if (!email || !first_name || !last_name || !password || !password2) {
            setError("Veuillez remplir tous les champs");
            return;
        } else if (password !== password2) {
            setError("Les mots de passe ne correspondent pas");
            return;
        } else if (password.length < 8) {
            setError("Le mot de passe doit contenir au moins 8 caractères");
            return;
        } else if (!terminaisons.some((terminaison) => email.includes(terminaison))) {
            setError("Veuillez utiliser une adresse email valide");
            return;
        } else {
            console.log(formData);
            setError("");
            let url = "http://localhost:8000/api/auth"; // url de l'api 
            const res = axios.post(`${url}/register/`, formData)
            res.then((response) => {
                const responseData = response.data;
                console.log(responseData.message);
                if (response.status === 201) {
                    // Redirect to email verification
                    navigate("/Profile/Verify-Mail", { state: { message: responseData.message } });
                    toast.success("Inscription réussie!");
                } else if (response.status === 400) {
                    setError(responseData.message || "Erreur lors de l'inscription ou le compte existe déjà!");
                }
            }).catch((error) => {
                console.error("Error:", error);
            });

        };
    }


    return (
        <div className="without-a-Account-And-Social">
            <hr className="line" />
            <h2 className="center yellow">S'inscrire gratuitement</h2>
            <p className="center" style={{
                color: "red",
                padding: "1px",
                fontWeight: "bold",
                fontSize: "1.2rem",
            }}>{error ? error : ""}</p>
            <form onSubmit={registerDonnees}>
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input type="email" name="email" id="email" value={email} onChange={onChange} />
                <label htmlFor="prenom">Prénom <span className="required">*</span></label>
                <input type="text" name="first_name" id="prenom" value={first_name} onChange={onChange} />
                <label htmlFor="nom">Nom <span className="required">*</span></label>
                <input type="text" name="last_name" id="nom" value={last_name} onChange={onChange} />
                <label htmlFor="password">Mot de passe <span className="required">*</span></label>
                <input type="password" name="password" id="password" value={password} onChange={onChange} />
                <label htmlFor="password">Confirmer le mot de passe <span className="required">*</span></label>
                <input type="password" name="password2" id="password2" value={password2} onChange={onChange} />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    )
}



const ConnectedProfile = ({ onLogout }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cookies] = useCookies(['access_token']);
    const apiBaseUrl = "http://localhost:8000";

    const fetchProfile = async () => {
        const accessToken = cookies.access_token;
        if (!accessToken) {
            return;
        }

        try {
            const response = await axios.get(`${apiBaseUrl}/api/auth/profile/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setIsLoggedIn(true);
        } catch (error) {
            setIsLoggedIn(false);
        }
    };

    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");

        if (accessToken) {
            AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

            fetchProfile();
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <div className="connected-profile">
            <hr className="line" />
            <h2 className="center yellow">Mon profil</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    <Link to="/Profile/Reset-password">Changer le mot de passe</Link>
                    <button onClick={onLogout}>Se déconnecter</button>
                </>
            )}
        </div>
    );
};
