import { Outlet } from "react-router-dom";
import Foot from "../Pages/Shared/Footer/Foot";

const Root = () => {
    return (
        <div>
            <Outlet />
            <Foot />
        </div>
    );
};

export default Root;