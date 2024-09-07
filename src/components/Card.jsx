import { useContext } from "react";
import { IoBagOutline } from "react-icons/io5";

import { AppContext } from "../context/AppContext";

export default function Card({ data }) {
  const { addToCart } = useContext(AppContext);

  const { title, price, description, image } = data;

  return (
    <div className="card bg-slate-50 shadow-xl p-3 h-full">
      <figure>
        <img src={image} alt="product iamge" className="w-32 h-32 rounded-md" />
      </figure>

      <div className="text-black flex-grow">
        <h2 className="font-bold mt-6">{title}</h2>

        <div className="flex gap-3 font-bold my-3 card-title">
          <p className="">{price}</p>
          <p className="text-gray-400 line-through">$109.95</p>
          <p className="text-red-500">30% OFF</p>
        </div>

        <p className="text-gray-500 line-clamp-4">{description}</p>
      </div>

      <div className="card-actions mt-4">
        <button
          className="btn w-full text-white"
          onClick={() => addToCart(data)}
        >
          <IoBagOutline /> Add to Cart
        </button>
      </div>
    </div>
  );
}
