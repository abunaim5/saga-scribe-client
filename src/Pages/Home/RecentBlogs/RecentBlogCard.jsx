import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";


const RecentBlogCard = ({ blog }) => {
    const { _id, title, image, story_theme, category, read_time } = blog;

    return (
        <Card

            // onClick={() => setIsOpen(true)}
            className="rounded-none rounded-t-none shadow-none border-none overflow-hidden"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            // imgSrc={image}
            renderImage={() => <Link to={`/details/${_id}`} className=""><div style={{ backgroundImage: `url(${image})` }} className="min-h-[478px] bg-cover  bg-center transition-transform duration-1000 ease-in-out hover:scale-105 relative cursor-pointer">
                <div className="w-full min-h-[478px] flex items-center justify-center flex-col bg-black bg-opacity-40 transition-all duration-1000 ease-in-out hover:bg-opacity-50 gap-5">
                    <h4 className="text-sm font-semibold text-white uppercase">{category} / {read_time} min read</h4>
                    <h3 className="text-3xl font-bold text-white uppercase my-1">{title}</h3>
                    <p className="text-white italic text-lg font-merri font-semibold">{story_theme}</p>
                </div>
            </div></Link>}
        >
            {/* <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {story_theme}
            </p> */}
            <div className="flex gap-4">
                {/* <Button className="w-full rounded-sm uppercase bg-transparent border-2 border-black text-black">Details</Button> */}
                <Button className="w-full rounded-sm uppercase bg-transparent border-2 border-black text-black enabled:hover:bg-transparent font-bold">Wishlist</Button>
            </div>
        </Card>
    );
};

export default RecentBlogCard;