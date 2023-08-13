import React, { useEffect, useState } from 'react';
import ShoppingCard from './ShoppingCard';
import { toast } from 'react-toastify';
import useToyData from '../../../Hooks/useToyData';

const ShoppingCardBlock = ({ category }) => {



    // const [products, setProducts] = useState([]);

    // useEffect(() => {

    //     fetch(`https://toy-market-place-server-side.onrender.com/searchByCategory?category=${category}`)
    //         .then(res => res.json())
    //         .then(data => {
 
    //             setProducts(data)
    //         })

    // }, [category])

    const [toyData] = useToyData(category); 
    const products = toyData; 
    console.log(products); 

    return (
        <div>

            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6'>
                {
                    products.map(product => <ShoppingCard
                        key={product._id}
                        product = {product}
                    >

                    </ShoppingCard>)
                }
            </div>

        </div>
    );
};

export default ShoppingCardBlock;