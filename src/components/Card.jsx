import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";


const Card = ({data,currId,setCurrId,total}) => {

  const increment =()=>{
    setCurrId((currId % total) + 1);
  }

  const decrement =()=>{
    setCurrId(currId === 1 ? 5 : currId - 1);
  }

  const random =()=>{
    let ranId = Math.floor(Math.random() * total)+1;
    while(ranId==currId){
      ranId = Math.floor(Math.random() * total)+1;
    }
    setCurrId(ranId);
  }

  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md" >
      <div className="flex flex-col md:relative">

        <div className="absolute top-[-7rem] z-10 mx-auto ">
          <img src={data.image} alt="" className="aspect-square rounded-full w-[140px] h-[140px] z-25" />
          <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
        </div>

        <h2 className="font-bold text-2xl capitalize leading-3 text-center mt-7">{data.name}</h2>

        <h5 className="text-violet-300 text-sm uppercase text-center mt-4">{data.job}</h5>

        <div className="text-violet-400 mx-auto mt-5"><FaQuoteLeft /></div>

        <p className="text-center mt-4 text-slate-500 ">{data.text}</p>

        <div className="text-violet-400 mx-auto mt-5"><FaQuoteRight /></div>

        <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">
          <button  className="cursor-pointer hover:text-violet-500" onClick={decrement} ><FiChevronLeft /></button>
          <button className="cursor-pointer hover:text-violet-500" onClick={increment}><FiChevronRight /></button>
        </div>

        <button onClick={random} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-6">Surprise Me </button>


      </div>
    </div>
  )
}

export default Card