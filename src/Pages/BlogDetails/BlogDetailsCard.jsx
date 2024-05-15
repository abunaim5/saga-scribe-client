import { Card } from "flowbite-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../components/Loader";

const BlogDetailsCard = ({ blog }) => {
    const {user, loading} = useAuth();
    const { _id, user_email, title, image, story_theme, category, read_time, long_description } = blog;

    if(loading){
        return <Loader />
        }

    return (
        <div>
            <Card
                className="rounded-none rounded-t-none bg-transparent shadow-none border-none overflow-hidden"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                renderImage={() => <div style={{ backgroundImage: `url(${image})` }} className="min-h-[650px] bg-fixed bg-cover bg-center">
                    <div className="w-full min-h-[650px] flex items-center justify-center flex-col bg-black bg-opacity-40 transition-all duration-1000 ease-in-out hover:bg-opacity-50 gap-5">
                        <h4 className="text-xs font-bold text-white uppercase">{category} / {read_time} min read</h4>
                        <h3 className="text-5xl font-bold text-white uppercase my-4">{title}</h3>
                        <p className="text-white font-merri italic font-semibold text-xl">{story_theme}</p>
                    </div>
                </div>}
            >
                <div className="px-4 md:px-16 lg:px-32 xl:px-56 2xl:px-[350px] text-pretty space-y-12 mt-16">
                    <div className="flex items-center justify-between text-base font-merri font-bold tracking-tight text-gray-900 dark:text-white">
                        <div className="flex items-center gap-6">
                            <h2>SHARE</h2>
                            <div className="space-x-4">
                                <button><FaTwitter /></button>
                                <button><FaFacebookF /></button>
                                <button><FaInstagram /></button>
                            </div>
                        </div>
                        <Link to={`/update/${_id}`} className={user?.email === user_email ? 'block' : 'hidden'}><button>UPDATE</button></Link>
                    </div>
                    <p className="font-normal font-merri text-gray-700 dark:text-gray-400 text-lg leading-loose">
                        {long_description}
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default BlogDetailsCard;