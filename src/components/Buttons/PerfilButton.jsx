import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const PerfilButton = ()=>{
    return(
        <button className="px-5 py-2.5">
            <FontAwesomeIcon icon={faUser} style={{color: "#fafaf9",}} />
        </button>
    )
};

export default PerfilButton;