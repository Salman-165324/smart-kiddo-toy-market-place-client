import React, { useState } from 'react';
import signupAnimation from '../../../assets/signupAnimation.json';
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';


const Signup = () => {

    const [errorText, setErrorText] = useState('');



    return (
        <div className='primary-container'>
            <div className=" bg-primary rounded-2xl flex flex-col items-center">
                <h1 className='pt-12 pb-4 text-center text-4xl font-bold accent-text-color'>Welcome, Signup Please!</h1>
                <div className="hero-content mx-auto flex-col xl:flex-row-reverse gap-14 sm:gap-10 items-center justify-center px-4">
                    <div className="text-center lg:text-left">
                        <Lottie className='sm:h-[500px] w-[400px]' animationData={signupAnimation} />
                    </div>
                    <div className="card flex-shrink-0 bg-neutral1 w-full max-w-sm shadow-2xl mb-10 lg:mb-0 ">
                        <div className="card-body">
                            <form >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email " placeholder="email" name="email" className="input bg-neutral1 input-bordered border-[#272253]" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input bg-neutral1 input-bordered border-[#272253]" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="primary-button">Login</button>
                                </div>
                                <div className="divider">OR</div>
                                <div className='flex gap-2 items-center justify-center px-4 py-2.5 border border-accent rounded-md'>
                                    <FcGoogle style={{ color: 'red' }} className='text-2xl' />
                                    <p className='grow-0'>Continue with Google</p>
                                </div>
                            </form>
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover font-semibold text-blue-700">Already a member? Please Login</Link>
                               
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;