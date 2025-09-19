import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth"
import { useEffect } from "react";
import { getUser } from "../store/features/auth-thunks";
import { Navigate } from "react-router";


export const PrivateRoute = ({ children }) => {
    const { user, loading, error } = useAuth();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    console.log(error)

    if(loading) return <div>Loading...</div>

    return user ? children : <Navigate to={"/auth/login"} replace />
}


export const PublicRoute = ({ children }) => {
    const { user } = useAuth();

    return !user ? children : <Navigate to={"/dashboard/myqrcodes"} replace/>;
}
