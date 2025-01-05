"use client"

import { getUserApi, loginApi, signUpApi } from "@/services/authService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const { createContext, useReducer, useContext, useEffect } = require("react");


const AuthContext = createContext();

const initialState = {
    user: null,
    isLoading: true,
    error: null,
    isAuthenticated: false

}

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case "REJECTED":
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case "REGISTER":
            return {
                user: action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case "USER/LOADED":
            return {
                user: action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        default:
            return state;
    }
}

export default function AuthProvider({ children }) {
    const router = useRouter();
    const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(authReducer, initialState);


    async function login(data) {
        dispatch({ type: "LOADING" });
        try {
            const { user, message } = await loginApi(data);

            toast.success(message);

            dispatch({ type: "LOGIN", payload: user });
            router.push("/profile");

        } catch (error) {
            const errorMessages = error?.response?.data?.message;
            dispatch({ type: "REJECTED", payload: errorMessages });

            toast.error(errorMessages || "خطایی رخ داده است");

        }
    }

    async function signup(data) {
        dispatch({ type: "LOADING" });
        try {
            const { user, message } = await signUpApi(data);

            dispatch({ type: "REGISTER", payload: user });
            toast.success(message);
            router.push("/profile");

        } catch (error) {
            const errorMessages = error?.response?.data?.message;
            dispatch({ type: "REJECTED", payload: errorMessages });
            toast.error(errorMessages || "خطایی رخ داده است");
        }
    }

    async function getUser() {
        dispatch({ type: "LOADING" });
        try {
            const { user } = await getUserApi();


            dispatch({ type: "USER/LOADED", payload: user });
        } catch (error) {
            const errorMessages = error?.response?.data?.message;
            dispatch({ type: "REJECTED", payload: errorMessages });
            // toast.error(errorMessages || "خطایی رخ داده است");
        }
    }

    useEffect(() => {
        async function fetchData() {
            await getUser();
        }
        fetchData();
    }, [])


    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, signup }}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}