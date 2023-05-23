import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import MyToyTableRow from './MyToyTableRow';

const MyToys = () => {
    const [products, setProducts] = useState([]);
    const {user} = useContext(AuthContext);
    const userEmail = user?.email; 

    useEffect(() => {

        fetch(`http://localhost:5000/searchBySeller?email=${userEmail}`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [userEmail])
    console.log(products);
    return (
        <div className='primary-container'>
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
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                products.map(product => <MyToyTableRow

                                    key={product._id}
                                    product={product}
                                >

                                </MyToyTableRow>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;