import Banner from "../Banner/Banner";
import BlogCorner from "../BlogCorner/BlogCorner";
import CommunityHub from "../CommunityHub/CommunityHub";
import Newsletter from "../Newsletter/Newsletter";
import RecentBlogs from "../RecentBlogs/RecentBlogs";

const Home = () => {
    return (
        <div>
            <Banner />
            <RecentBlogs />
            <BlogCorner />
            <CommunityHub />
            <Newsletter />
        </div>
    );
};

export default Home;