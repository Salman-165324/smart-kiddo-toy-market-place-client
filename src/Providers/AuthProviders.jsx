import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null)


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 


    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    // goggle signing 
    const googleSigning = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // 
    const signUpWithEmailAndPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signWithEmailAndPass = (email, password) => {

        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password)

    }

    const logout = () => {
        setLoading(true);

        return signOut(auth) 
    }



    const authDetails = {

        user, 
        loading, 
        googleSigning,
        signUpWithEmailAndPass, 
        signWithEmailAndPass, 
        logout, 



    }

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, currentUser => {

                setUser(currentUser);
                console.log(currentUser); 
                setLoading(false);
        
        return () => {

            unsubscribe(); 
        }
        })
    }, [auth])

    return (
        <AuthContext.Provider  value = {authDetails} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;