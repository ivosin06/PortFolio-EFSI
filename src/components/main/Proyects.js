import React from "react";
import "../../styles/Proyects.css"
import { useProyectContext, useProyectFunctions } from "../../context/ProyectContext";

const Proyects = () => {
    const proyectContext = useProyectContext();
    const ProyectFunctions = useProyectFunctions();

    return (
        <>

            <article className="ticket-row proyects__container">
                <div className="columns-proyects">
                    {proyectContext?.map(pc => {

                        function svgChangue() {
                            if (pc.fav === false) {
                                return (
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="svg__button"
                                    >
                                        <path
                                            fill="#000000"
                                            d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3 C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z"
                                        />
                                    </svg></>)
                            }
                            else {
                                return (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="#007bff" d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z" />
                                        </svg>

                                    </>
                                )
                            }
                        }


                        return (
                            <>
                                <div className="ticket-row__columns" key={pc.idProyect}>
                                    <div className="ticket-row__left-column" id="proyect">
                                        <div className="ticket-row__column-item" >
                                            <div className="content">
                                                <h5 className="ticket-row__column--primary-text"><span className="richtext title-proyect">{pc.title}</span></h5>
                                            </div>
                                        </div>
                                        <div className="ticket-row__column-item">
                                            <div className="content">
                                                <h5 className="ticket-row__column--primary-text"><span className="richtext descriptionProyect">{pc.descriptionProyect}</span></h5>
                                            </div>
                                        </div>
                                        <div className="ticket-row__column-item">
                                            <div className="content">
                                                <h5 className="ticket-row__column--primary-text"><span className="richtext ">Hecho con React.js</span></h5>
                                            </div>
                                        </div>
                                        <div className="ticket-row__column-item-down">
                                            <h5 className="ticket-row__column--primary-text"><a href={pc.git} className="richtext linkProyect">Ver mas de este proyecto ↗</a></h5>
                                        </div>
                                    </div>
                                    <div className="ticket-row__right-container">
                                        <div className="img-proyect-container">
                                            <img src={pc.img} alt="img-proyect" className="img-proyect" />
                                        </div>
                                    </div>
                                    <div className="ticket-row__right-container">
                                        <button className="right__like" value={pc.idProyect} onClick={ProyectFunctions.handleSetFav}>
                                            {svgChangue()}
                                        </button>
                                    </div>
                                </div>
                                <div className="separator-container">
                                    <div className="separator-ui"></div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </article >

        </>
    )
}
export default Proyects