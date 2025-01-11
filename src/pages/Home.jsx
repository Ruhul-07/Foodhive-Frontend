import Banner from "../components/Banner";
import ExploreCategories from "./ExploreCategories";
import FeaturedFoods from "./FeaturedFoods";
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
        </div>
    );
};

export default Home;