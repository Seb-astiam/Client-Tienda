import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () =>{
    return(
        <div className=" flex px-5 py-4 me-2 my-4 mr-16 w-2/4">
            <input placeholder='Buscar...' type="text" className="w-4/5 rounded-sm min-w-[100px] sm:max-w-xs"/>
            <button className="ml-2">
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#fafaf9",}} />    
            </button>
        </div>
    )
};

export default SearchBar;