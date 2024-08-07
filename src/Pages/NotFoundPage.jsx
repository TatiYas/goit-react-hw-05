import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <p>Whoops, something went wrong! Please try reloading this page!</p>
      <Link to="/">Back to home page!</Link>
    </div>
  );
}
export default NotFoundPage;