import { Button, Label, Select, TextInput } from "flowbite-react";
import useAuth from "../../Hooks/useAuth";
import useMutate from "../../Hooks/useMutate";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const AddBlog = () => {
    const {user} = useAuth()
    const {isLoading, error, isSuccess, mutate} = useMutate('/blogs', 'POST')
    const currentDate = (new Date().toLocaleDateString());
    const currentTime = (new Date().toLocaleTimeString());
    

    const handleAddBlog = e => {
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
            post_date: currentDate,
            post_time: currentTime
        }

        mutate(data);
        // console.log(isSuccess)

        console.log(data)
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }
    // isSuccess && toast.success("Wow so easy!")
    // console.log(isSuccess)
    // // if(isSuccess){
    //     return () => toast.success("Your blog successfully added");
    // }

    return (
        <div>
            <div className="flex items-center justify-center border-2 border-black h-20 mb-5">
                <h2 className="text-3xl font-bold uppercase">Add Blog</h2>
            </div>
            <div className="mt-32">
                <form onSubmit={handleAddBlog} className="max-w-6xl mx-auto space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Title" />
                            </div>
                            <TextInput name='title' style={{ borderRadius: '0px' }} className="" id="title" type="text" placeholder="title" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="categories" value="Category" />
                            </div>
                            <Select name='category' style={{ borderRadius: '0px' }} id="categories" className="rounded-none" required>
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
                            <TextInput name='time' style={{ borderRadius: '0px' }} className="" id="readTime" type="number" placeholder="time" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="image" value="Image URL" />
                            </div>
                            <TextInput name='image' style={{ borderRadius: '0px' }} className="" id="image" type="text" placeholder="https://" required shadow />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="storyTheme" value="Story Theme" />
                            </div>
                            <TextInput name='theme' style={{ borderRadius: '0px' }} className="" id="storyTheme" type="text" placeholder="theme" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="description" value="Long Description" />
                            </div>
                            <TextInput name='description' style={{ borderRadius: '0px' }} className="" id="description" type="text" placeholder="description" required shadow />
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
                    <Button type="submit" className="rounded-none uppercase w-full mt-2">Submit</Button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddBlog;