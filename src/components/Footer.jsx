import "../styles/Footer.css"
import "../styles/Navbar.css"
import { useUserContext } from "../context/UserContext"
import { useState } from "react";
import Contact from "../pages/Contact";

const Footer = () => {
    const usercontext = useUserContext();
    const [modal, setModal] = useState(false);
    const handleClickModalFalse = () => { setModal(false) }
    const handleClickModalActive = () => { setModal(true) }


    function modalOpen() {
        console.log("modal", modal)
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
            <footer>
                <div className="container-all__items">
                    <div className="container-item__left"> <span className="item-span-footer">Ivo Singer - 2023</span>
                    </div>
                    <div className="container-items__right">
                        <div className="item__right">
                            <span className="item-span-footer"><a className="nothing" href={usercontext?.linkedin} alt="">LinkedIn</a></span>
                        </div>
                        <div className="item__right">
                            <span className="item-span-footer"><a className="nothing" href={usercontext?.github} alt="">Github</a></span>
                        </div>
                        <div className="item__right">
                            <span className="item-span-footer"><button className="nothing__contact" onClick={handleClickModalActive}>Contact</button></span>
                        </div>
                    </div>
                </div>
            </footer>
        {modalOpen}
        </>
    )
}
export default Footer