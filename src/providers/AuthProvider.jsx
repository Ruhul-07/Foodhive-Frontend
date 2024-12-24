import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // LogOut user
    const logOutUser = () => {
        return signOut(auth)
    }
    // user update Profile
    const updateUserProfile = (profileData) => {
        const currentUser = auth.currentUser;
        if (currentUser) {
          return updateProfile(currentUser, profileData);
        } else {
          throw new Error("No user is currently logged in.");
        }
      };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        logOutUser,
        updateUserProfile
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;