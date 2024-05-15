import { Button } from "flowbite-react";

const CommunityHub = () => {
    return (
        <div className="text-center bg-gray-300 py-20">
            <h2 className="text-3xl font-bold uppercase mb-6">SagaScribe Community Hub</h2>
            <p className="w-3/4 mx-auto">Welcome to the SagaScribe Community Hub, where the power of storytelling brings us together. Join our vibrant community of readers, writers, and enthusiasts as we connect, collaborate, and celebrate the magic of sagas. Engage in lively discussions, share your creative works, discover new favorites, and connect with fellow storytellers from around the world. Whether you&apos;re a seasoned author or a passionate reader, there&apos;s a place for you in our community. Dive in and explore the endless possibilities of storytelling with SagaScribe.</p>
            <div className="flex justify-center mt-10">
                <Button className="rounded-none">Join Now</Button>
            </div>
        </div>
    );
};

export default CommunityHub;