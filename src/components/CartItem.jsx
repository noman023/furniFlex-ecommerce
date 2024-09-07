import { useContext, useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AppContext } from "../context/AppContext";

export default function CartItem({ data }) {
  const [productQuntity, setProductQuntity] = useState(data.quantity || 1);
  const { deleteFromCart, updateCartItemQuantity } = useContext(AppContext);

  const { image, price, title, id } = data;

  // updates item's quantity
  useEffect(() => {
    updateCartItemQuantity(data.id, productQuntity);
  }, [productQuntity]);

  return (
    <div className="flex flex-col md:flex-row gap-5 text-black bg-slate-50 border px-2 py-5">
      {/* manage quantity  */}
      <div className="flex gap-3">
        <div className="flex gap-3 items-center text-4xl px-2">
          <button
            className="hover:text-gray-500"
            title="Decrease Quantity"
            onClick={() => setProductQuntity((prev) => prev - 1)}
            disabled={productQuntity === 1}
          >
            -
          </button>

          <p className="text-2xl border py-2 px-3">{productQuntity}</p>

          <button
            className="hover:text-gray-500"
            title="Increase Quantity"
            onClick={() => setProductQuntity((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        {/* item's image */}
        <div>
          <img
            src={image}
            alt="product image"
            className="w-24 h-24 rounded-xl"
          />
        </div>
      </div>

      {/* item info */}
      <div className="flex flex-grow justify-between gap-2">
        <h1 className="text-xl font-semibold">{title}</h1>

        <div className="flex flex-col items-end justify-between text-xl">
          <RxCross1
            className="cursor-pointer"
            title="Delete Item"
            onClick={() => deleteFromCart(id)}
          />

          <p className="font-bold text-">${price}</p>
        </div>
      </div>
    </div>
  );
}
