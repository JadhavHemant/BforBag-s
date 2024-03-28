import React from 'react'
import Product1 from './product-1.jpg'
const FeaturedProducts = () => {
    return (
        <>
            <div className='text-[30px] text-center font-bold p-4'>
                Latest Products
                <hr class="mx-auto w-40 h-2 bg-orange-500 border rounded-xl " />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 pt-4'>
                <div className='md:grid-flow-row p-4 border border-black rounded-[20px]'>
                    <img src={Product1} />
                    <div className='text-center'>Price : 500</div>
                </div>
                <div className='md:grid-flow-row p-4 border border-black rounded-[20px]'>
                    <img src={Product1} />
                    <div className='text-center'>Price : 500</div>
                </div>
                <div className='md:grid-flow-row p-4 border border-black rounded-[20px]'>
                    <img src={Product1} />
                    <div className='text-center'>Price : 500</div>
                </div>
                <div className='md:grid-flow-row p-4 border border-black rounded-[20px]'>
                    <img src={Product1} />
                    <div className='text-center'>Price : 500</div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProducts