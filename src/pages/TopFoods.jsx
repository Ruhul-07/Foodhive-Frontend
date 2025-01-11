import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <h2 className="text-3xl font-bold mb-10 text-center">
          Top Selling Foods
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topFoods.map((food) => (
            <div
              key={food._id}
              className="card bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
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
                  to={`/foods/${food._id}`}
                  className="btn bg-primary w-full"
                >
                  Details
                </Link>
              </div>
            </div>
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
