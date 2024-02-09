import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetPasswordConfirm } from '../../features/auth/authSlice';
import "../../styles/profile.scss";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import imgBG from "../../assets/bgProfilePage.jpg";

export default function ResetPassowordConfirm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { uid, token } = useParams();
    const [formData, setFormData] = useState({
        'new_password': '',
        're_new_password': '',
    });

    const {isSuccess} = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            new_password: formData.new_password,
            re_new_password: formData.re_new_password,
            uid: uid,
            token: token
        };
        dispatch(resetPasswordConfirm(userData));
    }

    useEffect(() => {
        if (isSuccess) {
            navigate("/Profile");
        }
    }, [isSuccess]);


    return (
        <>
            <Navbar />
            <main
                className="profile-page"
                style={{
                    background: `url(${imgBG}) no-repeat fixed center/cover`,
                }}
            >
                <div className="profile-section-password">
                    <div className="profile_valider-password1">
                        <h2 className='center yellow'>Reset Password</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="password"
                                name="new_password"
                                placeholder="New password"
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="re_new_password"
                                placeholder="Confirm new password"
                                onChange={handleChange}
                            />
                            <button type="submit">Valider</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}