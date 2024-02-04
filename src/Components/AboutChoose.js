import React from 'react'
import about1 from '../Pics/about1.jpg'
import about4 from '../Pics/about4.jpg'
import about3 from '../Pics/about3.jpg'
import about2 from '../Pics/about2.jpg'

const AboutChoose = () => {

    const choose = [
        {
            name: ' So Beautiful , So Elegent  ',
            url: about1,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nemo officiis ipsum distinctio? Deserunt nobis maiores, deleniti molestias quam eius!'

        },
        {
            name: ' So Beautiful , So Elegent  ',
            url: about3,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nemo officiis ipsum distinctio? Deserunt nobis maiores, deleniti molestias quam eius!'

        },
        {
            name: ' So Beautiful , So Elegent  ',
            url: about2,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nemo officiis ipsum distinctio? Deserunt nobis maiores, deleniti molestias quam eius!'

        },
        {
            name: ' So Beautiful , So Elegent  ',
            url: about4,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nemo officiis ipsum distinctio? Deserunt nobis maiores, deleniti molestias quam eius!'

        },
    ]
    return (
        <>
            <div className='my-10'>
                <div className='  m-auto text-center'><span className='text-red-800'>Best Platform</span>
                    <h2 className='font-bold text-3xl'>Why Choose Us ?</h2>
                </div>

                <div className='flex justify-center my-[3em] flex-wrap '>
                    {
                        choose.map((item) => {
                            return (
                                <div className='flex bg-slate-100 p-4 w-[96%] sm:w-[500px] my-2 sm:m-[1em] justify-center '>
                                    <div className='h-[100px] w-[200px]'><img src={item.url} alt="" className='h-[100%] w-[100%] object-contain' /></div>
                                    <div className='flex flex-col mx-2 justify-center'>
                                        <span className='font-bold  text-sm sm:text-xl my-2'>{item.name}</span>
                                        <p className=' text-xs sm:text-sm'>{item.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )
}

export default AboutChoose
