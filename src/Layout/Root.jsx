import { Outlet } from "react-router-dom";
import Foot from "../Pages/Shared/Footer/Foot";
import Header from "../Pages/Shared/Header/Header";
import NavRight from "../Pages/Shared/NavRight/NavRight";
import NavLeft from "../Pages/Shared/NavLeft/NavLeft";

const Root = () => {
    return (
        <div>
            <Header />
            <div className="flex justify-between min-h-[calc(100vh-80px)]">
                <NavLeft />
                <div className="w-[90%]">
                    <Outlet />
                </div>
                <NavRight />
            </div>
            <Foot />
        </div>
    );
};

export default Root;