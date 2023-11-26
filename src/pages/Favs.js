import "../styles/Favs.css"
import { useProyectFunctions } from "../context/ProyectContext"
const Favs = () => {
    const ContextProyectFunctions = useProyectFunctions();
    const p = ContextProyectFunctions.FavProyects;
    function favcont() {
        let cont = 0;
        if (p === null) {
            return cont
        }
        else {
            p.map((l) => {
                if (l.fav === true) {
                    return cont++

                }
                return 0
            })

        }
        return cont
    }
    return (
        <>
            <h1 className="h1_fav">Favoritos : {favcont()}</h1>
            <div className="fav-container">
                {p?.map((l) => {
                    function svgChangue() {
                        if (l.fav === false) {
                            return (<>
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
                    if (l.fav === true) {
                        return (
                            <div className="fav-item" key={l.idProyect}>

                                <div className="left_columns_fav">
                                    <a className="nothing" href={l.git}>
                                        <div className="fav-item__img">
                                            <img className="img__favs" src={l.img} alt="img-fav" />
                                        </div>
                                        <div className="fav-item__content">
                                            <h3 className="fav-item__content--title">{l.title}</h3>
                                            <p className="fav-item__content--description">{l.descriptionProyect}</p>
                                        </div></a>
                                </div>
                                <div className="right__columns_fav">
                                    <button className="right__like bounceIn" id="" value={l.idProyect} onClick={ContextProyectFunctions.handleSetFav}>{svgChangue()}</button>
                                </div>
                            </div>
                        )
                    }
                    return (<></>)
                }
                )
                }
            </div>
        </>
    )
}
export default Favs