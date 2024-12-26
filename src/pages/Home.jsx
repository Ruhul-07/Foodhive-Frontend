import Banner from "../components/Banner";
import TopFoods from "./TopFoods";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mt-20">
            <TopFoods></TopFoods>
            </div>
        </div>
    );
};

export default Home;