// import { useEffect, useState } from "react";
import BlogDetailsCard from "./BlogDetailsCard";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams()
    console.log(id);

    const { isLoading, error, data } = useFetch(
        'blog',
        `/blogs/${id}`
    )
    // console.log(data)

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if(error){
        console.log('Error find in blog details page')
    }

    return (
        <div className="mb-20">
            <BlogDetailsCard key={data._id} blog={data} />
        </div>
    );
};

export default BlogDetails;