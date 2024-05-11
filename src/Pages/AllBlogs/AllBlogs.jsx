import useFetch from "../../Hooks/useFetch";
import RecentBlogCard from "../Home/RecentBlogs/RecentBlogCard";

const AllBlogs = () => {
    const { isLoading, error, data } = useFetch(
        'blogs',
        '/blogs'
    );

    const blogs = data;

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if(error){
        console.log('Error found in recent blogs')
    }

    return (
        <div className="mb-20 space-y-5">
            <div className="flex items-center justify-center border-2 border-black h-20">
                <h2 className="text-3xl font-bold uppercase">All Blogs</h2>
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