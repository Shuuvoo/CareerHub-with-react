import Banner from "../Banner/Banner";
import CategoryList from "../Categorylist/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobDetails from "../JobDetails/JobDetails";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;