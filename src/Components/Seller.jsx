import React from 'react'
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import pic1 from '../Pics/pic2.png'
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
const Seller = () => {
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
                    slidesToShow: 1.6,
                    slidesToScroll: 1.6,
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


    const [productapi, setapi] = useState([
        {
            title: 'Hoodies',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchNggA3n2rPhnnD7_8QQdCBZxFpLTPIh5vw&usqp=CAU',

            title: 'Lorem ipsum dolor site',
            class: 'fa fa-star',
            price: 1800.00,
        },
        {
            title: 'Shawls',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoeYELxWU5cBl88uoEY5q5yw2KLuj5lXWGHw&usqp=CAU',
            title: 'Lorem ipsum dolor site',
            class: 'fa fa-star',
            price: 1800.00,
        },
        {
            title: 'Sweaters',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_7pLJWzqcwa0d46ud9vCgCNogzQb2q0JtNw&usqp=CAU',
            title: 'Lorem ipsum dolor site',
            class: 'fa fa-star',
            price: 1800.00,
        },
        {
            title: 'Hoodies',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchNggA3n2rPhnnD7_8QQdCBZxFpLTPIh5vw&usqp=CAU',
            title: 'Lorem ipsum dolor site',
            class: 'fa fa-star',
            price: 1800.00,
        },
        {
            title: 'Shawls',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoeYELxWU5cBl88uoEY5q5yw2KLuj5lXWGHw&usqp=CAU',
            title: 'Lorem ipsum dolor site',
            class: 'fa fa-star',
            price: 1800.00,
        },
        {
            title: 'Sweaters',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_7pLJWzqcwa0d46ud9vCgCNogzQb2q0JtNw&usqp=CAU',
            title: 'Lorem ipsum dolor site',
            class: 'fa fa-star',
            price: 1800.00,
        },
        {
            title: 'Hoodies',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchNggA3n2rPhnnD7_8QQdCBZxFpLTPIh5vw&usqp=CAU',
            title: 'Lorem ipsum dolor site',
            class: 'fa fa-star',
            price: 1800.00,
        },
        {
            title: 'Shawls',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoeYELxWU5cBl88uoEY5q5yw2KLuj5lXWGHw&usqp=CAU',
            title: 'Lorem ipsum dolor site',
            class: 'fa fa-star',
            price: 1800.00,
        },
        {
            title: 'Sweaters',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_7pLJWzqcwa0d46ud9vCgCNogzQb2q0JtNw&usqp=CAU',
            title: 'Lorem ipsum dolor site',
            class: 'fa fa-star',
            price: 1800.00,
        }
    ])
    return (
        <>
            <div className="mainseller flex flex-col bg-[#8d5f3d] bg-opacity-90 ">

                <div className="text m-auto flex flex-col items-center">
                    <span className='w-[100%]'>Best Seller Product</span>
                    <p className='w-[90%] text-xs sm:text-base sm:w-[50%]'>Lorem, ipsum dolor sit amet consectetur ad
                        ipisicing elit. Earum exercitationem tempore similique fugiat cupiditate
                        tenetur quisquam nisi quod, voluptatem
                        luptates ipsum.</p>


                </div>
                <div className="carosal w-[90%]">

                    <div className='kkk'>

                        <Slider {...settings}>
                            {
                                productapi.map((items, key) => {
                                    return (

                                        <>
                                            <div className='selpic border h-[300px] w-[260px] sm:h-[340px] sm:w-[300px]'>


                                                <img src={items.url} alt="" key={key} className='h-[200px] sm:h-[230px]' />
                                                <div className="rating">
                                                    <span class="fa fa-star checked" ></span>                <span class="fa fa-star checked" ></span>                <span class="fa fa-star checked" ></span>

                                                </div>
                                                <div className="parag"><p>{items.title}</p></div>
                                                <div className="prices">{items.price}/-RS</div>

                                            </div>
                                        </>
                                    )
                                })
                            }
                        </Slider>
                    </div>

                </div>
                {/* <button className='classis'>See More</button> */}
            </div>






        </>
    )
}

export default Seller
