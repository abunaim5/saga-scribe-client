import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import useMutate from "../../Hooks/useMutate";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
    const [removeWishedBlogId, setRemoveWishedBlogId] = useState('')

    const mutation = useMutate(
        `/wishlist/${removeWishedBlogId}`,
        'DELETE'
    );
    const { isLoading, data, refetch } = useFetch(
        'wishlist',
        '/wishlist'
    );

    const wishlistBlogs = data;

    const handleRemoveBlogToWishlist = id => {
        setRemoveWishedBlogId(id);
        mutation.mutate()
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if(mutation.isSuccess){
        refetch()
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
                        handleRemoveBlogToWishlist={handleRemoveBlogToWishlist}
                    />)
                }
            </div>
        </div>
    );
};

export default Wishlist;