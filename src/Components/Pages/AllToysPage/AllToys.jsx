import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';

const AllToys = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])



    return (
        <div className='primary-container'>
            <h1 className='section-title'> All the toys</h1>
            <div className='mt-10'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Toy</th>
                                <th>Seller</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                products.map(product => <TableRow
                                
                                    key={product._id}
                                    product = {product}
                                >

                                </TableRow>)
                            }
              
                        </tbody>
        

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;