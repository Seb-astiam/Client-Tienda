import { useHome } from "../../hooks/useHome";
import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import Filters from "../../components/Filters/Filters";
import { useValueBtnBrand } from "../../hooks/useValueBtnBrand";
const Home = () => {
  useHome();
  useValueBtnBrand();

  const arrProducts = useSelector((state) => state.arrayProducts.allProducts);

  return (
    <div className="mt-28 flex flex-row w-screen justify-items-stretch h-5/6">
      <Filters />
      <Cards arrProducts={arrProducts} />
    </div>
  );
};

export default Home;
