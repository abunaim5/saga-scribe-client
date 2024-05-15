import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { Button, Label, Select, TextInput } from "flowbite-react";
import useAuth from "../../Hooks/useAuth";
import useMutate from "../../Hooks/useMutate";
import Loader from "../../components/Loader";

const UpdateBlog = () => {
    const { user, loading } = useAuth()
    const { id } = useParams();

    const mutation = useMutate(`/blogs/${id}`, 'PUT');

    // Find blog with specific id
    const { isLoading, data } = useFetch(
        'blog',
        `/blogs/${id}`
    );
    const blog = data;

    const handleUpdateBlog = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value
        const category = form.category.value
        const time = form.time.value
        const image = form.image.value
        const theme = form.theme.value
        const description = form.description.value

        const data = {
            title,
            category,
            read_time: time,
            image,
            story_theme: theme,
            long_description: description,
            user_name: user?.displayName,
            user_email: user?.email,
            post_date: blog?.post_date,
            post_time: blog?.post_time
        }

        mutation.mutate(data);
    }

    if (loading) {
        return <Loader />
    }
    if (isLoading) {
        return <Loader />
    }


    return (
        <div>
            <div className="flex items-center justify-center border-2 border-black h-20 mb-5">
                <h2 className="text-3xl font-bold uppercase">Update Blog</h2>
            </div>
            <div className="mt-32">
                <form onSubmit={handleUpdateBlog} className="max-w-6xl mx-auto space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Title" />
                            </div>
                            <TextInput name='title' defaultValue={data?.title} style={{ borderRadius: '0px' }} className="" id="title" type="text" placeholder="title" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="categories" value="Category" />
                            </div>
                            <Select name='category' defaultValue={data?.category} style={{ borderRadius: '0px' }} id="categories" className="rounded-none" required>
                                <option>Adventure</option>
                                <option>Historical</option>
                                <option>Mystery</option>
                                <option>Science Fiction</option>
                                <option>Horror</option>
                                <option>Fantasy</option>
                                <option>Romance</option>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="readTime" value="Read Time" />
                            </div>
                            <TextInput name='time' defaultValue={data?.read_time} style={{ borderRadius: '0px' }} className="" id="readTime" type="number" placeholder="time" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="image" value="Image URL" />
                            </div>
                            <TextInput name='image' defaultValue={data?.image} style={{ borderRadius: '0px' }} className="" id="image" type="text" placeholder="https://" required shadow />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="storyTheme" value="Story Theme" />
                            </div>
                            <TextInput name='theme' defaultValue={data?.story_theme} style={{ borderRadius: '0px' }} className="" id="storyTheme" type="text" placeholder="theme" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="description" value="Long Description" />
                            </div>
                            <TextInput name='description' defaultValue={data?.long_description} style={{ borderRadius: '0px' }} className="" id="description" type="text" placeholder="description" required shadow />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your Name" />
                            </div>
                            <TextInput name='name' style={{ borderRadius: '0px' }} className="" id="name" type="text" placeholder="name" defaultValue={user?.displayName} required shadow readOnly />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your Email" />
                            </div>
                            <TextInput name='email' style={{ borderRadius: '0px' }} className="" id="email" type="email" placeholder="saga@scribe.com" defaultValue={user?.email} required shadow readOnly />
                        </div>
                    </div>
                    <Button type="submit" className="rounded-none uppercase w-full mt-2">Update</Button>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;