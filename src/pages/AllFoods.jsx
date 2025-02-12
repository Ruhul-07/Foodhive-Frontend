import { useLoaderData } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import { motion } from "framer-motion";

const AllFoods = () => {
  const foods = useLoaderData();
  console.log(foods)
  return (
    <div className="p-12 ">
       <motion.div className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
           <h2 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-md">
          All Foods
        </h2>
        <motion.div
          className="mt-2 mx-auto h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
          style={{ width: "100px" }} // Adjust width as needed
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>
        </motion.div>
      <div className="my-10">
      <h2 className="text-xl font-semibold text-primary">Total Foods: {foods.length}</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
