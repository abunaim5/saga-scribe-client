// import { useState } from "react";

// import { useState } from "react";
import RecentBlogCard from "./RecentBlogCard";
import useFetch from "../../../Hooks/useFetch";

const RecentBlogs = () => {
    // const [blogs, setBlogs] = useState([]);

    const { isLoading, error, data } = useFetch(
        'recentBlogs',
        '/blogs'
    );

    const blogs = data;

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if(error){
        console.log(error)
    }

    return (
        <div className="my-5 space-y-5">
            <div className="flex items-center justify-center border-2 border-black h-20">
                <h2 className="text-3xl font-bold uppercase">Recent Blogs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
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