import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { IoReorderFourSharp } from 'react-icons/io5';

const Navbar = () => {

    const navItems =
        <>

            <Link className=' hover:text-primary' to="/">Home</Link>
            <Link className=' hover:text-primary' to="/all-toys">All Toys</Link>
            <Link className=' hover:text-primary' to="/my-toys">My Toys</Link>
            <Link className=' hover:text-primary' to="/add-toys">Add A Toy</Link>
            <Link className=' hover:text-primary' to="/blog">Blog</Link>
            <Link></Link>

        </>
    return (
        <div className='bg-accent'>
            <div className="navbar secondary-container h-24 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-primary font-extrabold text-2xl mt-1">
                          <IoReorderFourSharp></IoReorderFourSharp>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content top-20 left-4  mt-3 p-4 shadow space-y-4 font-semibold bg-accent text-neutral1  rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl accent-text-colo hover:bg-none">
                        <img className='w-8 h-8 pr-1
                ' src={logo} alt="Company Logo with a light bulb" />
                        <span className='text-primary'>Smart</span> <span className='text-neutral1'>Kiddo</span>
                        </Link>
                </div>
                {/* Large Display nav items */}
                <div className="navbar-center hidden lg:flex font-semibold">

                    <ul className="menu menu-horizontal gap-4 text-neutral1 font-semibold">
                        {
                            navItems
                        }
                    </ul>

                </div>
                <div className="navbar-end">
                    <Link to='/login' className="primary-button">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;