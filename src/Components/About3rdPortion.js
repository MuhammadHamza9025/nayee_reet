import React from 'react'
import aboutimg from '../Pics/aboutimg.jpg'

const About3rdPortion = () => {
    return (
        <>
            <div className='w-[80%] m-auto flex sm:justify-between flex-col sm:flex-row  mt-20 p-4'>
                <div className='relative'><div className='sm:h-[300px] sm:w-[300px] h-[200px] w-[200px] bg-gray-500  border rotate-12 bg-opacity-30 absolute z-0 top-0 left-0'></div><img src={aboutimg} className='sm:h-[300px] sm:w-[300px] h-[200px] w-[200px] object-center object-cover relative z-90' alt="" /></div>
                <div className=' w-[100%] sm:w-[40%] my-[4em] sm:my-0 flex flex-col'><h1 className='text-2xl font-bold mb-4'>Get the Best Design For your Tradition </h1>
                    <div >
                        <span className='leading-[0.02] text-sm '> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit iure consequatur numquam neque pariatur omnis nihil ipsam eum maxime nesciunt!</span>
                        <ul className='my-4 space-y-3 text-sm mx-3'>
                            <li className='list-disc'>Lorem ipsum dolor sit amet.</li>
                            <li className='list-disc'>Lorem ipsum dolor sit amet.</li>
                            <li className='list-disc'>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                    <button className='bg-red-700 text-white w-[120px] p-2 rounded'>Shop Now</button>

                </div>


            </div >


            <blockquote class=" my-6 mt-0 sm:my-14  text-sm sm:text-lg italic font-semibold text-gray-900 dark:text-white  flex justify-between flex-col w-[96%] sm:w-[50%] m-auto ">
                <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <p className='text-gray-400 font-semibold'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt error explicabo illum odio? Dolores modi, nulla reprehenderit ipsam odit esse laboriosam eaque id voluptates quasi natus molestias quod incidunt voluptas?"</p>
            </blockquote>
        </>
    )
}

export default About3rdPortion
