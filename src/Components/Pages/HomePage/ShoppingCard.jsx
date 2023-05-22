import React from 'react';
import { Rating } from '@smastrom/react-rating'

const ShoppingCard = ({ product }) => {
    const { available_quantity, category, detail_description, name, picture_url, price, rating, seller, seller_email, _id } = product
    return (
        <div className="card w-96 bg-primary shadow-xl">
            <figure><img src={picture_url} alt="Shoes" /></figure>
            <div className="card-body">
                <Rating
                    style={{ maxWidth: 140 }}
                    value={rating}
                    readOnly
                />
                <h2 className="mt-4 card-title">{name}</h2>

                <p className='text-lg'>
                    <span className='font-semibold mr-1'>Price:</span>
                    {`$${price}`}
                </p>

                <div className="card-actions justify-end">
                    <button className="primary-button">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCard;