import { useHome } from "../../hooks/useHome";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  useHome();
  const arrProducts = useSelector((state) => state.arrayProducts.allProducts);
  console.log("arr: ", arrProducts);
  return (
    <div>
      <Cards arrProducts={arrProducts} />
    </div>
  );
};

export default Home;
