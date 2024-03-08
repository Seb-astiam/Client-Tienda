import btnFiltros from "../../../btnFiltros.json";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getAllProducts } from "../../Redux/productsSlice";
import { useSelector } from "react-redux";
const Filters = () => {
  const dispatch = useDispatch();
  const valueBrands = useSelector((state) => state.arrayProducts.allBrands);

  const initialState = {};
  btnFiltros.map((item) => {
    initialState[item.label] = "";
  });
  const [selectFilter, setSelectFilter] = useState(initialState);
  const URL = "http://localhost:3001/products";

  const handleChange = async (e) => {
    setSelectFilter({ ...selectFilter, [e.target.name]: e.target.value });
    let query = "?";
    for (const [key, value] of Object.entries({
      ...selectFilter,
      [e.target.name]: e.target.value,
    })) {
      if (value) query += `${key}=${value}&`;
    }
    try {
      const { data } = await axios.get(URL + query);
      dispatch(getAllProducts(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-1/6 flex flex-col pl-12 pb-96 mr-12 border-r justify-evenly text-2xl bg-grey">
      <div className="mb-8">
        <h3 className="mb-2 font-semibold">Filtrar por marca</h3>

        <select
          name="brand"
          value={selectFilter[name]}
          onChange={(e) => {
            handleChange(e);
          }}
          className="text-white bg-black w-32 border-yellow border-4 "
        >
          <option value="">all</option>
          {valueBrands.map((brand, index) => {
            return (
              <option key={index} value={brand}>
                {brand}
              </option>
            );
          })}
        </select>
      </div>
      {btnFiltros.map((btn, index) => {
        return (
          <div className="mb-8">
            <h3 className="mb-2 font-semibold">{btn.title}</h3>
            <select
              key={index}
              name={btn.label}
              onChange={(e) => handleChange(e)}
              value={selectFilter[btn.label]}
              className="text-white bg-black w-32 border-yellow border-4 "
            >
              <option value="">{btn.default}</option>
              {btn.value.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
