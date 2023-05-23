import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';

const AllToys = () => {

    const [products, setProducts] = useState([]);
    const [inputValue, setInputValue] = useState('');


    const handleSearch = () => {

        fetch(`https://server-side-toy-marketplace.vercel.app/toysBySearch?inputText=${inputValue}`)
            .then(res => res.json())
            .then(data => {

                setProducts(data)
            })
    }

    useEffect(() => {

        fetch('https://server-side-toy-marketplace.vercel.app/toys')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])



    return (
        <div className='primary-container'>
            <h1 className='section-title'> All the toys</h1>
            <div className="form-control">
                <div className="input-group mt-10">
                    <input type="text" placeholder="Search…" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                        className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
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
                                    product={product}
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