import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const MyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);


  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/myFoods?email=${user.email}`)
        .then((res) => {
            console.log(res.data)
            setFoods(res.data)
        })
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  return (
    <div className="container mx-auto py-10">
    <h1 className="text-3xl font-bold text-center mb-6">My Foods</h1>

    {/* Foods Table */}
    <div className="overflow-x-auto">
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food._id} className="border-t">
              <td className="px-4 py-2">
                <img
                  src={food.image}
                  alt={food.name}
                  className="h-16 w-16 object-cover rounded"
                />
              </td>
              <td className="px-4 py-2">{food.name}</td>
              <td className="px-4 py-2">${food.price}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleUpdate(food)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default MyFoods;
