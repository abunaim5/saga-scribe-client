import useAuth from "../../Hooks/useAuth";
import {Navigate, useLocation} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading) {
        return <span>Loading...</span>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login' />
};

export default PrivateRoute;