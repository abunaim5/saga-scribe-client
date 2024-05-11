import { useEffect, useState } from "react";
import BlogDetailsCard from "./BlogDetailsCard";

const BlogDetails = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            {
                blogs.map((blog, idx) => <BlogDetailsCard key={idx} blog={blog} />)
            }
        </div>
    );
};

export default BlogDetails;