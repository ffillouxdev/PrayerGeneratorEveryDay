import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "../styles/Page_404.scss";

import error404 from '../assets/errorPage404.jpg';

export default function Page_404() {
  return (
    <>
      <Navbar />
      <main className="page_404"
        style={
          {
            background: `url(${error404}) no-repeat center center`,
            backgroundSize: 'cover',
          }
        }>
        <div className="page_404_first-section">
          <h2>404</h2>
          <section>
            <p id="oups">Oups</p>
            <p>, la page que vous cherchez n'existe pas</p>
          </section>
          <hr />
        </div>
      </main>
      <Footer />
    </>
  );
}
