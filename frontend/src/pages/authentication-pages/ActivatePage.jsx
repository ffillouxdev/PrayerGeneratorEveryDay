import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activate }  from "../../features/auth/authSlice";
import "../../styles/profile.scss";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import imgBG from "../../assets/bgProfilePage.jpg";

export default function ActivatePage() {
    const [SuccessMessage, setSuccessMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { uid, token } = useParams();
    const { isLoading, isError, isSuccess, errorMessage } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            uid: uid,
            token: token,
        };
        dispatch(activate(userData));
        setSuccessMessage("Votre compte a été activé avec succès");
    }

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
                    <div className="profile_activer">
                        {SuccessMessage && <p>Votre compte a été activé avec succès</p>}
                        <button onClick={handleSubmit}>Activer mon compte</button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
