import React from 'react'
import lll from '../Pics/lll.jpg'
import aboutpic from '../Pics/aboutpic.jpg'
import AboutChoose from './AboutChoose'
import About3rdPortion from './About3rdPortion'

const About = () => {
    return (
        <div className=' before:opacity-0 '>
            <div className='h-[100dvh] relative overflow-hidden'>

                <div className='h-[100%] w-[100%] absolute' ><img src={aboutpic} alt="" className='opacity-70 h-[100%] w-[100%]' /></div>

                <div className='absolute z-10 flex w-[98%] sm:w-[60%] h-[100%] flex-col p-4 justify-center'>
                    <h1 className=' text-4xl sm:text-6xl text-white font-bold'>NAYEE REET</h1>
                    <p className='text-gray-800 my-8 text-xs sm:text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatem deserunt iure sit quam minus quos sapiente, esse temporibus nam? Sapiente sit veritatis reprehenderit sed facere suscipit vero nulla voluptates nisi a, aperiam amet veniam corporis adipisci provident laboriosam, magni fugit exercitationem quisquam totam corrupti neque blanditiis dolore cum! Repudiandae aperiam fuga culpa, accusamus illum, impedit iusto ad nostrum placeat voluptate officia optio eligendi blanditiis quam deserunt doloribus, voluptatem dolores eum. Deserunt nam laudantium saepe sapiente, temporibus sit quas. Quibusdam fugiat tenetur laudantium recusandae aut impedit dolores excepturi autem fuga repudiandae quis harum magnam laboriosam, vel quisquam atque totam ex?</p>
                    <button className='bg-red-700 text-white w-[80px] text-xs sm:text-base sm:w-[120px] p-2 rounded'>Shop Now</button>
                </div>
            </div>
            <AboutChoose></AboutChoose>
            <About3rdPortion></About3rdPortion>

        </div>
    )
}

export default About
