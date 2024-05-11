import { Card } from "flowbite-react";

const BlogDetailsCard = ({ blog }) => {
    const { title, image, story_theme, category, read_time, long_description } = blog;

    return (
        <div>
            <Card
                className="rounded-none rounded-t-none bg-transparent shadow-none border-none overflow-hidden"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                renderImage={() => <div style={{ backgroundImage: `url(${image})` }} className="min-h-[650px] bg-fixed bg-cover bg-center">
                    <div className="w-full min-h-[650px] flex items-center justify-center flex-col bg-black bg-opacity-40 transition-all duration-1000 ease-in-out hover:bg-opacity-50 gap-5">
                        <h4 className="text-xs font-bold text-white uppercase">{category} / {read_time}</h4>
                        <h3 className="text-5xl font-bold text-white uppercase my-4">{title}</h3>
                        <p className="text-white font-merri italic font-semibold text-xl">{story_theme}</p>
                    </div>
                </div>}
            >
                <div className="px-[350px] text-pretty space-y-12 mt-16">
                    <h5 className="text-base font-merri font-bold tracking-tight text-gray-900 dark:text-white">
                        SHARE
                    </h5>
                    <p className="font-normal font-merri text-gray-700 dark:text-gray-400 text-lg leading-loose">
                        {long_description}
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default BlogDetailsCard;