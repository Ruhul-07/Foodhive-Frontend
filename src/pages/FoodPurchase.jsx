import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { format } from "date-fns";
import axios from "axios";
import { toast } from "react-toastify";

const FoodPurchase = () => {
    const {user} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const { id, name, quantity, price, image } = location.state || {};
    console.log(name)

    const [formData, setFormData] = useState({
      foodName: name || "",
      price: price || "",
      quantity: quantity || "",
      buyerName: user?.displayName || "",
      buyerEmail: user?.email || "",
      foodId: id,
      foodImg: image || "",
    });
    console.log("Initial Form Data:", formData);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      console.log(`Updated ${name} to:`, value);
    };

    const handlePurchase = e => {
        e.preventDefault()
        const purchaseData = {
          ...formData,
          buyingDate: format(new Date(), "MMMM dd, yyyy h:mm:ss a"),
        };
        
        axios.post('http://localhost:5000/purchaseFood', purchaseData)
        .then(res => {
          toast.success('Food items purchase Succesfully')
          navigate("/myOrders")
        })
        .catch(error => {
          toast.error('Error purchasing food')
        })
    };
    return (
        <div className="container mx-auto py-10">
        <h1 className="text-3xl text-center font-bold mb-6">Purchase Food</h1>
        <form onSubmit={handlePurchase} className="space-y-6 border p-6 rounded shadow-md">
          {/* Food Name */}
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="foodName">
              Food Name
            </label>
            <input
              type="text"
              id="foodName"
              name="foodName"
              value={formData.foodName}
              readOnly
              className="w-full px-4 py-2 border rounded bg-gray-100"
            />
          </div>
  
          {/* Price */}
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              readOnly
              className="w-full px-4 py-2 border rounded bg-gray-100"
            />
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
              className="w-full px-4 py-2 border rounded"
              min="1"
            />
          </div>

          {/* Food Image */}
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="quantity">
              Food Image
            </label>
            <input
              type="text"
              id="quantity"
              name="foodImg"
              value={formData.foodImg}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              min="1"
            />
          </div>
  
          {/* Buyer Name */}
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="buyerName">
              Buyer Name
            </label>
            <input
              type="text"
              id="buyerName"
              name="buyerName"
              value={formData.buyerName}
              readOnly
              className="w-full px-4 py-2 border rounded bg-gray-100"
            />
          </div>
  
          {/* Buyer Email */}
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="buyerEmail">
              Buyer Email
            </label>
            <input
              type="email"
              id="buyerEmail"
              name="buyerEmail"
              value={formData.buyerEmail}
              readOnly
              className="w-full px-4 py-2 border rounded bg-gray-100"
            />
          </div>
  
          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="btn btn-warning">
              Confirm Purchase
            </button>
          </div>
        </form>
      </div>
    );
};

export default FoodPurchase;