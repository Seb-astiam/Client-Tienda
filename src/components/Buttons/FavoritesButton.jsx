import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { NavLink } from "react-router-dom"

const FavoritesButton = () =>{
    return(
        <button className="px-5 py-2.5">
            <NavLink to="/Favorites">
                <FontAwesomeIcon icon={faHeart} style={{color: "#fafaf9",}} />
            </NavLink>
        </button>
    )
};

export default FavoritesButton