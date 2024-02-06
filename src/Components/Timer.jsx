import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import pic1 from '../Pics/pic2.png'
import pic8 from '../Pics/pic8.jpg'
import deal from '../Pics/deal.png'



const Timer = () => {

    const [day, setday] = useState(0)
    const [hour, sethour] = useState(0)
    const [min, setmin] = useState(0)
    const [sec, setsec] = useState(0)
    const deadline = 'February, 30, 2025'
    const gettimer = () => {
        const time = Date.parse(deadline) - Date.now()
        setday(Math.floor(time / (1000 * 60 * 60 * 24)))
        sethour(Math.floor(time / (1000 * 60 * 60) % 24))
        setmin(Math.floor((time / 1000 / 60) % 60))
        setsec(Math.floor((time / 1000) % 60))
    }

    useEffect(() => {
        setInterval(() => {
            gettimer()
        }, 1000);
    }, [])
    return (
        <>
            <>
                <div className="maintimer">
                    <div className="pictimer"><img src={pic8} alt="" />  </div>
                    <div className="maindeal">
                        <div className="flex flex-col mt-20 ml-4  sm:w-[50%] sm:ml-[5em]"><h1 className=' mb-3 font-[Tienne]  text-4xl sm:text-5xl font-bold text-[#624630]' >Deal of the day</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente voluptas harum delectus explicabo ipsam vel eligendi officiis error labore, assumenda culpa accusamus, impedit maiores aliquid! Enim obcaecati exercitationem voluptatem.</p>
                            <div className="boxes">
                                <div className="bg-white h-[60px] w-[60px] flex flex-col items-center justify-center mx-1">
                                    <span className='font-bold text-3xl'>{
                                        day > 9 ? day : `0${day}`
                                    }</span>
                                    <p>Days</p>
                                </div>
                                <div className="bg-white h-[60px] w-[60px] flex flex-col items-center justify-center mx-1 "><span className='font-bold text-3xl'>{
                                    hour > 9 ? hour : `${day}`
                                }</span>
                                    <p >Hours</p></div>
                                <div className="bg-white h-[60px] w-[60px] flex flex-col items-center justify-center mx-1"><span className='font-bold text-3xl'>{min}</span><p className='text-xs'>Minutes</p></div>
                                <div className="bg-white h-[60px] w-[60px] flex flex-col items-center justify-center "><span className='font-bold text-3xl'>{
                                    sec > 9 ? sec : ` ${sec}`
                                }</span>
                                    <p className='text-xs'>Seconds</p></div>
                            </div>
                            <div className="shoo"><button>Shop Now</button></div>
                        </div>
                        <div className="hidden sm:flex items-end "><div className="pix"><img src={deal} alt="" className='mr-20' /></div></div>
                    </div>
                </div>
            </>

        </>
    )
}

export default Timer
