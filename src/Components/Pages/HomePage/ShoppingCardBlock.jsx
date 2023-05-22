import React, { useState } from 'react';

const ShoppingCardBlock = ({category}) => {

    const [product, setProduct] = useState()
    return (
        <div>
            <h1>{category}</h1>
        </div>
    );
};

export default ShoppingCardBlock;