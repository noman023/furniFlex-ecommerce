import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { AppContext } from "../context/AppContext";

export default function CartItem({ data }) {
  const { deleteFromCart } = useContext(AppContext);
  const { image, price, title, id } = data;

  return (
    <div className="flex gap-5 text-black bg-slate-50 border px-2 py-5">
      {/* manage quantity  */}
      <div className="flex gap-3 items-center text-4xl px-2">
        <button className="hover:text-gray-500" title="Decrease Quantity">
          -
        </button>

        <p className="text-2xl border py-2 px-3">1</p>

        <button className="hover:text-gray-500" title="Increase Quantity">
          +
        </button>
      </div>

      {/* item info */}
      <div className="w-full flex gap-2">
        <div>
          <img
            src={image}
            alt="product image"
            className="w-24 h-24 rounded-xl"
          />
        </div>

        <div className="relative w-full">
          <h1 className="text-xl font-semibold">{title}</h1>

          <div className="text-xl">
            <RxCross1
              className="cursor-pointer absolute top-0 right-0"
              title="Delete Item"
              onClick={() => deleteFromCart(id)}
            />

            <p className="absolute bottom-0 right-0 font-bold">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
