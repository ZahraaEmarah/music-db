import { NavLink } from "react-router-dom";

let start = () => {
    return (
        <div className="main button-container">
            <img className="banner" src="/raw/Girls-Listen-Music_0.jpg" alt="banner" />
            <NavLink to={`/home`}>Browse</NavLink>
        </div>
    )
}

export default start;