import { useLoaderData } from "react-router-dom";
import FoodCard from "../components/FoodCard";

const AllFoods = () => {
  const foods = useLoaderData();
  return (
    <div className="p-12 ">
        <h2 className="text-3xl font-bold text-center mb-8 text-text">All Foods</h2>
      <div className="my-10">
      <h2 className="text-xl font-semibold text-primary">Total Foods: {foods.length}</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-4">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
