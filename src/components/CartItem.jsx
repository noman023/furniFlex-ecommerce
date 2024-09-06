import { RxCross1 } from "react-icons/rx";

export default function CartItem() {
  return (
    <div className="flex gap-5 text-black border px-2 py-3">
      {/* manage quantity  */}
      <div className="flex gap-3 items-center text-4xl">
        <button className="hover:text-gray-500" title="Increase Quantity">
          +
        </button>

        <p className="text-2xl border py-2 px-4">2</p>

        <button className="hover:text-gray-500" title="Decrease Quantity">
          -
        </button>
      </div>

      {/* item info */}
      <div className="w-full flex gap-2">
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="product image"
            className="w-24"
          />
        </div>

        <div className="w-full flex justify-between">
          <h1 className="text-xl font-semibold">Product name</h1>

          <div className="flex flex-col justify-between text-xl">
            <RxCross1 className="cursor-pointer" title="Delete Item" />

            <p>$50</p>
          </div>
        </div>
      </div>
    </div>
  );
}
