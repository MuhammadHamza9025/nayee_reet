import React, { useState } from 'react'
import pic3 from '../Pics/pic3.jpg'
import Slider from 'react-slick'
import pic6 from '../Pics/pic6.jpg'
import pic4 from '../Pics/pic5.JPG'
import pic7 from '../Pics/pic7.JPG'
import pic11 from '../Pics/pic11.jpg'

const Catalog = () => {
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

            <div className="maincatelog">
                <div className="backimg"><img src={pic11} alt="" /></div>
                <h1 className=' font-bold text-4xl'>Our Cataloge</h1>

                <div className="map2 flex-wrap hidden lg:flex">

                    {productapi.map((items) => {
                        return (
                            <>
                                <div className="shade h-[200px]  sm:h-[330px]">
                                    <div className="image"><img src={items.url} alt="" /></div>
                                    <div className="rating"><span className="fa fa-star  "></span>
                                        <span class="fa fa-star checked" ></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></div>

                                    <div className="head">{items.title}.</div>
                                    <div className="price">{items.price}/- Rs</div>
                                </div>
                            </>
                        )

                    })}

                </div>



                <div className="carosal w-[90%] ">

                    <div className='kkk lg:hidden block mt-28'>

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



            </div>
        </>
    )
}

export default Catalog
