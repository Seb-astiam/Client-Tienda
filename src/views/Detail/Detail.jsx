import Cards from "../../components/Cards/Cards";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [arraySuggestedProducts, setArraySuggestedProducts] = useState([]);
  const [product, setProduct] = useState({});
  const endpoint = "http://localhost:3001/products";

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const { data } = await axios(`${endpoint}/detail/${id}`);
        setProduct(data);
        const { brand, type } = data;

        const response = await axios(`${endpoint}?brand=${brand}&type=${type}`);

        setArraySuggestedProducts(response.data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchProductData();
  }, [id]);

  return (
    <div className="bg-grey">
      <ProductInfo product={product} />
      <Cards arrProducts={arraySuggestedProducts}></Cards>
    </div>
  );
};

export default Detail;
