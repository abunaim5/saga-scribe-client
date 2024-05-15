import Banner from "../Banner/Banner";
import BlogCorner from "../BlogCorner/BlogCorner";
import Newsletter from "../Newsletter/Newsletter";
import RecentBlogs from "../RecentBlogs/RecentBlogs";

const Home = () => {
    return (
        <div>
            <Banner />
            <RecentBlogs />
            <BlogCorner />
            <Newsletter />
        </div>
    );
};

export default Home;