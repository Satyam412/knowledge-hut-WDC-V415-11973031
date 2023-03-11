import Logo from "./../assets/learning.png";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <img src={Logo} />
      <div>
        <a className="navLink" href="#">
          Home
        </a>
        <a className="navLink" href="#">
          About
        </a>
        <a className="navLink" href="#">
          Blog
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
