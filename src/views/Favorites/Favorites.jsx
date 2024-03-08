import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";


const Favorites = () => {
  const arrProducts = useSelector((state) => state.arrayProducts.favorites);

  return (
    <div>
      <Cards arrProducts={arrProducts} />
    </div>
  );
};

export default Favorites;