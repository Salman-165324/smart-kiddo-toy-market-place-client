import React, { useState } from 'react';

const AddToyForm = () => {
    const [pictureURL, setPictureURL] = useState('');
    const [name, setName] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [sellerEmail, setSellerEmail] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Read the form data
        const formData = {
            pictureURL,
            name,
            sellerName,
            sellerEmail,
            category,
            price,
            rating,
            quantity,
            description,
        };

        // Do something with the form data (e.g., send it to the server)
        console.log(formData);
    };

    return (

        <div className='primary-container'>
            <h2 className='section-title pb-3'>Add your toys</h2>
            <form onSubmit={handleSubmit} className=" max-w-sm sm:max-w-md xl:max-w-xl mx-auto bg-primary p-8 mt-8 rounded-md shadow-md">
                <div className='grid grid-cols-1 xl:grid-cols-2  gap-x-4'>
                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Picture URL:</label>
                        <input
                            type="text"
                            value={pictureURL}
                            onChange={(e) => setPictureURL(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Seller Name:</label>
                        <input
                            type="text"
                            value={sellerName}
                            onChange={(e) => setSellerName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Seller Email:</label>
                        <input
                            type="email"
                            value={sellerEmail}
                            onChange={(e) => setSellerEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Category:</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select a category</option>
                            <option value="Math Toys">Math Toys</option>
                            <option value="Language Toys">Language Toys</option>
                            <option value="Science Toys">Science Toys</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Price:</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Rating:</label>
                        <select
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select a rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">Available Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>


                </div>

                <div className="mb-6 w-full ">
                        <label className="block mb-2 font-semibold">Detail Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-base font-normal focus:ring-indigo-500 focus:border-indigo-500"
                        ></textarea>
                    </div>

                <div>
                    <button type="submit" className="w-full primary-button">
                        Submit
                    </button>
                </div>
            </form>
        </div>

    );
};

export default AddToyForm;
