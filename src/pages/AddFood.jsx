import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
    price: 0,
    quantity: 1,
    description: "",
    shortDescription: "",
    purchaseCount: 0, // You can remove this if it will always default to 0
    foodOrigin: "",
    addedBy: {
      name: user?.displayName || "Admin", // Replace "Admin" if needed
      email: user?.email || "admin@foodhive.com",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "price" || name === "quantity") {
      setFormData((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      category: "",
      image: "",
      price: 0,
      quantity: 1,
      description: "",
      shortDescription: "",
      foodOrigin: "",
      addedBy: {
        name: user?.displayName || "Admin",
        email: user?.email || "admin@foodhive.com",
      },
    });
  };

  const handleAddFood = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/addFood", formData)
      .then((res) => {
        toast.success("Food added successfully");
        console.log(res.data);
        resetFormData();
      })
      .catch((error) => {
        toast.error("Failed to add food item. Please try again.");
      });
  };
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl text-center font-bold mb-6">Add Food Item</h1>
      <form
        onSubmit={handleAddFood}
        className="space-y-6 border p-6 rounded-lg shadow-md max-w-lg mx-auto"
      >
        {/* Food Name */}
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="name">
            Food Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter food name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Food Category */}
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="category">
            Food Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter food category"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Food Image URL */}
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="image">
            Food Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter food image URL"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label
            className="block text-lg font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter detailed description"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Short Description */}
        <div>
          <label
            className="block text-lg font-medium mb-2"
            htmlFor="shortDescription"
          >
            Short Description
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            placeholder="Enter short description"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
            min="1"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            min="0"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Food Origin */}
        <div>
          <label
            className="block text-lg font-medium mb-2"
            htmlFor="foodOrigin"
          >
            Food Origin
          </label>
          <input
            type="text"
            id="foodOrigin"
            name="foodOrigin"
            value={formData.foodOrigin}
            onChange={handleChange}
            placeholder="Enter food origin"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
