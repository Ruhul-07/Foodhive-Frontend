import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState({
    name: "",
    category: "",
    image: "",
    price: 0,
    quantity: 0,
    description: "",
    shortDescription: "",
    foodOrigin: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/foods/${id}`)
      .then((res) => setFood(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/updateFood/${id}`, food)
      .then((res) => {
        toast.success("Food data updated succesfully");
        navigate("/myFoods");
      })
      .catch((error) => {
        toast.error("something went wrong");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Update Food</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block">
            Food Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={food.name}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={food.category}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={food.price}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        {/* Add other fields like quantity, description, etc. */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Food
        </button>
      </form>
    </div>
  );
};

export default UpdateFood;
