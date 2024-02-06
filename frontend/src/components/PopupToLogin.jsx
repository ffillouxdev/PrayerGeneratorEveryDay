import React from 'react'
import { Link } from 'react-router-dom'


export default function PopupToLogin() {
    return (
        <div className="popup1">
            <div className="popup-content">
                <h2 className="popup-title">Vous devez être connecté pour laisser une intention de prière</h2>
                <Link className="links" to={'/Profile/'}>Se connecter</Link>
            </div>
        </div>
    )
}


