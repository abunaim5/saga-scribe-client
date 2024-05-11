// import { useState } from "react";

import { useEffect, useState } from "react";
import RecentBlogCard from "./RecentBlogCard";

const RecentBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    console.log(blogs)
    // const [isOpen, setIsOpen] = useState(true);

    // const handleClose = () => setIsOpen(false);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="my-5 space-y-5">
            <div className="flex items-center justify-center border-2 border-black h-20">
                <h2 className="text-3xl font-bold uppercase">Recent Blogs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {
                    blogs.map((blog, idx) => <RecentBlogCard
                        key={idx}
                        blog={blog}
                    ></RecentBlogCard>)
                }
            </div>
        </div>
    );
};

export default RecentBlogs;