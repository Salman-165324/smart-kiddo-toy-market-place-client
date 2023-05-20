import React from 'react';
import signupAnimation from '../../../assets/signupAnimation.json';
import Lottie from "lottie-react";

const Signup = () => {

    return (
        <div className='primary-container'>
            <div className="min-h-screen bg-primary rounded-2xl flex flex-col items-center">
                <h1 className='py-10 text-center text-4xl font-bold accent-text-color'>Welcome, Signup Please!</h1>
                <div className="hero-content mx-auto flex-col lg:flex-row-reverse lg:gap-10 items-center justify-center">
                    <div className="text-center lg:text-left">
                        <Lottie className='h-[500px]' animationData={signupAnimation} />
                    </div>
                    <div className="card flex-shrink-0 bg-white w-full max-w-sm shadow-2xl mb-10 lg:mb-0 ">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered border-[#272253]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered border-[#272253]" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white hover:bg-[#f7c12d] hover:border-[#d9b03d] border-[#d9b03d] bg-accent">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;