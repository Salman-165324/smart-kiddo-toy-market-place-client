import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import MyToyTableRow from './MyToyTableRow';
import { data } from 'autoprefixer';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'


const MyToys = () => {
    const [products, setProducts] = useState([]);
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;



    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/deleteAToy?id=${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            fetch(`http://localhost:5000/searchBySeller?email=${userEmail}`)
                                .then(res => res.json())
                                .then(data => setProducts(data))
                        }
                    })




            }
        })


    }

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
                                    handleDelete={handleDelete}
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