// import { useEffect, useState } from "react";
import BlogDetailsCard from "./BlogDetailsCard";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import useAuth from "../../Hooks/useAuth";
import useMutate from "../../Hooks/useMutate";

const BlogDetails = () => {
    const { user } = useAuth();
    const options = {month: 'long', day: 'numeric', year: 'numeric'}
    const currentDate = new Date().toLocaleDateString('en-us', options);

    const { id } = useParams();
    // console.log(id);

    const mutation = useMutate(
        '/comments',
        'POST'
    )

    // Find blog with specific id
    const { isLoading, error, data } = useFetch(
        'blog',
        `/blogs/${id}`
    )
    // console.log(data)

    // Handle add comment to database
    const handleAddComment = e => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        const commentData = {
            _id: id,
            comment,
            user_name: user?.displayName,
            user_email: user?.email,
            photo: user?.photoURL,
            comment_date: currentDate
        }
        mutation.mutate(commentData);
        console.log(commentData);
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        console.log('Error find in blog details page')
    }

    return (
        <div className="mb-20">
            <BlogDetailsCard key={data._id} blog={data} />
            <div className="px-[374px] space-y-8 mt-20">
                <h2 className="text-3xl font-bold uppercase pb-6 text-center">Leave a comment</h2>
                <h4 className="text-center text-lg font-medium">Your email address will not be published. Required fields are marked *</h4>
            <form onSubmit={handleAddComment}>
                <div className="space-y-7">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="COMMENT *" />
                        </div>
                        <Textarea name='comment' className="rounded-none" id="comment" required rows={10} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="NAME *" />
                        </div>
                        <TextInput name='name' style={{ borderRadius: '0px' }} className="" id="name" type="text" defaultValue={user?.displayName} shadow readOnly />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="EMAIL *" />
                        </div>
                        <TextInput name='email' style={{ borderRadius: '0px' }} className="" id="email" type="email" defaultValue={user?.email} shadow readOnly />
                    </div>
                    <Button type="submit" className="rounded-none uppercase w-full mt-2">Comment</Button>
                </div>
            </ form>
            </div>
        </div>
    );
};

export default BlogDetails;