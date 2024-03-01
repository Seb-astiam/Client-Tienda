import { useHome } from "../../hooks/useHome";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import Filters from "../../components/Filters/Filters";

const Home = () => {
  useHome();
  const arrProducts = useSelector((state) => state.arrayProducts.allProducts);
  const filteredProducts = useSelector((state) => state.arrayProducts.filtered);

  //console.log("arr: ", arrProducts);
  return (
    <div>
      <Filters/>
      <Cards arrProducts={arrProducts} />
    </div>
  );
};

export default Home;
