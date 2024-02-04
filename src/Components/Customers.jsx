import React, { useState } from 'react'
import pic3 from '../Pics/pic3.jpg'
import pic9 from '../Pics/pic9.jpg'
import pic4 from '../Pics/pic4.JPG'
import Slider from "react-slick";

import pic6 from '../Pics/pic6.jpg'
import pic5 from '../Pics/pic5.JPG'
import pic7 from '../Pics/pic7.JPG'



const Customers = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2.5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1.3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1.7,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1.3
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1.3
                }
            }
        ]
    };

    const [pic, setpic] = useState([
        {
            url: pic3,

        },
        {
            url: pic5,


        },
        {
            url: pic7,


        },
        {
            url: pic6,


        },
        {
            url: pic4,


        }
    ])
    const [cusapi, setcusapi] = useState([
        {
            heading: 'Comfortable and met all my expectations',
            para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ipsam deserunt veniam.',
            pic: pic3,
            name: 'Muhammad Hamza',
            customer: 'Customer',
        },
        {
            heading: 'Comfortable and met all my expectations',
            para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ipsam deserunt veniam.',
            pic: pic4,
            name: 'Muhammad Hamza',
            customer: 'Customer',
        },
    ])
    return (
        <>
            <div className="customersmain">
                <div className="cusimage ">   <img src={pic9} alt="" /></div>
                <div className="maincus ">
                    <h1 className='font-bold text-2xl sm:text-4xl '>TESTIMONIALS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, nemo!</p>
                    <div className="mapcus flex-nowrap hidden sm:flex  ">
                        {
                            cusapi.map((val) => {
                                return (
                                    <>
                                        <div className="mainbox">
                                            <div className="headin">{val.heading}</div>
                                            <div className="para text-xs">{val.para}</div>
                                            <div className="profile"><div className="pro"><img src={val.pic} alt="" /></div></div>
                                            <div className="name">{val.name}</div>
                                            <div className="work">{val.customer}</div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>

                </div>


                <div className="carosal w-[90%] sm:hidden ">

                    <div className='kkk mt-[9em]'>

                        <Slider {...settings}>
                            {
                                cusapi.map((val) => {
                                    return (
                                        <>
                                            <div className="mainbox mx-10  w-[260px] h-[340px]">
                                                <div className="headin">{val.heading}</div>
                                                <div className=" text-xs p-0 m-0">{val.para}</div>
                                                <div className="profile"><div className="pro"><img src={val.pic} alt="" /></div></div>
                                                <div className="name">{val.name}</div>
                                                <div className="work my-0">{val.customer}</div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </Slider>
                    </div>

                </div>

            </div>


            {/* <div className="mainfooter">
                {pic.map((val) => {
                    return (
                        <>
                            <div className="fpic"><img src={val.url} alt="" /></div>
                        </>
                    )
                })}
            </div> */}

        </>
    )
}

export default Customers
