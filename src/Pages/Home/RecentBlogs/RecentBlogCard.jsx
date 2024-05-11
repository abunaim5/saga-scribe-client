import { Button, Card } from "flowbite-react";


const RecentBlogCard = ({ blog }) => {
    const { title, image, story_theme, category, read_time } = blog;

    return (
        <Card
            
            // onClick={() => setIsOpen(true)}
            className="rounded-none rounded-t-none shadow-none border-none overflow-hidden"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            // imgSrc={image}
            renderImage={() => <div style={{ backgroundImage: `url(${image})` }} className="min-h-[478px] bg-cover  bg-center transition-transform duration-1000 ease-in-out hover:scale-105 relative">
                <div className="w-full h-full flex items-center justify-center flex-col bg-black bg-opacity-40 transition-all duration-1000 ease-in-out hover:bg-opacity-50 gap-5">
                    <h4 className="text-sm font-semibold text-white uppercase">{category} / {read_time}</h4>
                    <h3 className="text-3xl font-bold text-white uppercase">{title}</h3>
                    <p className="text-white italic font-medium">{story_theme}</p>
                    {/* <div className="flex gap-4 absolute bottom-0 w-full">
                        <Button className="w-full rounded-sm uppercase">Details</Button>
                        <Button className="w-full rounded-sm uppercase">Wishlist</Button>
                    </div> */}
                </div>

            </div>}
        >
            {/* <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {story_theme}
            </p> */}
            <div className="flex gap-4">
                <Button className="w-full rounded-sm uppercase">Details</Button>
                <Button className="w-full rounded-sm uppercase">Wishlist</Button>
            </div>
        </Card>
    );
};

export default RecentBlogCard;