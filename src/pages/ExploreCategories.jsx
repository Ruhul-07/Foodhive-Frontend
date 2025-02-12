import { motion } from "framer-motion";
const ExploreCategories = () => {
    const categories = [
      {
        id: 1,
        title: "Fast Food",
        image: "https://i.ibb.co.com/ZB3MpHS/fastfood.jpg",
        description: "Quick and delicious meals to satisfy your hunger.",
      },
      {
        id: 2,
        title: "Desserts",
        image: "https://i.ibb.co.com/rpsFJZ5/deserts.jpg",
        description: "Sweet treats to indulge in.",
      },
      {
        id: 3,
        title: "Beverages",
        image: "https://i.ibb.co.com/b2BgRKN/juice.jpg",
        description: "Refreshing drinks for every occasion.",
      },
      {
        id: 4,
        title: "Beverages",
        image: "https://i.ibb.co.com/b2BgRKN/juice.jpg",
        description: "Refreshing drinks for every occasion.",
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
          Explore Categories
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
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}  // Initial state: hidden and positioned lower
              animate={{ opacity: 1, y: 0 }}  // Final state: visible and in normal position
              transition={{
                duration: 0.8,
                delay: index * 0.2, // Staggered animation for each card
                ease: "easeOut", // Smooth easing
              }}
              whileHover={{ scale: 1.05 }} // Scale up when hovering
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
  };
  
  export default ExploreCategories;
  