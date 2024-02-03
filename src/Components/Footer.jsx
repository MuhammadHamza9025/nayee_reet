import React from 'react'
import { useState } from 'react'

const Footer = () => {

    return (
        <>
            <div className='bg-red-600 p-4 py-10 text-white flex justify-between '>
                <div className=''>
                    <h1 className='text-lg font-bold'>What to talk ?</h1>
                    <span className='text-sm'>Phone : 1234-89989709</span>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur..</p>
                </div>
                <div className=''>
                    <h3 className='text-xl font-bold my-2'>Our Company</h3>
                    <ul className='list-disc'>
                        <li className='text-sm'>Home</li>
                        <li className='text-sm'>Men</li>
                        <li className='text-sm'>Women</li>
                        <li className='text-sm'>Kids</li>
                    </ul>
                </div>
                <div className=''>
                    <h3 className='text-xl font-bold my-2'>Our Company</h3>
                    <ul className='list-disc'>
                        <li className='text-sm'>Home</li>
                        <li className='text-sm'>Men</li>
                        <li className='text-sm'>Women</li>
                        <li className='text-sm'>Kids</li>
                    </ul>
                </div>

                <div className='text-white m-2 flex flex-col ' >
                    <a href="#" class="fa fa-facebook" className=' h-[10px]'></a>
                    <a href="#" class="fa fa-linkedin" ></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-google"></a> </div>
            </div>
            <div className=' bg-black text-white p-3 flex justify-center '> <span className='text-center font-bold '>All Rights Reserved</span></div>

        </>
    )
}

export default Footer



