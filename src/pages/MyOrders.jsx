import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import moment from "moment/moment";
import { toast } from "react-toastify";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  console.log(orders)

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/myOrders/${user.email}`)
        .then((res) => {
          console.log(res.data);
          setOrders(res.data);
          setError(null);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            setError("Error 404: No orders found.");
          } else {
            setError("Something went wrong. Please try again.");
          }
          console.error(error);
        });
    }
  }, [user]);

  const handleDelete = (orderId) =>{
    axios.delete(`http://localhost:5000/deleteOrder/${orderId}`)
    .then(res => {
      setOrders(orders.filter((order) => order._id !== orderId));
      toast.success('Order Deleted succesfully')
    })
    .catch(error => {
      toast.error('Failed to delete the order')
    })
  }
  return (
    <div className="container mx-auto py-10">
    <h2 className="text-center text-3xl font-bold mb-6">My Orders</h2>
    {error ? (
      <div className="text-center text-red-500 font-bold">
        <p>{error}</p>
      </div>
    ) : (
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Food Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Buyer</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-4">
                  You have no orders yet
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id}>
                  <td className="border px-4 py-2">
                    <img
                      src={order.foodImg}
                      alt={order.foodName}
                      className="w-20 h-20 object-cover"
                    />
                  </td>
                  <td className="border px-4 py-2">{order.foodName}</td>
                  <td className="border px-4 py-2">${order.price}</td>
                  <td className="border px-4 py-2">{order.buyerName}</td>
                  <td className="border px-4 py-2">
                    {moment(order.buyingDate).format("MMMM DD, YYYY hh:mm A")}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    )}
  </div>
  );
};

export default MyOrders;
