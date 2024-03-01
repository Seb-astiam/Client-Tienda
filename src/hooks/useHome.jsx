import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getAllProducts } from "../Redux/productsSlice";

export const useHome = () => {
  const dispatch = useDispatch();

  const URL = "http://localhost:3001/products";
  useEffect(() => {
    const axiosData = async () => {
      try {
        const { data } = await axios.get(`${URL}`);
        dispatch(getAllProducts(data));
      } catch (error) {
        console.error("Algo fallo en mi back: ", error);
      }
    };

    axiosData();
  }, []);
};
export default useHome;
