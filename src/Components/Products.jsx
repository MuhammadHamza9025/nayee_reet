import React, { useState } from 'react'

const Products = () => {


    const [productapi, setapi] = useState([
        {
            title: 'Hoodies',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchNggA3n2rPhnnD7_8QQdCBZxFpLTPIh5vw&usqp=CAU'
        },
        {
            title: 'Shawls',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoeYELxWU5cBl88uoEY5q5yw2KLuj5lXWGHw&usqp=CAU'
        },
        {
            title: 'Sweaters',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_7pLJWzqcwa0d46ud9vCgCNogzQb2q0JtNw&usqp=CAU'
        }
    ])
    return (
        <>
            <div className="productmain">

                <h1 className='text-4xl font-bold'>Our Products</h1>
                <div className="maping">

                    {
                        productapi.map((items) => {
                            return (
                                <>
                                    <div className="mainpic relative flex justify-center items-end">
                                        <div className="picture"><img src={items.url} alt="" /></div>
                                        <div className=" absolute  mb-4 w-[70px] sm:w-[130px] sm:p-2 p-1 bg-[#f8e6d0] flex justify-center items-center font-semibold"><p className='text-xs sm:text-base'>{items.title}</p></div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Products
