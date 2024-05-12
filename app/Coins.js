import React from 'react'

const Coins = ({item}) => {
  return (
    <div className=' sm:grid-cols-4 h-[50px] mb-2 w-[80%] bg-black grid md:grid-cols-5 rounded-lg hover:scale-[1.10] mx-auto text-gray-300 font-mono  p-4'>
        <div className='items-center'>{item.rank}</div>
        <div className='gap-2 h-[25px] w-[25px] flex'><img src={item.icon}/>{item.symbol}</div>
        <div>{item.name}</div>
        <div>{item.id}</div>
        <div className='sm:hidden md:block'>{item.price}</div>
        </div>
  )
}

export default Coins