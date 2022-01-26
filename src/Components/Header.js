
import { NavLink } from "react-router-dom";

let Header = () => {
    return(
        <div className="header text-center">
            <NavLink className="headerFont" to={`/home`}>MusicDB</NavLink>
            {/* MusicDB */}
        </div>
    )
}

export default Header;