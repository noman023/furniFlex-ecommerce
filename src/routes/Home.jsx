import Card from "../components/Card";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row justify-between gap-10 my-5 p-3">
      <div className="lg:w-[20%] text-center">
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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
