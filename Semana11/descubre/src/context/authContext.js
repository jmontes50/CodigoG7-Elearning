import { useState, useEffect, createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; //para conectarnos a google
import { auth } from "../config/firebaseConfig"; //instancia del módulo auth de firebase

export const AuthContext = createContext();

const proveedorGoogle = new GoogleAuthProvider() //proveedor de google para identificar el método de acceso

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null)

    const signInGoogle = async () => {
        try {
            const resultado = await signInWithPopup(auth, proveedorGoogle) //loguearse con popup
            console.log({resultado})
        } catch (error) {
            console.log({error})
        }
    }

    return <AuthContext.Provider value={{user, signInGoogle}}>
        {props.children}
    </AuthContext.Provider>
}