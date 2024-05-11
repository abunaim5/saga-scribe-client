import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaSearch } from "react-icons/fa";

const NavLeft = () => {
    return (
        <div className="w-[5%] relative">
            <div className="flex items-center flex-col justify-center gap-14 fixed top-0 bottom-0">
                <div className="flex flex-col items-center justify-center gap-6">
                    <button><a href=""><FaFacebookF /></a></button>
                    <button><a href=""><FaInstagram /></a></button>
                    <button><a href=""><FaTwitter /></a></button>
                    <button><a href=""><FaYoutube /></a></button>
                    <button><a href=""><FaSearch /></a></button>
                </div>
                <button className="font-bold -rotate-90">SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default NavLeft;