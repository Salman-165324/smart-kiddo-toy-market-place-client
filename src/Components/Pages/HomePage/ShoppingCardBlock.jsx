import React, { useEffect, useState } from 'react';

const ShoppingCardBlock = ({category}) => {



    const [product, setProduct] = useState([]); 

    useEffect(() => {

        fetch(`http://localhost:5000/searchByCategory?category=${category}`)
            .then( res => res.json())
            .then( data => setProduct(data))

    }, [category])

    
    console.log(product)

    return (
        <div>
            <h1>{category}</h1>
        </div>
    );
};

export default ShoppingCardBlock;