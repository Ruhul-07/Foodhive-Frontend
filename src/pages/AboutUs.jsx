import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-orange-600">About FoodHive</h1>
        <p className="mt-4 text-lg text-gray-600">Delivering delicious food with speed and quality.</p>
      </motion.div>

      {/* Our Story */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-gray-700">Our Story</h2>
        <p className="mt-2 text-gray-600">
          FoodHive was founded with a mission to connect food lovers with their favorite meals.
          We believe that good food brings people together, and we strive to make every order an experience worth remembering.
        </p>
      </motion.div>

      {/* What We Offer */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-gray-700">What We Offer</h2>
        <ul className="mt-2 space-y-2 text-gray-600">
          <li>✅ Fresh and high-quality meals</li>
          <li>✅ Fast and reliable delivery</li>
          <li>✅ Easy online ordering</li>
          <li>✅ Wide variety of restaurants and cuisines</li>
        </ul>
      </motion.div>

      {/* Our Values */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-gray-700">Our Values</h2>
        <p className="mt-2 text-gray-600">
          At FoodHive, we prioritize customer satisfaction, food safety, and sustainability.
          Our team is dedicated to ensuring every order meets our high standards.
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-12"
      >
        <h2 className="text-2xl font-semibold text-gray-700">Join FoodHive Today!</h2>
        <p className="mt-2 text-gray-600">Order your favorite meals now and enjoy fast delivery.</p>
        <button className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-full text-lg hover:bg-orange-700 transition">
          Order Now
        </button>
      </motion.div>
    </div>
  );
};

export default AboutUs;
