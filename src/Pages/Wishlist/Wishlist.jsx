import useFetch from "../../Hooks/useFetch";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
    const { isLoading, data } = useFetch(
        'wishlist',
        '/wishlist'
    );

    const wishlistBlogs = data;

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <div className="flex items-center justify-center border-2 border-black h-20 mb-5">
                <h2 className="text-3xl font-bold uppercase">Wishlist</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
                {
                    wishlistBlogs.map(blog => <WishlistCard
                        key={blog._id}
                        blog={blog}
                    />)
                }
            </div>
        </div>
    );
};

export default Wishlist;