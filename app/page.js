'use client'
import Axios  from "axios";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Coins from "./Coins";

export default function Home() {
  const [word, setword] = useState("")
  const search=(event)=>{
    event.current.targetvalue
  }
    const inp = useRef(null)
   const [datas, setdatas] = useState([])
  useEffect(() => {
    Axios.get("https://openapiv1.coinstats.app/coins",{
      headers:{
        'X-API-KEY': 'xDs5XD60QPLAIRF5klewFCqz2VNwkxdfilDw6Bdcl7c='
      }
    }).then(
    (response) => {
      const obj=response.data.result
      console.log(obj[0])
      setdatas(obj)
      }
    );
  }, []);
  const filtered=datas.filter((coin)=>{
    return coin.name.toLowerCase().includes(word.toLowerCase())
  })
  return (
    <div className="bg-gray-900 ">
    <nav className="bg-gray-900 h-[100px] flex justify-center items-center">
      <h className='text-cyan-400 text-4xl font-extrabold'>Crypto</h>
      <h className='text-white text-4xl font-extrabold'>DashBoard</h>
      <div className="ml-6">
      <input ref={inp} onChange={(event)=>{setword(event.target.value)}} className="h-[40px] p-2 rounded-l-xl" placeholder="Enter"></input>
      <button className="text-purple-100 border-y-2  font-mono font-bold bg-black p-2 h-[41px] rounded-r-xl" onClick={search}>Search</button></div> 
    </nav>
    <div className='mb-2 sm:grid-cols-4 font-extrabold text-xl h-[50px] bg-gray-950  grid md:grid-cols-5 w-[80%] rounded-sm mx-auto text-gray-300 font-mono p-4'>
        <div>Rank</div>
        <div>Coin</div>
        <div>Name</div>
        <div>Id</div>
        <div className="sm:hidden md:block">Price</div>
        </div>
    {filtered.map((coin)=>{
      return <Coins item={coin} />
    })}
    </div>
  );
}
