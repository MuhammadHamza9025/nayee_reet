import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/Context'

const Navbar = () => {
    const { cart } = useContext(ShopContext)

    const [show, setshow] = useState(false)
    const [navcol, setnavcol] = useState('Home')

    const navbar = () => {
        setshow(!show)

    }





    const [nav, setnav] = useState(false)
    const [manu, setmanu] = useState('Home')

    const Navigation = () => {
        setnav(!nav)
    }
    return (
        <>
            {/* <div className="navigation relative">
                <div className="logo">Nayee <span>Reet</span></div>
                <div className="navbar">

                    <ul className={show ? 'ul' : "hide"}>
                        <li ><Link to='/'>Home</Link></li>
                        <li><Link to='/Mens'>Men</Link></li>
                        <li><Link to='/Women'>Women</Link></li>
                        <li> <Link to='/kids'>Kids</Link>      </li>
                        <li> <Link to='/about'>About us</Link>      </li>
                    </ul>

                    <div className="hamburger" onClick={navbar}>
                        <div className="ham"></div>
                        <div className="ham"></div>
                        <div className="ham"></div>
                    </div>



                </div>





                <div className="cart flex   w-[300px] justify-around">

                    <div className=' flex'>
                        <Link to={'/cart'}> <i className="fa fa-shopping-cart"></i></Link>
                        <sup className='bg-red-500 h-[20px] w-[20px] rounded-[50%] flex justify-center items-center text-white'>{cart.length}</sup>
                    </div>
                    <div className="loginbtn"><button>Login</button></div>
                </div>
            </div> */}




            <div className='flex justify-between sm:justify-around items-center border-b border-gray-500-700 sm:p-4 p-1'>
                <div className='sm:space-x-4 space-x-2 flex items-center order-1 sm:order-1'>
                    <div className="logo">Nayee <span>Reet</span></div>
                </div>
                <div className={`sm:flex  order-3  sm:order-2 ${nav && `border-2 p-1 rounded-lg`}`}>
                    <div className='sm:hidden cursor-pointer' onClick={Navigation}>
                        <div className='w-[27px] h-[3px] m-1 bg-black '></div>
                        <div className='w-[27px] h-[3px] m-1 bg-black '></div>
                        <div className='w-[27px] h-[3px] m-1 bg-black '></div>
                    </div>
                    <ul className={`   sm:flex   sm:space-x-6  ${nav ? 'new' : 'hidden'}`}  >
                        <li className={`font-semibold cursor-pointer mx-6 sm:mx-0 my-2 sm:my-0 p-1 ${manu === 'Home' ? 'border-b-2 border-red-600 text-red-900 font-semibold' : ''}`} onClick={() => setmanu('Home')}> <Link to={'/'} onClick={() => setnav(false)}>Shop</Link > </li>
                        <li className={`font-semibold cursor-pointer mx-6 sm:mx-0 my-2 sm:my-0 p-1 ${manu === 'Men' ? 'border-b-2 border-red-600 text-red-900 font-semibold' : ''}`} onClick={() => setmanu('Men')}> <Link to={"/Mens"} onClick={() => setnav(false)}>Men</Link > </li>
                        <li className={`font-semibold cursor-pointer mx-6 sm:mx-0 my-2 sm:my-0 p-1 ${manu === 'Women' ? 'border-b-2 border-red-600 text-red-900 font-semibold' : ''}`} onClick={() => setmanu('Women')}> <Link to={'/Women'} onClick={() => setnav(false)}>Women</Link> </li>
                        <li className={`font-semibold cursor-pointer mx-6 sm:mx-0 my-2 sm:my-0 p-1 ${manu === 'Kids' ? 'border-b-2 border-red-600 text-red-900 font-semibold' : ''}`} onClick={() => setmanu('Kids')}> <Link to={'/Kids'} onClick={() => setnav(false)}>Kids</Link> </li>
                        <li className={`font-semibold cursor-pointer mx-6 sm:mx-0 my-2 sm:my-0 p-1 ${manu === 'about' ? 'border-b-2 border-red-600 text-red-900 font-semibold' : ''}`} onClick={() => setmanu('about')}> <Link to={'/about'} onClick={() => setnav(false)}>About</Link> </li>
                    </ul>
                </div>
                <div className='flex space-x-4 sm:space-x-8  order-2 sm:order-3' >


                    <button className=' sm:w-[100px] rounded-full font-semibold border border-gray-500 w-[60px] text-sm p-1 sm:text-balance hover:bg-slate-200'> <Link to={'/login'}>Login</Link> </button>
                    <div className=' flex'>
                        <Link to={'/cart'}> <i className="fa fa-shopping-cart"></i></Link>
                        <sup className='bg-red-500 h-[20px] w-[20px] rounded-[50%] flex justify-center items-center text-white'>{cart.length}</sup>                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar
