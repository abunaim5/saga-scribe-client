import Banner from "../Banner/Banner";
import Newsletter from "../Newsletter/Newsletter";
import RecentBlogs from "../RecentBlogs/RecentBlogs";

const Home = () => {
    return (
        <div>
            <Banner />
            <RecentBlogs />
            <Newsletter />
        </div>
    );
};

export default Home;