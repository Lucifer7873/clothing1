import React, { useEffect, useState } from "react";
import Offer from "../Components/Swipers/Offer";
import Nissbody from "../Components/NisseProduct/Nissbody";
import ProductsSwiper from "../Components/Swipers/ProductsSwiper";
import axios from "axios";

const Women = () => {
  const [data,setData]= useState([])
  const fetchMenData = async()=>{
    const res = await axios.get('http://localhost:3000/women')
     setData(res.data)
  }

  useEffect(()=>{
    fetchMenData()

  },[])
 
  return (
    <div className=" p-0 flex flex-col items-start  w-full">
      {/* <Offer />
      <Nissbody /> */}
      <div className="w-full h-auto flex justify-center mb-4" id="homeShop">
      <div className="w-11/12">
        <ProductsSwiper products={data} title={'Women'} type={'women'}/>
        <ProductsSwiper products={data} title={''} type={'women'}/>



        </div>
        </div>
    </div>
  );
};

export default Women;
