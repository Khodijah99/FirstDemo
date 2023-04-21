import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <div className="Brand">
        <img
          src={require("../images/logo.png")}
          className="App-logo"
          alt="logo"
        />
        <p className="BrandName">
          {" "}
          <span className="CompanyName">DineWith</span> &nbsp; &nbsp;{" "}
          <span className="Me"> Me</span>{" "}
        </p>
      </div>
      <div className="Menu">
        <Link to="/">
          {" "}
          <p className="MenuItem">Home</p>
        </Link>
        <Link to="/FoodMenu">
          {" "}
          <p className="MenuItem">Menu</p>{" "}
        </Link>
        <Link to="/ContactUs">
          {" "}
          <p className="MenuItem">Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
