import React from 'react';
import { Link } from 'react-router-dom';

const MyToyTableRow = ({product}) => {

    const { available_quantity, category, detail_description, name, picture_url, price, rating, seller, seller_email, _id } = product 
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture_url} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td>
                {seller}

            </td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{available_quantity}</td>
            <td>
                <Link to={`/updateToy/${_id}`}>
                    <button className='primary-button !btn-sm'>Update</button>
                </Link>
            </td>
            <td>
                <button className='primary-button !btn-sm'>Delete</button>
            </td>

        </tr>
    );
};

export default MyToyTableRow;