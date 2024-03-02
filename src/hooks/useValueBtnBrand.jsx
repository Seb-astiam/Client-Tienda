import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {getValueBrands} from "../Redux/productsSlice";

export const useValueBtnBrand = () => {
  const dispatch = useDispatch();
  const URL = "http://localhost:3001/products/brands";

  useEffect(() => {
    const axiosData = async () => {
      try {
        const { data } = await axios.get(`${URL}`);
        dispatch(getValueBrands(data));
      } catch (error) {
        console.error("Algo fallo en mi back: ", error);
      }
    };

    axiosData();
  }, []);
};
