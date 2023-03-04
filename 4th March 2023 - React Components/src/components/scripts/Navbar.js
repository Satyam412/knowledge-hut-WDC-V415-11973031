import "./../styles/Navbar.css";
import Logo from "./../assets/hypnosis.png";

function Navbar() {
  return (
    <nav>
      <img src={Logo} />
      <div className="linkWrapper">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
