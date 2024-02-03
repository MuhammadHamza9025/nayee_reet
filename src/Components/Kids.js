import React from 'react'
import lll from '../Pics/ll1-removebg-preview.png'
import ll1 from '../Pics/lll-removebg-preview.png'
import ll2 from '../Pics/ll2-removebg-preview.png'
import Apicall from './Apicall'
import WomenCollection from '../Women/WomenCollection'

const Kids = () => {
    return (
        <>
            <WomenCollection we={ll1} wer={lll} ppp={ll2}></WomenCollection>

            <h1 className='text-center text-5xl my-16 font-bold'>Our Products</h1>
            <Apicall></Apicall>
            <div className='p-8 bg-red-500 flex justify-center my-16'>
                <span className=' text-white font-bold text-2xl'>Loving EveryThing ??? Rate Us Now !!!</span>
            </div>
            <h1 className='mx-6 text-3xl my-16 font-bold'>Our Categories</h1>

            <div className=' flex justify-center my-4'>

                <div className=' border border-black p-10 mx-8 bg-slate-50'>
                    <span className='text-xl font-semibold p-6'>Baby Clothes</span>
                    <ul className='space-y-2 my-4'>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>


                    </ul>
                </div>
                <div className=' border border-black p-10 mx-8 bg-slate-50'>
                    <span className='text-xl font-semibold p-6'>Baby Clothes</span>
                    <ul className='space-y-2 my-4'>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>
                        <li className='list-disc'>Napkins</li>


                    </ul>
                </div>
                <div className=' border border-black p-10 mx-8 bg-slate-50'>
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
