import React, { useContext } from 'react'
import { apii } from '../Mens_Components/fakeapi'
import { ShopContext } from '../Context/Context'
import { Link } from 'react-router-dom'

const Apicall = () => {
    const { handleid } = useContext(ShopContext)
    return (
        <div className='flex flex-wrap  justify-center'>

            {apii.map((item) => {
                return (
                    <>
                        <Link to={`/product/${item.id}`}>
                            <div className="subapi" onClick={() => handleid(item.id)} key={item.id}>
                                <div className="item"><img src={item.url} alt="" /></div>
                                <div className="star"><i class="fa fa-star" ></i> <i class="fa fa-star" ></i><i class="fa fa-star" ></i><i class="fa fa-star" ></i></div>
                                <div className="tit"><b>{item.title}</b></div>
                                <div className="price">{`RS ${item.price}`}</div>
                            </div >
                        </Link>
                    </>
                )
            })}
        </div >
    )
}

export default Apicall
