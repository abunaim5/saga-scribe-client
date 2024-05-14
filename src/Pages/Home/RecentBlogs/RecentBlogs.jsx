import RecentBlogCard from "./RecentBlogCard";
import useFetch from "../../../Hooks/useFetch";
import useMutate from "../../../Hooks/useMutate";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const RecentBlogs = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const mutation = useMutate('/wishlist', 'POST');
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

    const handleAddBlogToWishlist = (id) => {
        if(!user){
            toast.warn('You need to login first.', {position: 'top-center'})
            return navigate('/login')
        }
        const wishedBlog = blogs.find(blog => blog._id === id);
        const wishData = {
            ...wishedBlog,
            wisher_email: user.email
        }
        mutation.mutate(wishData);
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
                        handleAddBlogToWishlist={handleAddBlogToWishlist}
                    ></RecentBlogCard>)
                }
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default RecentBlogs;