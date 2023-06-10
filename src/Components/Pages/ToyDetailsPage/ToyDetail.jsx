import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';

const ToyDetail = () => {

    useTitle('Toy Details');
    const product = useLoaderData();
    const { available_quantity, category, detail_description, name, picture_url, price, rating, seller, seller_email, _id } = product

    return (
        <div className='primary-container'>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src={picture_url}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{seller}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <Rating
                                        style={{ maxWidth: 110 }}
                                        value={rating}
                                        readOnly
                                    />
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed text-lg pb-5 border-b-2 border-gray-300 mb-5">
                                {detail_description}
                            </p>
                            <h3 className='text-lg font-semibold'>More Information:</h3>
                            <div className="mt-2 grid xl:grid-cols-2 gap-x-2">
                                
                                <p><span className='font-semibold'>Seller Name</span>: {seller}</p>
                                <p><span className='font-semibold'>Email</span>: {seller_email}</p>
                                <p><span className='font-semibold'>Price</span>: ${price}</p>
                                <p><span className='font-semibold'>Available Quantity</span>: {available_quantity}</p>
                            </div>
                      
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </section>

        </div>
    );
};

export default ToyDetail;