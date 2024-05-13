import { Avatar, Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import {
    HiSearch,
    HiMenu,
    HiSun
} from "react-icons/hi";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import userImg from '../../../assets/user.png';
// import { motion } from "framer-motion"

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// }


const NavRight = () => {
    const { user, signOutUser } = useAuth()
    // console.log(user)

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    const handleSignOutUser = async () => {
        try {
            const result = await signOutUser()
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className="w-[5%] flex items-center justify-center relative">
            <div className="flex items-center flex-col gap-2 fixed top-1/2">
                <Button onClick={() => setIsOpen(true)} className="rounded-sm bg-black"><span className="text-2xl"><HiMenu /></span></Button>
                <Button className="rounded-sm bg-black"><span className="text-2xl"><HiSun /></span></Button>
            </div>
            <Drawer open={isOpen} onClose={handleClose} position="right">
                <Drawer.Header titleIcon={() => <></>} />
                {
                    user && <div className="text-center space-y-2 my-10">
                        <Avatar img={user?.photoURL ? user?.photoURL : userImg} rounded bordered color="success" />
                        <h2 className="text-2xl font-bold">{user?.displayName}</h2>
                        <p>{user?.email}</p>
                    </div>
                }
                <Drawer.Items>
                    <Sidebar
                        aria-label="Sidebar with multi-level dropdown example"
                        className="[&>div]:bg-transparent [&>div]:p-0"
                    >
                        <div className="flex h-full flex-col justify-between py-2">
                            <div>
                                <form className="pb-3 md:hidden">
                                    <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
                                </form>
                                <Sidebar.Items>
                                    <Sidebar.ItemGroup>
                                        <Link to='/'><Button onClick={() =>setIsOpen(false)} className="w-full justify-normal bg-transparent enabled:hover:bg-[#F3F4F6] text-gray-900 focus:ring-0">Home</Button></Link>
                                        <Link to='/'><Button onClick={() =>setIsOpen(false)} className="w-full justify-normal bg-transparent enabled:hover:bg-[#F3F4F6] text-gray-900 focus:ring-0">Profile</Button></Link>
                                        <Link to='/addBlog'><Button onClick={() =>setIsOpen(false)} className="w-full justify-normal bg-transparent enabled:hover:bg-[#F3F4F6] text-gray-900 focus:ring-0">Add Blog</Button></Link>
                                        <Link to='/blogs'><Button onClick={() =>setIsOpen(false)} className="w-full justify-normal bg-transparent enabled:hover:bg-[#F3F4F6] text-gray-900 focus:ring-0">All blogs</Button></Link>
                                        <Link to='/'><Button onClick={() =>setIsOpen(false)} className="w-full justify-normal bg-transparent enabled:hover:bg-[#F3F4F6] text-gray-900 focus:ring-0">Featured Blogs</Button></Link>
                                        <Link to='/wishlist'><Button onClick={() =>setIsOpen(false)} className="w-full justify-normal bg-transparent enabled:hover:bg-[#F3F4F6] text-gray-900 focus:ring-0">Wishlist</Button></Link>
                                        {
                                            user ? <Link to='/' className="w-full"><Button onClick={() =>{handleSignOutUser(), setIsOpen(false)}} className="w-full rounded-sm mt-10 enabled:hover:bg-[#F3F4F6] text-white focus:ring-0">Sign Out</Button></Link> : <div className="flex justify-between gap-4 pt-10">
                                                <Link to='/login' className="w-full"><Button onClick={() =>setIsOpen(false)} className="w-full rounded-sm enabled:hover:bg-[#F3F4F6] text-white focus:ring-0">Sign In</Button></Link>
                                                <Link to='/register' className="w-full"><Button onClick={() =>setIsOpen(false)} className="w-full rounded-sm enabled:hover:bg-[#F3F4F6] text-white focus:ring-0">Sign Up</Button></Link>
                                            </div>
                                        }
                                    </Sidebar.ItemGroup>
                                </Sidebar.Items>
                            </div>
                        </div>
                    </Sidebar>
                </Drawer.Items>
            </Drawer>
        </div>
    );
};

export default NavRight;