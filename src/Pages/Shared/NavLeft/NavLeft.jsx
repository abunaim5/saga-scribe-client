import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaSearch } from "react-icons/fa";

const NavLeft = () => {
    return (
        <div className="min-w-[5%] relative flex items-center justify-center">
            <div className="flex flex-col items-center justify-center fixed top-0 bottom-0">
                <div className="flex flex-col items-center justify-center gap-6 relative">
                    <button><a href=""><FaFacebookF /></a></button>
                    <button><a href=""><FaInstagram /></a></button>
                    <button><a href=""><FaTwitter /></a></button>
                    <button><a href=""><FaYoutube /></a></button>
                    <button><a href=""><FaSearch /></a></button>
                </div>
                <button className="font-bold absolute top-1/2 inset-0 items-center justify-center transform -rotate-90 w-auto h-auto"><span>SUBSCRIBE</span></button>
            </div>
        </div>
    );
};

export default NavLeft;