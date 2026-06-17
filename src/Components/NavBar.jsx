import "./navBar.css";
import { Link } from "react-router-dom";
import Jenny from "../assets/Jenny.jpg";

export default function NavBar() {
  return (
    <>
      <div className="navBarContainer">
        <div className="innerNavBar">
          <div className="navBarImage">
            <img src={Jenny} className="profileNavImage" />
            <div className="nameAndMotto">
              <p className="profileName">@FitnessLife</p>
              <p className="motto">"Coffee first, everything else second"</p>
            </div>
          </div>
          <div className="rightNavSide">
            <div className="links">
              <Link to="/" className="home">
                Home
              </Link>
              <Link to="/wall" className="profileWall">
                Wall
              </Link>
              <Link to="/about" className="aboutMe">
                About
              </Link>
              <div className="profileGeneratorBtn">
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
