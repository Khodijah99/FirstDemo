import Header from "../components/Header";

function SpecialMenu() {
  return (
    <div>
      <Header />
      <div className="SpeacialMenu">
        <ul className="African">
          <li>
            {" "}
            <p>African Dishes</p>
            <img
              src={require("../images/poundedyam.jpg")}
              className="FoodMenu"
              alt="menu"
            />
          </li>

          <li>
            {" "}
            <p>Western Dishes</p>
            <img
              src={require("../images/western.jpg")}
              className="FoodMenu"
              alt="menu"
            />
          </li>
          <li>
            {" "}
            <p>Breakfast </p>
            <img
              src={require("../images/breakfast.jpg")}
              className="FoodMenu"
              alt="menu"
            />
          </li>
          <li>
            {" "}
            <p>Desert </p>
            <img
              src={require("../images/desert.jpg")}
              className="FoodMenu"
              alt="menu2"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SpecialMenu;
