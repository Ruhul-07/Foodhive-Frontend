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

      <section className="p-12">
      <div className="container mx-auto">
      <motion.div className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
           <h2 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-md">
           Featured Food Items
        </h2>
        <motion.div
          className="mt-2 mx-auto h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
          style={{ width: "100px" }} // Adjust width as needed
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {foods.map((food) => (
            <motion.div
              key={food.id}
              className="flex flex-col p-6 h-full rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
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
  