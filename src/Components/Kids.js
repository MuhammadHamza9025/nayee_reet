import React from 'react'
import lll from '../Pics/ll1-removebg-preview.png'
import ll1 from '../Pics/lll-removebg-preview.png'
import ll2 from '../Pics/ll2-removebg-preview.png'
import Apicall from './Apicall'
import WomenCollection from '../Women/WomenCollection'
import w1 from '../Pics/w1.jpg'
import w2 from '../Pics/w2.jpg'
import w3 from '../Pics/w3.jpg'
import w4 from '../Pics/w4.jpg'
import w5 from '../Pics/w5.jpg'
import w6 from '../Pics/w6.jpg'

const Kids = () => {
    return (
        <>
            <div className=' flex justify-center mt-10 flex-wrap'>
                <img src={w5} alt="" className=' h-[200px] sm:h-[400px] m-1 w-[110px] sm:w-[300px]' />
                <img src={w4} alt="" className=' h-[200px] sm:h-[400px] m-1 w-[110px] sm:w-[300px]' />
                <img src={w6} alt="" className=' h-[200px] sm:h-[400px] m-1 w-[110px] sm:w-[300px]' />
            </div>
            <div className=' flex justify-center flex-wrap'>
                <img src={w3} alt="" className='h-[200px] m-1 w-[200px] sm:w-[300px]' />
                <img src={w6} alt="" className='h-[200px] m-1 w-[200px] sm:w-[300px]' />
            </div>

            <h1 className='text-center  text-3xl sm:text-5xl my-16 font-bold'>Our Products</h1>
            <Apicall></Apicall>
            <div className='p-8 bg-red-500 flex justify-center my-16'>
                <span className=' text-white font-bold  text-lg sm:text-2xl'>Loving EveryThing ??? Rate Us Now !!!</span>
            </div>
            <h1 className='mx-6 text-3xl my-16 font-bold'>Our Categories</h1>

            <div className=' flex justify-center my-4 flex-wrap '>

                <div className=' border border-black p-10 mx-8 bg-slate-50'>
                    <span className='text-xl font-semibold p-6'>Baby Clothes</span>
                    <ul className='space-y-2 my-4'>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>


                    </ul>
                </div>
                <div className=' border border-black p-10 mx-8 bg-slate-50 m-2'>
                    <span className='text-xl font-semibold p-6'>Baby Clothes</span>
                    <ul className='space-y-2 my-4'>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>


                    </ul>
                </div>
                <div className=' border border-black p-10 mx-8 bg-slate-50 m-2'>
                    <span className='text-xl font-semibold p-6'>Baby Clothes</span>
                    <ul className='space-y-2 my-4'>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>


                    </ul>
                </div>
            </div>


        </>
    )
}

export default Kids
