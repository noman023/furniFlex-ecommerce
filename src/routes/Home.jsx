export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row justify-between gap-10 my-5 p-3">
      <div className="lg:w-[25%] text-center">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>

        <ul className="w-full ">
          <a href="">
            <li className="hover:bg-slate-200 py-1">Phone</li>
          </a>

          <a href="">
            <li className="hover:bg-slate-200 py-1">Cloth</li>
          </a>

          <a href="">
            <li className="hover:bg-slate-200 py-1">Laptop</li>
          </a>
        </ul>
      </div>

      <div className="lg:w-[75%] border">All cards</div>
    </main>
  );
}
