import { useContext, createContext, useState } from "react";
import { apii } from "../Mens_Components/fakeapi";

export const ShopContext = createContext(null)


export const Contextpr = (props) => {
    const [cart, setcart] = useState([])


    const handleid = (id) => {
    }

    const addtocart = (items) => {

        setcart((pre) => [...pre, items])
        console.log(cart)
    }

    const removetocart = (id) => {
        console.log('deleted')
        setcart(cart.filter((e) => e.id !== id))
    }

    const ContextValue = { handleid, apii, addtocart, cart, removetocart }
    return (

        <ShopContext.Provider value={ContextValue}>

            {props.children}
        </ShopContext.Provider>
    )




}