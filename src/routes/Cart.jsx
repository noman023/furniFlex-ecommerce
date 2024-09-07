import { useContext } from "react";

import CartItem from "../components/CartItem";
import { AppContext } from "../context/AppContext";

export default function Cart() {
  const { cartItems: cartProduct, totalPrice } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-14 p-3 my-5">
      {/* ordered items */}
      <div className="lg:w-[60%] text-black">
        <h2 className="text-2xl font-semibold mb-8">
          An overview of your order(s)
        </h2>

        <div>
          {cartProduct.map((product) => (
            <CartItem key={product.id} data={product} />
          ))}
        </div>
      </div>

      {/* order stats */}
      <div className="lg:w-[30%]">
        <h2 className="text-black text-2xl font-semibold mb-8">
          Order Details
        </h2>

        <div className="bg-slate-50 py-4 px-3 rounded-md">
          <div className="space-y-2 text-gray-500 font-medium">
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>

            <div className="flex justify-between">
              <p>Shipping:</p>
              <p>Free</p>
            </div>

            <div className="flex justify-between">
              <p>Estimated Tax:</p>
              <p>$-</p>
            </div>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between text-black font-bold">
            <p>Total:</p>
            <p> ${totalPrice}</p>
          </div>
        </div>

        <button className="btn w-full text-white mt-5">Checkout</button>
      </div>
    </div>
  );
}
