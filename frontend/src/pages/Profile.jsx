import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { register, reset, login, logout } from "../features/auth/authSlice";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import imgBG from "../assets/bgProfilePage.jpg";

export default function Profile() {
    const navigate = useNavigate();
    const [showCreateAccount, setShowCreateAccount] = useState(false);
    const [showAlreadyAccount, setShowAlreadyAccount] = useState(false);
    const [userData, setUserData] = useState(null);

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


    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const checkAuthentication = async () => {
            if (isSuccess || user) {
                setUserData(user);
                console.log(user);
            }
        };


        checkAuthentication();
    }, [isError, isSuccess, user, navigate, dispatch]);

    useEffect(() => {
        if (!user) {
            setUserData(null);
        }
    }, [user]);


    return (
        <>
            <Navbar />
            <main className="profile-page"
                style={{
                    background: `url(${imgBG}) no-repeat fixed center/cover`,
                }}>
                <div className="profile-section">
                    {userData ? (
                        <ConnectedProfile userData={userData} />
                    ) : (
                        <div className="profile-section-choice">
                            <button onClick={handleCreateAccountClick}>M'inscrire</button>
                            <button onClick={handleAlreadyAccountClick}>Me connecter</button>
                        </div>
                    )}
                    {showCreateAccount && <CreateAccount />}
                    {showAlreadyAccount && <AlreadyAccount />}
                </div>
            </main>
            <Footer />
        </>
    );
}

const AlreadyAccount = () => {
    const [error, setError] = useState("");
    const [userData, setUserData] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const userData = {
            email,
            password,
        };
        dispatch(login(userData));
    };

    useEffect(() => {
        if (isError) {
            setError("Email ou mot de passe incorrect");
        }

        if (isSuccess || user) {
            navigate("/");
            <ConnectedProfile userData={userData} />
        }
    }, [isError, isSuccess, user, navigate, dispatch]);

    return (
        <div className="Already-a-Account">
            <hr className="line" />
            <h2 className="center yellow">Me connecter</h2>
            <form action="" onSubmit={handleSubmit}>
                <p className="center" style={{
                    color: "red",
                    padding: "1px",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                }}>{error ? error : ""}</p>
                <label htmlFor="Email">Email <span className="required">*</span></label>
                <input type="email" name="email" id="Email" value={email} onChange={handleChange} />
                <label htmlFor="Password">Mot de passe <span className="required">*</span></label>
                <input type="password" name="password" id="Password" value={password} onChange={handleChange} />
                <div className="remember-me">
                    <div className="se-souvenir">
                        <input type="checkbox" name="remember-me" id="remember-me" />
                        <label htmlFor="remember-me">Se souvenir de moi</label>
                    </div>
                    <Link to="/reset-password">Mot de passe oublié ?</Link>
                </div>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}



const CreateAccount = () => {
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        re_password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const terminaisons = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@outlook.com", "@yahoo.fr", "@hotmail.fr", "@outlook.fr", "@etu.univ-lyon1.fr"];

    const { first_name, last_name, email, password, re_password } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !first_name || !last_name || !password || !re_password) {
            setError("Veuillez remplir tous les champs");
            return;
        } else if (password !== re_password) {
            setError("Les mots de passe ne correspondent pas");
            return;
        } else if (password.length < 8) {
            setError("Le mot de passe doit contenir au moins 8 caractères");
            return;
        } else if (!terminaisons.some((terminaison) => email.includes(terminaison))) {
            setError("Veuillez utiliser une adresse email valide");
            return;
        } else {
            setError("");
            const userData = {
                first_name,
                last_name,
                email,
                password,
                re_password,
            }
            dispatch(register(userData));
            navigate("/Profile/Validate");
        }
    };


    useEffect(() => {
        if (isError) {
            setError("Une erreur s'est produite lors de l'inscription");
        }

        if (isSuccess || user) {
            navigate("/Profile/Validate");
        }
    }, [isError, isSuccess, user, navigate, dispatch]);

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
            <form onSubmit={handleSubmit}>
                <label htmlFor="prenom">Prénom <span className="required">*</span></label>
                <input type="text" name="first_name" id="prenom" value={first_name} onChange={handleChange} />
                <label htmlFor="nom">Nom <span className="required">*</span></label>
                <input type="text" name="last_name" id="nom" value={last_name} onChange={handleChange} />
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input type="email" name="email" id="email" value={email} onChange={handleChange} />
                <label htmlFor="password">Mot de passe <span className="required">*</span></label>
                <input type="password" name="password" id="password" value={password} onChange={handleChange} />
                <label htmlFor="password">Confirmer le mot de passe <span className="required">*</span></label>
                <input type="password" name="re_password" id="re_password" value={re_password} onChange={handleChange} />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}


const ConnectedProfile = ({ userData }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //console.log(userData);
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/Profile")

    }

    return (
        <div className="connected-profile">
            <hr className="line" />
            <h2 className="center yellow">Mon profil</h2>
            <Link to="/reset-password">Changer le mot de passe</Link>
            <button onClick={handleLogout}>Se déconnecter</button>
        </div>
    );
}