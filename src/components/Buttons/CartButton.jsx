import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartButton = () =>{
    return(
        <button className="px-5 py-2.5">
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#fafaf9",}} />
        </button>
    )
};

export default CartButton