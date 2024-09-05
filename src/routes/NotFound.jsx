import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-96 mx-auto">
      <h1 className="text-3xl text-center">404, Page Not Found</h1>

      <Link to={"/"}>
        <button className="border">to home</button>
      </Link>
    </div>
  );
}
