import React from "react";


//import '../../styles/ForgetPassword.scss';
//import '../../styles/App.scss'

// import Navbar from "../frontend/src/components/navbar";
// import Footer from "../frontend/src/components/footer";

// import imgBG from "../../assets/bgProfilePage.jpg";

export default function ForgetPassword() {
    return (
        <>
            <Navbar />
            <main className="ForgetPassword"
                style={{
                    background: `url(${imgBG}) no-repeat fixed center/cover`,
                }}>
                <div className="ForgetPassword__container">
                    <h2 className="ForgetPassword__title">Forget Password</h2>
                    <form className="ForgetPassword__form">
                        <input className="ForgetPassword__input" type="email" id="email" name="email" placeholder="Enter your email" />
                        <button className="ForgetPassword__button" type="submit">Send</button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}