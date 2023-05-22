import React, { useContext } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { toast } from 'react-toastify';
import Spinner from '../Components/Shared/Spinner';

const PrivateRoute = ({children}) => {

    const {loading, user} = useContext(AuthContext);

    const location = useLocation(); 


    if(loading){

        return <Spinner></Spinner>
    }

    if(user){
        
        return children;
    }

    if(!user){
        toast.warn('Please Login First', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
};

export default PrivateRoute;