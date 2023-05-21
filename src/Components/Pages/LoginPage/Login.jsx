import React, { useContext, useState } from 'react';
import signupAnimation from '../../../assets/signupAnimation.json';
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Providers/AuthProviders';

const Login = () => {
    const [errorText, setErrorText] = useState('');
    const { googleSigning, signWithEmailAndPass } = useContext(AuthContext);


    const handleFormSubmission = e =>{
        setErrorText('')
        e.preventDefault(); 
        const form = e.target; 
        const email = form.email.value; 
        const password = form.password.value;

        if( email && password){

            signWithEmailAndPass(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setErrorText(''); 
                // ...
              })
              .catch((error) => {
                const errorMessage = error.message;
                console.log(error)
                setErrorText(errorMessage); 
              });
        }

    }

    const handleGoogleSignIn = () => {
        setErrorText('')
        googleSigning()
        .then((result) => {
      
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            // Handle Errors here.
            console.log(error);
            setErrorText(error.message)
            // ...
        });
    }
    return (
        <div className='primary-container'>
            <div className=" bg-primary rounded-2xl flex flex-col items-center">
                <h1 className='pt-12 pb-4 text-center text-4xl font-bold accent-text-color'>Welcome, Login Please!</h1>
                <div className="hero-content px-0 mx-auto flex-col xl:flex-row-reverse gap-14 sm:gap-10 items-center justify-center sm:px-4">
                    <div className="text-center lg:text-left">
                        <Lottie className='sm:h-[500px] w-[400px]' animationData={signupAnimation} />
                    </div>
                    <div className="card flex-shrink-0 bg-neutral1 w-full max-w-sm shadow-2xl mb-10 lg:mb-4 ">
                        <div className="card-body">
                            <form onSubmit={handleFormSubmission}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email " required placeholder="email" name="email" className="input bg-neutral1 input-bordered border-[#272253]" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input required name='password' type="password" placeholder="password" className="input bg-neutral1 input-bordered border-[#272253]" />

                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="primary-button">Login</button>
                                </div>
                                {
                                    errorText &&
                                    <label className="label mt-1 underline text-base">
                                        <p className="link link-hover font-semibold text-red-600">{errorText}</p>
                                    </label>

                                }
                            </form>

                            {/* Google signing */}
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleSignIn} className='btn bg-neutral1 accent-text-color flex gap-2 w-full items-center justify-center px-4 py-2.5 border border-accent rounded-md hover:bg-[#f5f2d1]'>
                                <FcGoogle style={{ color: 'red' }} className='text-2xl' />
                                <p className='grow-0'>Continue with Google</p>
                            </button>
                            
                            <label className="label">
                                <Link to='/signup' className="label-text-alt link link-hover font-semibold text-blue-700">New to our site? Please Signup</Link>
                               
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;