import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="homepage">
      <Link to="/register">
        <button className="btn">Register</button>
      </Link>
      <Link to="login">
        <button className="btn">Login</button>
      </Link>
      <h1 className="heading">This is HomePage</h1>
    </div>
  );
};
export default Homepage;
