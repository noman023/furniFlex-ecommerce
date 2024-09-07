import { useContext } from "react";

import Loading from "../components/Loading";
import { AppContext } from "../context/AppContext";
import Card from "../components/Card";

export default function Home() {
  const { loading, products } = useContext(AppContext);
  return (
    <main className="flex flex-col lg:flex-row justify-between gap-10 my-5 p-3">
      <div className="lg:w-[20%] text-center border-r-2">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>

        <ul className="w-full">
          <a href="">
            <li className="hover:bg-black hover:text-white rounded-md py-2">
              T-Shirts
            </li>
          </a>

          <a href="">
            <li className="hover:bg-black hover:text-white rounded-md py-2">
              Jacket
            </li>
          </a>

          <a href="">
            <li className="hover:bg-black hover:text-white rounded-md py-2">
              Laptop
            </li>
          </a>
        </ul>
      </div>

      <div className="lg:w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading ? (
            <Loading />
          ) : (
            products.map((product) => <Card key={product.id} data={product} />)
          )}
        </div>
      </div>
    </main>
  );
}
