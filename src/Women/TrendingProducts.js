import React, { useState } from 'react'
import { apii } from '../Mens_Components/fakeapi'
import wer from '../Pics/wer.png'
import wr from '../Pics/we.png'
import Apicall from '../Components/Apicall'

const TrendingProducts = () => {
    const [btn, setbtn] = useState('Featured')
    return (
        <>
            <h1 className='text-center text-4xl  my-8 font-bold  mt-[3em]'>Trending Products</h1>
            <div className='w-[60%] m-auto my-6 flex justify-center  space-x-4'>
                <button className={`w-[130px] p-2  ${btn === 'Featured' ? 'bg-red-600 text-white' : 'bg-slate-400'}`} onClick={() => setbtn('Featured')}>Featured</button>
                <button className={`w-[130px] p-2  ${btn === 'new' ? 'bg-red-600 text-white' : 'bg-slate-400'}`} onClick={() => setbtn('new')}> New Arrival</button>
                <button className={`w-[130px] p-2  ${btn === 'bestseller' ? 'bg-red-600 text-white' : 'bg-slate-400'}`} onClick={() => setbtn('bestseller')}> Best Seller</button>
            </div >

            <Apicall></Apicall>


            <div className='w-[90%] m-auto my-10 flex justify-center space-x-4 flex-wrap'>
                <div className='h-[300px] w-[500px] bg-yellow-500 flex justify-center items-center'>
                    <span className='mx-2 text-amber-900  font-bold text-4xl'>Get To Know Us More !!!!!</span>
                    <img src={wer} alt="" className='h-[100%]' />
                </div>
                <div className='h-[300px] w-[500px] bg-pink-400 flex justify-center items-center'>
                    <span className='mx-2 text-amber-900  font-bold text-4xl'>Get To Know Us More !!!!!</span>
                    <img src={wr} alt="" className='h-[100%]' />
                </div>

            </div>
        </>
    )
}

export default TrendingProducts
