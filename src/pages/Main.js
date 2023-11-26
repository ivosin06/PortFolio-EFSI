import React from "react";
import Proyects from "../components/main/Proyects";
import { useUserContext } from "../context/UserContext.js";
import "../styles/Main.css"
import svgarrowdown from "../assets/arrowdown.svg"

const Main = () => {
    const context = useUserContext();

    return (
        <>

            <section className="ticket-row noflex" >
                <div className="ticket-row--conteiner">
                    <div className="columns-presentation">
                        <div className="ticket-right-column">
                            <h5 className="ticket-row__right-column--primary-text"><span className="richtext textname"> Hola, Soy {context?.name}  {context?.surname}.</span>
                            </h5>
                           <div className="img__container">
                           <img className="profile_img" src={context?.img} alt="img_profile"/>
                           </div>
                        </div>
                        
                        <div className="ticket-row__left-column">
                            <h5 className="ticket-row__left-column--primary-text"><span className="richtext description">{context?.description}</span></h5>
                        </div>
                    </div>
                    <div className="ticket-row--proyects">
                        <div className="arrow-section">
                            <img className="arrow-img" alt="arrow-img" src={svgarrowdown}/>
                        </div>
                        <Proyects />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Main;