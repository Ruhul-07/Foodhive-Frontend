import { useLoaderData } from "react-router-dom";
import FoodCard from "../components/FoodCard";

const AllFoods = () => {
    const foods = useLoaderData();
    return (
        <div>
            <h2>All Foods: {foods.length}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFoods;