import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({product}) => {
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
                    <Link to={`/toyDetails/${_id}`}>
                        <button className='primary-button !btn-sm'>View Details</button>
                    </Link>
                </td>
       
            </tr>
    );
};

export default TableRow;