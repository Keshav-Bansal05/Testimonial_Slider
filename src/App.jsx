import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import reviews from './utils/data'

const App = () => {
  const [currId, setCurrId] = useState(1);

  const [currData, setCurrData] = useState(reviews.filter((data)=>{return data.id==currId})[0]);
  useEffect(() => {
    setCurrData(reviews.filter((data) =>{return data.id==currId})[0]);
  }, [currId]);
  
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <Header/>
      <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
      <Card data={currData} currId={currId} setCurrId={setCurrId} total={reviews.length}></Card>
    </div>
  )
}

export default App