import { Avatar, Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import {
    HiSearch,
    HiMenu,
    HiSun
} from "react-icons/hi";
import { Link } from "react-router-dom";

const NavRight = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    return (
        <div className="w-[5%] flex items-center justify-center">
            <div className="flex items-center flex-col gap-2">
                <Button onClick={() => setIsOpen(true)} className="rounded-none"><span className="text-3xl"><HiMenu /></span></Button>
                <Button className="rounded-none"><span className="text-3xl"><HiSun /></span></Button>
            </div>
            <Drawer open={isOpen} onClose={handleClose} position="right">
                <Drawer.Header titleIcon={() => <></>} />
                <div className="text-center space-y-2 my-10">
                    <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="success" />
                    <h2 className="text-2xl font-bold">Abu Naim</h2>
                    <p>abunaim140@gmail.com</p>
                </div>
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
                                        <Button className="w-full justify-normal bg-transparent enabled:hover:bg-[#F3F4F6] text-gray-900 focus:ring-0"><Link to='/'>Home</Link></Button>
                                        <Button className="w-full justify-normal bg-transparent enabled:hover:bg-[#F3F4F6] text-gray-900 focus:ring-0"><Link to='/'>Profile</Link></Button>
                                        <Button className="w-full justify-normal bg-transparent enabled:hover:bg-[#F3F4F6] text-gray-900 focus:ring-0"><Link to='/'>Add Blog</Link></Button>
                                        <Button className="w-full justify-normal bg-transparent enabled:hover:bg-[#F3F4F6] text-gray-900 focus:ring-0"><Link to='/'>All blogs</Link></Button>
                                        <Button className="w-full justify-normal bg-transparent enabled:hover:bg-[#F3F4F6] text-gray-900 focus:ring-0"><Link to='/'>Featured Blogs</Link></Button>
                                        <Button className="w-full justify-normal bg-transparent enabled:hover:bg-[#F3F4F6] text-gray-900 focus:ring-0"><Link to='/'>Wishlist</Link></Button>
                                        <div className="flex justify-between gap-4 pt-10">
                                            <Button className="w-full rounded-sm enabled:hover:bg-[#F3F4F6] text-white focus:ring-0"><Link to='/'>Sign In</Link></Button>
                                            <Button className="w-full rounded-sm enabled:hover:bg-[#F3F4F6] text-white focus:ring-0"><Link to='/'>Sign Up</Link></Button>
                                        </div>
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