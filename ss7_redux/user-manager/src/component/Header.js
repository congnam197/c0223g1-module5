import { Link } from "react-router-dom";

export default function Header() {
  
  return (
    <div className="container">
      <div className="title">
        <h1>User List</h1>
      </div>
      <div className="get-user">
        <button  className="btn-display">
          <Link to="/list">Get Users</Link></button>
          <button  className="btn-home"><Link to="/">Home</Link></button>
      </div>
    </div>
  );
}
