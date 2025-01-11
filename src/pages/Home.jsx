import Banner from "../components/Banner";
import ExploreCategories from "./ExploreCategories";
import FeaturedFoods from "./FeaturedFoods";
import Testimonials from "./Testimonials";
import TopFoods from "./TopFoods";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
            <TopFoods></TopFoods>
            </div>
            <div>
                <FeaturedFoods></FeaturedFoods>
            </div>
            <div>
                <ExploreCategories></ExploreCategories>
            </div>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;