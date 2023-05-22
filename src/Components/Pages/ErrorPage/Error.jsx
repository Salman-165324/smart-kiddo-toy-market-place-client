import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorPic from '../../../assets/error.jpg'
const Error = () => {
    const error = useRouteError();

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content justify-center items-center flex-col lg:flex-row">
                <img src={errorPic} className="max-w-[350px] overflow-hidden rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold">Sorry Something Went Wrong!</h1>
                    <p className="py-6"><i>{error.statusText || error.message}</i></p>
                    <Link to ='/'> <button className="primary-button">Get Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;