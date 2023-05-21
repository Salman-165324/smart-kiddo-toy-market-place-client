import { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null)


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loader, setLoader] = useState(true); 


    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    // goggle signing 
    const googleSigning = () => {

        return signInWithPopup(auth, googleProvider)
    }

    // 
    const signUpWithEmailAndPass = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signWithEmailAndPass = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }

    const logout = () => {

        return signOut(auth) 
    }



    const authDetails = {

        user, 
        loader, 
        googleSigning,
        signUpWithEmailAndPass, 
        signWithEmailAndPass, 
        logout, 
        


    }
    return (
        <AuthContext.Provider  value = {authDetails} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;