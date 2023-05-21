import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { IoReorderFourSharp } from 'react-icons/io5';
import { AuthContext } from '../../Providers/AuthProviders';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {

        logout()
            .then(() => {
                console.log("Successfully logged out")
            }).catch((error) => {
                console.log(error)
            });

    }
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
                        <ul tabIndex={0} className="menu menu-compact dropdown-content top-20 left-4  mt-3 p-4 shadow space-y-2 font-semibold bg-accent text-neutral1  rounded-box w-52">
                            {navItems}
                            {/* Profile, login and logout for mobile */}
                            <div className='border-2 border-primary'></div>
                            {
                                user ?
                                    <div className='flex justify-start items-center pt-2 pb-1'>
                                        {user?.photoURL ?
                                            <div className="avatar mr-3 tooltip tooltip-bottom" data-tip={user?.displayName}>
                                                <div className="w-[35px] rounded-full border-2
                                    border-primary">
                                                    <img src={user?.photoURL} alt="User Profile Image" />
                                                </div>
                                            </div> :
                                            <div className="avatar placeholder tooltip tooltip-bottom" data-tip={user?.displayName}>
                                                <div className="bg-neutral-focus text-neutral-content rounded-full w-[52px] mr-3">
                                                    <span>You</span>
                                                </div>
                                            </div>
                                        }
                                        <button onClick={handleLogout} className="btn btn-outline  !text-neutral1 font-semibold !hover:bg-[#a03534] mr-3 btn-sm">Logout</button>
                                    </div> :
                                    <div>
                                        <button className='btn btn-warning bg-primary mr-3 btn-sm'>
                                            <Link to='/login'>Login</Link>
                                        </button>
                                    </div>
                            }
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

                    <ul className="menu menu-horizontal gap-6 text-neutral1 font-semibold">
                        {
                            navItems
                        }
                    </ul>

                </div>
                <div className="navbar-end hidden lg:flex">
                    {
                        user ?
                            <>
                                {user?.photoURL ?
                                    <div className="avatar mr-4 tooltip tooltip-bottom" data-tip={user?.displayName}>
                                        <div className="w-[36px] rounded-full border-[3px]
                                    border-primary">
                                            <img src={user?.photoURL} alt="User Profile Image" />
                                        </div>
                                    </div> :
                                    <div className="avatar placeholder tooltip tooltip-bottom" data-tip={user?.displayName}>
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-[52px] mr-4">
                                            <span>You</span>
                                        </div>
                                    </div>
                                }
                                <button onClick={handleLogout} className="btn btn-outline  !text-neutral1 font-semibold !hover:bg-[#a03534] mr-3 btn-sm	">Logout</button>
                            </> :
                            <div>
                                <button className='btn btn-warning bg-primary mr-3 btn-sm'>
                                    <Link to='/login'>Login</Link>
                                </button>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;