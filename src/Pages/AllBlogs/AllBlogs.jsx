import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import RecentBlogCard from "../Home/RecentBlogs/RecentBlogCard";
import { Dropdown, TextInput } from "flowbite-react";
import useMutate from "../../Hooks/useMutate";
import useAuth from "../../Hooks/useAuth";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CiSearch } from "react-icons/ci";
import Loader from "../../components/Loader";
// import axios from "axios";


const AllBlogs = () => {
    const { user, loading } = useAuth();
    const [filterUrl, setFilterUrl] = useState('/blogs');
    // const [searchText, setSearchText] = useState('/search')
    // const [blogs, setBlogs] = useState([])
    const mutation = useMutate('/wishlist', 'POST');
    // const navigate = useNavigate();
    // console.log(filterUrl)

    const { isLoading, data, refetch } = useFetch(
        'blogs',
        filterUrl
    );

    // const searchData = useFetch(
    //     'searchText',
    //     searchText
    // );
    // console.log(searchData)

    const blogs = data;
    // if (isSuccess) {
        
    // }
    // if (search.isSuccess) {
    //     setBlogs(search.data);
    // }

    useEffect(() => {
        refetch()
    }, [filterUrl, refetch])



    if (loading) {
        return <Loader />
    }
    if (isLoading) {
        return <Loader />
    }
    // if (searchData.isLoading) {
    //     return <h1>Loading...</h1>
    // }

    const handleAddBlogToWishlist = (id) => {
        if (!user) {
            toast.warn('You need to login first.', { position: 'top-center' })
            // return navigate('/login')
        }
        const wishedBlog = blogs.find(blog => blog._id === id);
        const wishData = {
            ...wishedBlog,
            wisher_email: user.email
        }
        mutation.mutate(wishData);
        toast.success('Blog added to wishlist.', { position: 'top-center' })
    };

    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        const searchText = form.value;
        setFilterUrl(`/blogs?title=${searchText}`)
        console.log(searchText);
    }
    // console.log(searchText);
    // console.log(mutation.error)

    return (
        <div className="mb-20 space-y-5">
            <div className="flex items-center justify-center border-2 border-black h-20">
                <h2 className="text-3xl font-bold uppercase">All Blogs</h2>
            </div>
            <div className="flex justify-center flex-col items-center gap-5">
                <form className="w-1/2" onChange={handleSearch}>
                    <div>
                        <TextInput id="email4" name="search" type="search" icon={CiSearch} style={{ borderRadius: '0px', paddingTop: '14.5px', paddingBottom: '14.5px' }} className="w-full " placeholder="Search" />
                    </div>
                </form>
                <div>
                    <Dropdown label="FILTERED BY CATEGORY" size='lg' className="rounded-none" style={{ borderRadius: '0px', backgroundColor: "transparent", color: 'black', border: '2px solid #E5E7EB' }} >
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
                    blogs.map(blog => <RecentBlogCard
                        key={blog._id}
                        blog={blog}
                        handleAddBlogToWishlist={handleAddBlogToWishlist}
                    ></RecentBlogCard>)
                }
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default AllBlogs;