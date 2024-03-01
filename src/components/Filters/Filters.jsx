import  btnFiltros from '../../../btnFiltros.json';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getAllProducts } from '../../Redux/productsSlice';

const Filters=()=>{
    const dispatch=useDispatch();
    

    const initialState={}
    btnFiltros.map((item)=>{ initialState[item.label]=''});    
    const [selectFilter, setSelectFilter] = useState(initialState);
    const URL = "http://localhost:3001/products";    

    const handleChange=async(e)=>{
        setSelectFilter({...selectFilter, [e.target.name]:e.target.value})     
        let query='?'
        for (const [key, value] of Object.entries({...selectFilter, [e.target.name]:e.target.value})) {
            if (value) query+=`${key}=${value}&`
            }
        try {
            const { data } = await axios.get(URL+query)     
            dispatch(getAllProducts(data))

                                          
        } catch (error) {
            console.log(error);
        }
        
    };
   

    //console.log(btnFiltros);
    return(
        <div>
            {
                btnFiltros.map((btn,index)=>{
                    return <select key={index} name={btn.label} onChange={(e)=>handleChange(e)} value={selectFilter[btn.label]}>
                        <option value=''>{btn.default}</option>
                        {
                            btn.value.map((item,index)=>{
                               return <option key={index} value={item}>{item}</option>
                            })
                        }
                    </select>
                })
            }           
            

        </div>
    )
};

export default Filters;