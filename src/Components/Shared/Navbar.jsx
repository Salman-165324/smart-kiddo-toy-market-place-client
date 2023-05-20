import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {

    const navItems =
        <>

            <Link to="/">Home</Link>
            <Link to="/all-toys">All Toys</Link>
            <Link to="/my-toys">My Toys</Link>
            <Link to="/add-toys">Add A Toy</Link>
            <Link to="/blog">Blog</Link>
            <Link></Link>

        </>
    return (
        <div className="navbar rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow space-y-4 font-semibold bg-[#272253] text-cyan-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl accent-text-colo">
                    <img className='w-6 h-6
                ' src={logo} alt="Company Logo with a light bulb" />
                    SmartKiddo</Link>
            </div>
            {/* Large Display nav items */}
            <div className="navbar-center hidden lg:flex font-semibold">

                <ul className="menu menu-horizontal gap-4 accent-text-color font-semibold">
                {
                    navItems
                }
                </ul>
      
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;