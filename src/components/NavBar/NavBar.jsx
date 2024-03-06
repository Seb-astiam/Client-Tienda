import CartButton from "../Buttons/CartButton";
import FavoritesButton from "../Buttons/FavoritesButton";
import PerfilButton from "../Buttons/PerfilButton";
import SearchBar from "../SearchBar/SearchBar";
import NavFilter from "./NavFilter";
import Logo from "./Logo";

const NavBar = ()=>{
    return(
        <div  className="relative top-0 left-0 w-full">
            <div className=" bg-black shadow-md flex justify-end">
                <Logo/>
                <SearchBar/>
                <PerfilButton/>
                <FavoritesButton/>
                <CartButton/>            
            </div>
            <div>
                <NavFilter/>
            </div>


        </div>
        
    )
};

export default NavBar;