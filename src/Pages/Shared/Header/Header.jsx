import { Link } from "react-router-dom";


const Header = () => {

    return (
        <div className="h-[95.14px] flex items-center justify-center">
            <Link to='/'><h1 className="text-4xl font-bold">SAGASCRIBE</h1></Link>
        </div>
    );
};

export default Header;