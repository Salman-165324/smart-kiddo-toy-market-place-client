import React, { useEffect, useState } from 'react';
import ShoppingCard from './ShoppingCard';
import { toast } from 'react-toastify';

const ShoppingCardBlock = ({ category }) => {



    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/searchByCategory?category=${category}`)
            .then(res => res.json())
            .then(data => {
 
                setProducts(data)
            })

    }, [category])


    console.log(products)

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