import { IoBagOutline } from "react-icons/io5";

export default function Card() {
  return (
    <div className="card bg-slate-50 shadow-xl p-3">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="product iamge"
          className="rounded-md"
        />
      </figure>

      <div className="text-black">
        <h2 className="font-bold mt-6">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h2>

        <div className="flex gap-3 font-bold my-3 card-title">
          <p className="">$109.95</p>
          <p className="text-gray-400 line-through">$109.95</p>
          <p className="text-red-500">30% OFF</p>
        </div>

        <p className="text-gray-500">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>

        <div className="card-actions mt-4">
          <button className="btn w-full text-white">
            <IoBagOutline /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
