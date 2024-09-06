import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="text-center">
        <h1 className="text-3xl mb-3">404, Page Not Found!</h1>

        <Link to={"/"}>
          <button className="btn btn-primary">Go Home</button>
        </Link>
      </div>
    </div>
  );
}
