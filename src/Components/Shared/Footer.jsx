import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Footer = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='primary-container'>
  
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img className='w-8 h-8 pr-1
                ' src={logo} alt="Company Logo with a light bulb" />
                            <span className="text-xl font-bold"><span className='text-black'>Smart</span><span className='text-accent'>Kiddo</span></span>
                        </a>
                        <p className="ml-8 font-semibold text-sm text-gray-500">Out Kids, Our Future</p>

                    </div>
                    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest mb-3">ADDRESS</h2>
                            <nav className="list-none mb-10">
                                <p className="mt-5 text-sm text-gray-500">123 ABC Street, City, Country</p>
                                <p className="mt-2 text-sm text-gray-500">Phone: 123-456-7890</p>
                                <p className="mt-2 text-sm text-gray-500">Email: info@smartkiddo.com</p>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">IMPORTANT LINKS</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800 " to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800 " to="/all-toys">All Toys</Link>
                                </li>
                                {
                                    user &&
                                    <>
                                        <li>
                                            <Link className="text-gray-600 hover:text-gray-800 " to="/my-toys">My Toys</Link>
                                        </li>
                                        <li>
                                            <Link className="text-gray-600 hover:text-gray-800 " to="/add-toys">Add A Toy</Link>
                                        </li>
                                    </>
                                }
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800 " to="/blog">Blog</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">TERMS AND CONDITIONS</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800 " to="/">FAQ</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800 " to="/">Terms and conditions</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800 " to="/">Our Commitments</Link>
                                </li>
                       
                            </nav>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT US</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800 " to="/">Who we are</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800 " to="/">Our Mission and Vision</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800 " to="/">Contact Us</Link>
                                </li>
                           
                            </nav>
                        </div>
                    </div>
                </div>
                <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Smart Kiddo —
                    <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Salman</a>
                </p>
            </footer>


        </div>
    );
};

export default Footer;