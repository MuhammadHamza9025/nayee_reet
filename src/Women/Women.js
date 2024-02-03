import React from 'react'

import WomenCollection from './WomenCollection'
import TrendingProducts from './TrendingProducts'
import ppp from '../Pics/we.png'
import wer from '../Pics/wer.png'
import we from '../Pics/we.png'

const Women = () => {
    return (
        <>

            <div className='bg-pink-400 flex justify-around'>
                <div className='text-white w-[50%] flex flex-col justify-center  items-center' >
                    <span className='text-center  text-xl italic'>Trend design </span>
                    <h1 className='text-center font-bold my-4 text-6xl'>WOMEN'S WEAR</h1>
                    <button className='bg-red-600 outline-none p-2 w-[140px] my-4 rounded'>Shop Now</button>
                </div>
                <div><img src={ppp} alt="" /></div>

            </div>
            <h1 className='text-center text-4xl  my-8 font-bold  mt-[3em]'>Winter Collection</h1>
            <WomenCollection we={we} wer={wer} ppp={ppp}></WomenCollection>
            <TrendingProducts></TrendingProducts>
        </>
    )
}

export default Women
