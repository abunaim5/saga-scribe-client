import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import RecentBlogCard from "../Home/RecentBlogs/RecentBlogCard";
import { Dropdown } from "flowbite-react";
// import axios from "axios";


const AllBlogs = () => {
    // const [blogs, setBlogs] = useState([])
    // const [loading, setLoading] = useState(true)
    const [filterUrl, setFilterUrl] = useState('/blogs')
    // console.log(filterUrl)

    const { isLoading, error, data, refetch } = useFetch(
        'blogs',
        filterUrl
    );

    const blogs = data;

    useEffect(() => {
        refetch()
    }, [filterUrl, refetch])

    // useEffect(() => {
    //     setLoading(true)
    //     axios.get(`http://localhost:5000${filterUrl}`)
    //     .then(res => {
    //         setBlogs(res.data)
    //         setLoading(false);
    //         console.log(res.data)
    //     })
    // }, [filterUrl])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        console.log('Error found in recent blogs')
    }

    return (
        <div className="mb-20 space-y-5">
            <div className="flex items-center justify-center border-2 border-black h-20">
                <h2 className="text-3xl font-bold uppercase">All Blogs</h2>
            </div>
            <div className="flex justify-center">
                <div>
                    <Dropdown label="FILTERED BY CATEGORY" size='lg' className="rounded-none" style={{ borderRadius: '0px', backgroundColor: "transparent", color: 'black', border: '2px solid black' }} >
                        <Dropdown.Item onClick={() => setFilterUrl('/blogs')} className="justify-center uppercase">Custom</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilterUrl('/blogs?category=Adventure')} className="justify-center uppercase">Adventure</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilterUrl('/blogs?category=Mystery')} className="justify-center uppercase">Mystery</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilterUrl('/blogs?category=Historical')} className="justify-center uppercase">Historical</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilterUrl('/blogs?category=Horror')} className="justify-center uppercase">Horror</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilterUrl('/blogs?category=Fantasy')} className="justify-center uppercase">Fantasy</Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilterUrl('/blogs?category=Romance')} className="justify-center uppercase">Romance</Dropdown.Item>
                    </Dropdown>
                </div>
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

export default AllBlogs;