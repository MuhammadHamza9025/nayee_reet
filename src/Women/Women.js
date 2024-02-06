import React from 'react'

import WomenCollection from './WomenCollection'
import TrendingProducts from './TrendingProducts'
import ppp from '../Pics/we.png'
import wer from '../Pics/wer.png'
import we from '../Pics/we.png'
import w1 from '../Pics/w1.jpg'
import w2 from '../Pics/w2.jpg'
import w3 from '../Pics/w3.jpg'
import w4 from '../Pics/w4.jpg'
import w5 from '../Pics/w5.jpg'
import w6 from '../Pics/w6.jpg'

const Women = () => {
    return (
        <>

            <div className='bg-pink-400 flex justify-around pt-10'>
                <div className='text-white w-[50%] flex flex-col justify-center  items-center' >
                    <span className='text-center  text-xl italic'>Trend design </span>
                    <h1 className='text-center font-bold my-4  text-3xl sm:text-6xl'>WOMEN'S WEAR</h1>
                    <button className='bg-red-600 outline-none sm:p-2 p-1  w-[100px] sm:w-[140px] my-4 rounded'>Shop Now</button>
                </div>
                <div><img src={ppp} alt="" className='h-[200px] sm:h-[400px]' /></div>

            </div>

            <div className=' flex justify-center mt-10 flex-wrap'>
                <img src={w5} alt="" className=' h-[200px] sm:h-[400px] m-1 w-[200px] sm:w-[300px]' />
                <img src={w4} alt="" className=' h-[200px] sm:h-[400px] m-1 w-[200px] sm:w-[300px]' />
                <img src={w6} alt="" className=' h-[200px] sm:h-[400px] m-1 w-[200px] sm:w-[300px]' />
            </div>
            <div className=' flex justify-center flex-wrap'>
                <img src={w3} alt="" className='h-[200px] m-1 w-[200px] sm:w-[300px]' />
                <img src={w6} alt="" className='h-[200px] m-1 w-[200px] sm:w-[300px]' />
            </div>
            {/* <WomenCollection we={we} wer={we} ppp={ppp}></WomenCollection> */}
            <TrendingProducts></TrendingProducts>
        </>
    )
}

export default Women
