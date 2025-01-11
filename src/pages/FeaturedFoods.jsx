import { motion } from "framer-motion";
const FeaturedFoods = () => {
    const foods = [
      {
        id: 1,
        name: "Spicy Chicken Burger",
        price: "$8.99",
        image: "https://i.ibb.co.com/XjHvb5m/Tacos-Al-Pastor.jpg",
        description: "A fiery delight for spice lovers.",
      },
      {
        id: 2,
        name: "Classic Margherita Pizza",
        price: "$12.49",
        image: "https://i.ibb.co.com/Hxw4vvS/Vegan-Buddha-Bowl.jpg",
        description: "A timeless classic with fresh ingredients.",
      },
      {
        id: 3,
        name: "Chocolate Lava Cake",
        price: "$6.99",
        image: "https://i.ibb.co.com/w63jD87/Avocado-Toast.jpg",
        description: "A decadent dessert with molten chocolate.",
      },
      {
        id: 4,
        name: "Classic Margherita Pizza",
        price: "$12.49",
        image: "https://i.ibb.co.com/Hxw4vvS/Vegan-Buddha-Bowl.jpg",
        description: "A timeless classic with fresh ingredients.",
      },
    ];
  
    return (

      <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Food Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {foods.map((food) => (
            <motion.div
              key={food.id}
              className="flex flex-col p-6 h-full rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}  // Initial state: hidden and positioned lower
              animate={{ opacity: 1, y: 0 }}  // Final state: visible and in normal position
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut", // Smooth easing
              }}
              whileHover={{ scale: 1.05 }} // Scale up when hovering
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{food.name}</h3>
              <p className="text-gray-700">{food.description}</p>
              <p className="text-lg font-bold text-green-600 mb-4">{food.price}</p>
              <button className="btn btn-warning hover:bg-blue-600 mt-auto w-full">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
  };
  
  export default FeaturedFoods;
  