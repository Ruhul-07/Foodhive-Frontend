import { MdDescription, MdProductionQuantityLimits } from "react-icons/md";
import { SiOrigin } from "react-icons/si";
import { TbCategoryFilled } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const foodData = useLoaderData();
  const {
    image,
    name,
    description,
    category,
    shortDescription,
    foodOrigin,
    quantity,
  } = foodData;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="w-1/2 p-5">
        <img className="rounded-lg" src={image} alt="Album" />
      </figure>
      <div className="p-5 w-1/2">
        <div className="mb-10">
          <h2 className="card-title font-extrabold text-4xl">{name}</h2>
          <p className="font-normal">{description}</p>
        </div>
        <div className="mb-10">
          <p>
            <TbCategoryFilled className="inline mr-4 text-2xl" />
            Category: {category}
          </p>
          <p>
            <SiOrigin className="inline mr-4 text-2xl" />
            Food-Origin: {foodOrigin}
          </p>
          <p><MdProductionQuantityLimits className="inline mr-4 text-2xl"/>Quantity: {quantity}</p>
          <p>
            <MdDescription className="inline mr-4 text-2xl" />
            {shortDescription}
          </p>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-warning">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
