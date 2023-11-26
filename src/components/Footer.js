import "../styles/Footer.css"
import "../styles/Navbar.css"
import { useUserContext } from "../context/UserContext"
import React from "react";


const Footer = () => {
    const usercontext = useUserContext();

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
                        
                    </div>
                </div>
            </footer>
        
        </>
    )
}
export default Footer