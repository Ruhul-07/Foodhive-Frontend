import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { name, image, description, category, quantity } = food;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="h-48">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-3xl">{name}</h2>
        <p className="font-medium">{description}</p>
        <div className="flex justify-between items-center text-base font-normal">
          <p>Category: {category}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="card-actions justify-center">
          <Link className="w-full" to={`/foodDetails/${food?._id}`}>
            <button className="btn btn-warning w-full">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
