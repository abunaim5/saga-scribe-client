// import { useEffect, useState } from "react";
import BlogDetailsCard from "./BlogDetailsCard";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { Avatar, Button, Label, TextInput, Textarea } from "flowbite-react";
import useAuth from "../../Hooks/useAuth";
import useMutate from "../../Hooks/useMutate";
import userPhoto from "../../assets/user.png"
import CommentCard from "./CommentCard";

const BlogDetails = () => {
    const { user } = useAuth();
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
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
    );

    const comments = useFetch(
        'comments',
        `/comments/${id}`
    );
    // console.log(comments.data)

    // Handle add comment to database
    const handleAddComment = e => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        const commentData = {
            blog_id: id,
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

    if (comments.isLoading) {
        return <h1>Loading...</h1>
    }

    if (comments.isSuccess) {
        comments.refetch();
    }

    if (error) {
        console.log('Error find in blog details page')
    }

    return (
        <div className="mb-20">
            <BlogDetailsCard key={data._id} blog={data} />
            <div className="px-4 md:px-16 lg:px-32 xl:px-56 2xl:px-[374px] mt-20">
                <div className="text-center mb-16">
                    <Avatar img={data?.user_photo ? data?.user_photo : userPhoto} rounded size="xl" />
                    <h4 className="text-lg font-semibold mt-6 mb-3">By {data?.user_name ? data?.user_name : 'Unknown'}</h4>
                    <p>{data?.post_date ? data?.post_date : 'No Date'}</p>
                </div>
                <div className="h-[2px] bg-gray-400"></div>
                <div className="mt-16 mb-8">
                    <h2 className="text-3xl font-bold text-center uppercase mb-20">{comments?.data?.length} Comments</h2>
                    <div className="space-y-16">
                        {
                            comments?.data.map(comment => <CommentCard key={comment._id} comment={comment} />)
                        }
                    </div>
                </div>
                {
                    user?.email === data?.user_email ? <h3 className="mt-24 text-center text-red-600">Looks like you&apos;re having some quality conversations on your blog! Just a heads-up, you can&apos;t comment on your own blogs. But don&apos;t worry, your readers are keeping the discussion lively!</h3> : <div className="mt-24">
                        <div className="mb-8 text-center space-y-8">
                            <h2 className="text-3xl font-bold uppercase">Leave a comment</h2>
                            <h4 className="text-lg font-medium">Your email address will not be published. Required fields are marked *</h4>
                        </div>
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
                }

            </div>
        </div>
    );
};

export default BlogDetails;