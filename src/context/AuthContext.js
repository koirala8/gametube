import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import {doc, setDoc} from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    async function signUp(email, password) {
        try {
            // Create user account
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            
            // Add user to Firestore database
            await setDoc(doc(db, 'users', email), {
                savedGames: []
            });
        } catch (error) {
            console.log(error);
            // Handle error
        }
    }
    

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ signUp, user, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function UserAuth() {
    return useContext(AuthContext);
}
