import React from 'react'
import { useState } from 'react'

const Footer = () => {

    return (
        <>
            <div className='bg-red-600 p-4 py-10 text-white flex space-x-4 flex-wrap sm:flex-nowrap sm:justify-evenly  justify-between '>
                <div className=''>
                    <h1 className=' text-base sm:text-lg font-bold'>What to talk ?</h1>
                    <span className='  text-xs sm:text-sm'>Phone : 1234-89989709</span>
                    <p className='  text-xs sm:text-sm'>Lorem ipsum </p>
                </div>
                <div className=''>
                    <h3 className=' text-sm sm:text-xl font-bold my-2'>Our Company</h3>
                    <ul className='list-disc'>
                        <li className='  text-xs sm:text-sm'>Home</li>
                        <li className='  text-xs sm:text-sm'>Men</li>
                        <li className='  text-xs sm:text-sm'>Women</li>
                        <li className='  text-xs sm:text-sm'>Kids</li>
                    </ul>
                </div>
                <div className='hidden sm:block'>
                    <h3 className='  text-sm sm:text-xl font-bold my-2'>Our Company</h3>
                    <ul className='list-disc'>
                        <li className=' text-xs sm:text-sm'>Home</li>
                        <li className=' text-xs sm:text-sm'>Men</li>
                        <li className=' text-xs sm:text-sm'>Women</li>
                        <li className=' text-xs sm:text-sm'>Kids</li>
                    </ul>
                </div>


            </div>
            <div className='text-white p-4 flex bg-red-600  flex-row space-x-6 justify-center  ' >
                <a href="#" className="fa fa-facebook text-xl text-black"></a>
                <a href="#" className="fa fa-linkedin text-xl text-black" ></a>
                <a href="#" className="fa fa-instagram text-xl text-black"></a>
                <a href="#" className="fa fa-google text-xl text-black"></a> </div>
            <div className=' bg-black text-white p-3 flex justify-center '> <span className='text-center font-bold  sm:text-sm  text-xs'>All Rights Reserved</span></div>

        </>
    )
}

export default Footer



