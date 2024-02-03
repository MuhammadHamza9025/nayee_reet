import React from 'react'


const WomenCollection = (props) => {
    console.log(props)
    return (
        <>


            <div className='flex justify-center items-center   w-[60%] m-auto  my-6'>
                <div className='h-[400px]   bg-red-500 overflow-hidden'><img src={props.ppp} alt="" /></div>
                <div className='flex flex-col overflow-hidden mx-6 '>
                    <div className='h-[180px]  border-red-400 w-[150px ] bg-red-800   overflow-hidden my-2'><img src={props.we} alt="" className='' /> </div>
                    <div className='h-[180px]  w-[200px ]  overflow-hidden object-center object-cover bg-slate-400'><img src={props.wer} alt='' className='h-[100%] ' /></div>

                </div>
            </div>
        </>
    )
}

export default WomenCollection
