import React, { useState } from "react";
import ISI from "../assets/ISI.svg"
import { Link } from "react-router-dom";
import Contact from "../pages/Contact";

import "../styles/Navbar.css"

const Navbar = () => {
    const [modal, setModal] = useState(false);
    const handleClickModalFalse = () => { setModal(false) }
    const handleClickModalActive = () => { setModal(true) }

    function modalOpen() {
        if (modal === true) {
            return (
                <div className="modal">
                    <article className="modal__container">

                        <header className="modal-container-header">
                            <div className="modal-container-title">
                                <span className="richtext-black">Contactame</span>
                            </div>
                            <button class="icon-button" onClick={handleClickModalFalse}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                                </svg>
                            </button>
                        </header>
                        <div className="modal-container-body">
                            <Contact />
                        </div>

                    </article>
                </div>
            )
        }
        else {
            return (<></>);
        }
    }


    return (
        <>
            <div className="topnav">
                <div className="imgHome">
                    <span className="ticket-row__left-column--primary-text"> <Link to="/"><img src={ISI} className="item-nav img" alt="" /></Link></span>
                </div>
                <div className="items">
                    <span className="ticket-row__right-column--primary-text"> <Link to="/" className="link">Home</Link></span>
                    <span className="ticket-row__right-column--primary-text"> <Link to="/favs" className="link">Favoritos</Link></span>
                    <span className="ticket-row__right-column--primary-text"> <button className="link" id="button__link" onClick={handleClickModalActive}>Contacto</button></span>
                </div>
                
            </div>
            <div className="separator-ui" id="navbar"></div>
            {modalOpen()}
        </>
    )
}
export default Navbar