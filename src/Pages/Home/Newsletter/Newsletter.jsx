import { Button, TextInput } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";

const Newsletter = () => {
    const handleSubscribe = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const data = {name, email};
        console.log(data);
        if(data) {
            toast.success('Thank you for subscribing to our newsletter.', {position: 'top-center'})
        }
    }

    return (
        <div className="mb-20 bg-black bg-opacity-10 py-20">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 ">SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p className="w-1/2 mx-auto">Share your own saga! Connect with fellow readers, share recommendations, and discuss your favorite narratives in our vibrant community forum.</p>
            </div>
            <div>
                <form onSubmit={handleSubscribe}>
                    <div className="flex gap-2 justify-center">
                        <TextInput name='name' style={{ borderRadius: '0px' }} className="" id="name" type="text" placeholder="Name" required shadow />
                        <TextInput name='email' style={{ borderRadius: '0px' }} className="" id="email" type="email" placeholder="Email" required shadow />
                        <Button type="submit" className="rounded-none uppercase">Subscribe</Button>
                    </div>
                </form>
            </div >
            <ToastContainer position="top-center" />
        </div >
    );
};

export default Newsletter;