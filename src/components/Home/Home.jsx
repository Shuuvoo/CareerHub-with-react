import Banner from "../Banner/Banner";
import CategoryList from "../Categorylist/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
            <h1>This is home element</h1>
        </div>
    );
};

export default Home;