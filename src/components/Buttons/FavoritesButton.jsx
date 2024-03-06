import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const FavoritesButton = () =>{
    return(
        <button className="px-5 py-2.5">
            <FontAwesomeIcon icon={faHeart} style={{color: "#fafaf9",}} />
        </button>
    )
};

export default FavoritesButton