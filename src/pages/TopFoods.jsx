import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TopFoods = () => {
  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    // Fetch top 6 foods from the backend
    const fetchTopFoods = async () => {
      try {
        const response = await axios.get(
          "https://food-hive-backend.vercel.app/topFoods"
        );
        setTopFoods(response.data);
      } catch (error) {
        console.log("Error fetching top foods:", error.message);
      }
    };

    fetchTopFoods();
  }, []);

  return (
    <section id="contact" className="p-12">
      <div className="top-foods-container">
        <motion.div className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
           <h2 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-md">
          Top Selling Foods
        </h2>
        <motion.div
          className="mt-2 mx-auto h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
          style={{ width: "100px" }} // Adjust width as needed
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>
        </motion.div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topFoods.map((food, index) => (
            <motion.div
            style={{ overflow: 'visible', position: 'relative' }}
              key={food._id}
              className="card bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{food.name}</h3>
              <p className="text-gray-500">{food.category}</p>
              <p className="text-lg font-semibold text-green-600">
                ${food.price}
              </p>
              <p className="text-sm text-gray-500">
                Purchases: {food.purchaseCount}
              </p>

              <div className="mt-4 flex gap-4">
                <Link
                  to={`/foodDetails/${food?._id}`}
                  className="btn bg-primary w-full"
                >
                  Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/allfoods" className="btn bg-secondary text-text w-48">
            See All Foods
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopFoods;
