import React from 'react'
import '../App.css';


import pic1 from '../Pics/pic1.jpg'
import pic2 from '../Pics/pic2.png'
import Products from './Products';
import Seller from './Seller';
import Catalog from './Catalog';
import Timer from './Timer';
import Customers from './Customers';
import Footer from './Footer';

export default function Home() {
    return (
        <>

            <div className="main">
                <div className="pic1 x"> <img src={pic1} alt="" /></div>

                <div className="paraandpic">
                    <div className="para "><p>TRADITION <span>MEETS</span> FASHION</p>
                        <button>Explore</button></div>
                    <div className="anti hidden  sm:flex">
                        <img src={pic2} alt="" />
                    </div>
                </div>
            </div>
            <Products></Products>
            <Seller></Seller>
            <Catalog></Catalog>
            <Timer></Timer>
            <Customers></Customers>

        </>
    )
}
